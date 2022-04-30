import React from "react";
import "./Product.css";

const Product = (props) => {
    const { name, picture, price } = props.product;
    
  return (
  <div className="col">
    <div className="card">
      <img src={picture} className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      </div>
    </div>
  </div>
  );
};

export default Product;
