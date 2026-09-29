import React from "react";
import "./ProductCard.css";

const ProductCard = ({ image, name, price, description }) => {
  return (
    <div className="product-card">
      <div className="product-image-box">
        <img src={image} alt={name} />
        <span className="product-badge">Handcrafted</span>
      </div>

      <div className="product-info">
        <p className="product-category">Laddu Gopal Jhula</p>
        <h3>{name}</h3>

        <p className="product-description">{description}</p>
        <div className="product-bottom">
          <span className="product-price">₹{price}</span>

          <button className="buy-btn">Buy Now</button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;