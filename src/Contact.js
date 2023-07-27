import React, { useState, useEffect } from 'react';
import db from './Firebase';
import './Items.css';
import Navbar from './Navbar';
import { useStateValue } from './Redux/StateProvider';

function Contact() {
  const [data, setData] = useState([]);
  const [loader, setLoader] = useState(true);
  const [{ initialState }, dispatch] = useStateValue();
  const [selectedImage, setSelectedImage] = useState(null);

  const addToBasket = (shirt) => { // Updated parameter name to "shirt"
    const { id, description, image, price, rating } = shirt; // Updated property name to "image"

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
      const snapshot = await db.collection('shirt').get(); // Updated collection name to 'shirt'
      snapshot.forEach((doc) => {
        items.push({ id: doc.id, ...doc.data() });
      });
      setData(items);
      setLoader(false);
    };
    fetchData();
  }, []);

  const handleImageClick = (shirt) => { // Updated parameter name to "shirt"
    setSelectedImage(shirt.image); // Updated property name to "image"
  };

  return (
    <div>
      <Navbar />
      <div className="Items">
        {data.map((shirt) => ( // Updated variable name to "shirt"
          <div className="ItemsHead" key={shirt.id}> {/* Updated variable name to "shirt" */}
            <img
              className="ItemsImg"
              src={shirt.image} // Updated property name to "image"
              alt="img"
              onClick={() => handleImageClick(shirt)} // Updated variable name to "shirt"
            />

            <div className="ItemsDetails">
              <h4 className="ItemsTitle">{shirt.description}</h4> {/* Updated variable name to "shirt" */}
              <h4 className="ItemsPrice">{shirt.price}</h4> {/* Updated variable name to "shirt" */}
              <button onClick={() => addToBasket(shirt)}>add to cart</button> {/* Updated variable name to "shirt" */}
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

export default Contact;
