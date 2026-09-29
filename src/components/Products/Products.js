import React from "react";
import "./Products.css";
import ProductCard from "../ProductCard/ProductCard";

function Products(){
  const products = [
    {
      id: 1,
      image: require("../../assets/images/jhula-1.jpg"),
      name: "Royal Peacock Jhula",
      price: "1,499",
      description:"Beautiful traditional jhula designed specially for Laddu Gopal Ji.",
    },
    {
      id: 2,
      image: require("../../assets/images/jhula-2.jpg"),
      name: "Vrindavan Jhula",
      price: "1,799",
      description:"Elegant handcrafted swing to create a beautiful divine corner.",
    },
    {
      id: 3,
      image: require("../../assets/images/jhula-3.jpg"),
      name: "Golden Flower Jhula",
      price: "1,299",
      description:"Decorated with beautiful floral details for your Kanha Ji.",
    },
    {
      id: 4,
      image: require("../../assets/images/jhula-4.jpg"),
      name: "Madhav Designer Jhula",
      price: "1,999",
      description:"Premium designer jhula made for a special place of your Laddu Gopal.",
    },
  ];

  return (
    <section className="products-section" id="jhula">
      <div className="products-heading">
        <p>🪷 Our Collection 🪷</p>
        <h2>Beautiful Jhule For Laddu Gopal Ji</h2>
        <span>
          Har jhula prem aur bhakti se sajaya gaya hai.
        </span>
      </div>

      <div className="products-grid">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            image={product.image}
            name={product.name}
            price={product.price}
            description={product.description}
          />
        ))}
      </div>
    </section>
  );
};

export default Products;