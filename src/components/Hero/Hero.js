import React from "react";
import "./Hero.css";

function Hero(){
  return (
    <section className="hero" id="home">
      <div className="hero-content">
        <p className="hero-small-title">🪷 श्री राधे कृष्ण 🪷</p>
        <h1>
          Laddu Gopal Ji Ke Liye
          <span> Pyare Jhule</span>
        </h1>

        <p className="hero-description">
          Apne Laddu Gopal Ji ke ghar ko aur bhi sundar banayein
          hamare handcrafted aur beautiful jhulo ke saath.
        </p>

        <div className="hero-buttons">
          <a href="#jhula" className="shop-btn">Explore Jhule</a>
          <a href="#about" className="know-btn">Know More</a>
        </div>
      </div>

      <div className="hero-image-wrapper">
        <div className="hero-decoration">🌸</div>

        <img src={require("../../assets/images/hero-jhula.jpg")} alt="Beautiful Laddu Gopal Jhula" className="hero-image"/>
        <div className="hero-bottom-decoration">🪷</div>
      </div>
    </section>
  );
};

export default Hero;