import React, { useState, useEffect } from 'react';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import './ImgSlider.css';
import db from './Firebase'
function ImgSlider() {
  const [data, setData] = useState([]);
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const items = [];
      const snapshot = await db.collection("items").get(); // Using 'db' from Firebase.js
      snapshot.forEach((doc) => {
        items.push({ id: doc.id, ...doc.data() });
      });
      setData(items);
      setLoader(false);
    };
    fetchData();
  }, []);

  const settings ={
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };

  return (
    <Slider {...settings}>
      {data.map((item) => (
        <div className='Wrap' key={item.id}>
          <img className='Image' src={item.backgroundimg} alt='img' />  
        </div>
      ))}
    </Slider>
  );
      }

export default ImgSlider;
