import React from "react";
import "./Footer.css";

function Footer(){
  return (
    <footer className="footer" id="contact">
      <div className="footer-container">

        <div className="footer-brand">
          <div className="footer-logo">
            🪷
            <h2>Gopal Jhula</h2>
          </div>

          <p>
            Laddu Gopal Ji ke liye beautiful aur
            handcrafted jhulo ka collection.
          </p>
        </div>
        <div className="footer-links">
          <h3>Quick Links</h3>
          <a href="#home">Home</a>
          <a href="#jhula">Our Jhule</a>
          <a href="#about">About Us</a>
          <a href="#contact">Contact</a>
        </div>

        <div className="footer-contact">
          <h3>Contact Us</h3>
          <p>📞 +91 98765 43210</p>
          <p>📧 hello@gopaljhula.com</p>
          <p>📍 Vrindavan, India</p>
        </div>

      </div>

      <div className="footer-bottom">
        <p>
          © 2026 Gopal Jhula. Made with 🪷 & devotion.
        </p>
      </div>
    </footer>
  );
};

export default Footer;