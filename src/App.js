import React from "react";

import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Products from "./components/Products/Products";
import Footer from "./components/Footer/Footer";
import "./App.css";

function App() {
  return (
    <div className="app">
      <Navbar />
      <Hero />
      <Products />
      <Footer />
    </div>
  );
}


export default App;