import React from "react";
import { useStateValue } from "./Redux/StateProvider";
import "./Cart.css";

const Cart = () => {
  const [{ basket, totalCount, totalPrice }, dispatch] = useStateValue();

  const removeFromBasket = (id) => {
    dispatch({ type: "REMOVE_FROM_BASKET", id });
    dispatch({ type: "DECREASE_COUNT" });
  };

  return (
    <div className="checkout">
      {basket.length === 0 ? (
        <div>
          <h2>Your cart is empty</h2>
        </div>
      ) : (
        <div>
          <h2>Your shopping cart</h2>
          <p>Total Count: {totalCount}</p>
          <p>Total Price: ${totalPrice}</p>
          {basket.map((item, index) => (
            <div key={item.id + "-" + index} className="cart-item">
              <img src={item.image} alt={item.title} />
              <div className="cart-item-details">
                <h3>{item.title}</h3>
                <p>Price: ${item.price}</p>
                <p>Rating: {item.rating}</p>
              </div>
              <button
                className="remove-button"
                onClick={() => removeFromBasket(item.id)}
              >
                Remove
              </button>
            </div>
          ))}
   
        </div>
      )}
    </div>
  );
};

export default Cart;
