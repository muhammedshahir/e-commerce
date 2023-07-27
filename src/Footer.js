import React from 'react';
import './Footer.css'; // Import the Footer.css file

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>About Us</h3>
          <p> We are a passionate team dedicated to providing the best products and services to our customers. </p>
        </div>
        <div className="footer-section">
          <h3>Contact Us</h3>
          <p>Email: shopzy@gmail.com</p>
          <p>Phone: +1 (123) 456-7890</p>
        </div>
        <div className="footer-section">
          <h3>Follow Us</h3>
          <div className="social-icons">
            <a href="#" className="social-icon">facebook<i className="fab fa-facebook-f"></i></a>
            <a href="#" className="social-icon">instagram<i className="fab fa-twitter"></i></a>
            <a href="#" className="social-icon">twitter<i className="fab fa-instagram"></i></a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Your Website. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
