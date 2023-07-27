import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useStateValue } from './Redux/StateProvider';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { signInWithPopup } from 'firebase/auth';
import { auth, GoogleAuthProvider, provider } from './Config'; 
import './Navbar.css'
function Navbar() {
  const [isMobile, setIsMobile] = useState(false);
  const [{ basket }] = useStateValue();
  const [value, setValue] = useState("");

  const handleClick = () => {
    signInWithPopup(auth, provider)
      .then((data) => {
        setValue(data.user.email);
        localStorage.setItem("email", data.user.email);
      })
      .catch((error) => {
        console.log("Error signing in:", error);
      });
  };

  useEffect(() => {
    setValue(localStorage.getItem('email'));
  }, []);

  const handleMobileMenuClick = () => {
    setIsMobile(!isMobile);
  };

  return (
    <nav className="navbar">
      <h1 className="navbar-logo">shopzy</h1>
      <div className={`navbar-links ${isMobile ? 'mobile' : ''}`}>
        <Link to="/items" className="navbar-link">shoes</Link>
        <Link to="/itemstwo" className="navbar-link">pants</Link>
        <Link to="/contact" className="navbar-link">Shirts</Link>
        <Link to="/" className="navbar-link">Dashboard</Link>
      </div>
      <button className="navbar-login-button" onClick={handleClick}>
        Login
      </button>
      <Link to="/cart" className="navbar-cart-icon">
        <FontAwesomeIcon icon={faShoppingCart} />
      </Link>
      <span className="navbar-basket-count">{basket.length}</span>
      <div className="navbar-mobile-menu-icon" onClick={handleMobileMenuClick}>
        <i className={isMobile ? 'fas fa-times' : 'fas fa-bars'}></i>
      </div>
    </nav>
  );
}

export default Navbar;
