import React, { useEffect , useState} from 'react';
import Navbar from './Navbar';
import { useStateValue } from './Redux/StateProvider';
import db from './Firebase';
function Nike() {
  const [data, setData] = useState([]);
  const [loader, setLoader] = useState(true);
  const [{ initialState }, dispatch] = useStateValue();
  const [selectedPant, setSelectedPant] = useState(null);

  const addToBasket = (pant) => {
    const { id, description, image, price, rating } = pant;

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
      const snapshot = await db.collection('puma').get();
      snapshot.forEach((doc) => {
        items.push({ id: doc.id, ...doc.data() });
      });
      setData(items);
      setLoader(false);
    };
    fetchData();
  }, []);

  const handleImageClick = (pant) => {
    setSelectedPant(pant);
  };

  const handleClosePopup = () => {
    setSelectedPant(null);
  };
  return (
    <div>
    <Navbar />
    <div className="ItemsContainer">
      {data.map((pant) => (
        <div className="ItemsHeadTwo" key={pant.id}>
          <img
            className="ItemsImgTwo"
            src={pant.image}
            alt="img"
            onClick={() => handleImageClick(pant)}
          />

          <div className="ItemsDetailsTwo">
            <h4 className="ItemsTitleTwo">{pant.description}</h4>
            <h4 className="ItemsPriceTwo">{pant.price}</h4>
            <button onClick={() => addToBasket(pant)}>add to cart</button>
          </div>
        </div>
      ))}
    </div>

    {selectedPant && (
      <div className="PopupContainer">
        <div className="PopupContent">
          <span className="CloseButton" onClick={handleClosePopup}>
            &times;
          </span>
          <img className="PopupImage" src={selectedPant.image} alt="img" />
        </div>
      </div>
    )}
  </div>
  );
}

export default Nike;
