import React, { useState, useEffect } from 'react';
import db from './Firebase';
import './Items.css';
import Navbar from './Navbar';
import { useStateValue } from './Redux/StateProvider';

function Items() {
  const [data, setData] = useState([]);
  const [loader, setLoader] = useState(true);
  const [{ initialState }, dispatch] = useStateValue();
  const [selectedImage, setSelectedImage] = useState(null);

  const addToBasket = (shoes) => {
    const { id, description, shoes: image, price, rating } = shoes;

    console.log("Adding to cart:", {
      id: id,
      title: description,
      image: image,
      price: price,
      rating: rating,
    });

    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: id,
        title: description,
        image: image,
        price: price,
        rating: rating,
      },
    });
  };

  useEffect(() => {
    const fetchData = async () => {
      const items = [];
      const snapshot = await db.collection('shoes').get();
      snapshot.forEach((doc) => {
        items.push({ id: doc.id, ...doc.data() });
      });
      setData(items);
      setLoader(false);
    };
    fetchData();
  }, []);

  const handleImageClick = (shoes) => {
    setSelectedImage(shoes.shoes);
  };

  return (
    <div>
      <Navbar />
      <div className="Items">
        {data.map((shoes) => (
          <div className="ItemsHead" key={shoes.id}>
            <img
              className="ItemsImg"
              src={shoes.shoes}
              alt="img"
              onClick={() => handleImageClick(shoes)}
            />

            <div className="ItemsDetails">
              <h4 className="ItemsTitle">{shoes.description}</h4>
              <h4 className="ItemsPrice">{shoes.price}</h4>
              <button onClick={() => addToBasket(shoes)}>add to cart</button>
            </div>
          </div>
        ))}
      </div>

      {selectedImage && (
        <div className="Popup">
          <div className="PopupContent">
            <span className="Close" onClick={() => setSelectedImage(null)}>
              &times;
            </span>
            <img className="PopupImage" src={selectedImage} alt="img" />

          </div>
        </div>
      )}
    </div>
  );
}

export default Items;
