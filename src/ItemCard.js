import React from "react";
import { useCart } from "react-use-cart";
import "./itemCard.css";
import Rating from "./Rating";

const ItemCard = ({ item }) => {
  const { addItem } = useCart();

  return (
    <div className="itemCard-wrapper">
      <img className="itemCard-img" src={item.image} alt="" />
      <h5>{item.title}</h5>
      <h5 className="itemCard-price">{item.price} €</h5>
      <div className="itemCard-rating">
        <Rating value={item.rating} text={`${item.numReviews} Évaluation(s)`} />
      </div>
      <button onClick={() => addItem(item)}>Ajouter au panier</button>
    </div>
  );
};

export default ItemCard;
