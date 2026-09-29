import React from "react";
import "./Navbar.css";

function Navbar(){
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <span>🪷</span>
        <h2>Gopal Jhula</h2>
      </div>

      <div className="navbar-links">
        <a href="#home">Home</a>
        <a href="#jhula">Jhula</a>
        <a href="#about">About</a>
        <a href="#contact">Contact</a>
      </div>
    </nav>
  );
};

export default Navbar;