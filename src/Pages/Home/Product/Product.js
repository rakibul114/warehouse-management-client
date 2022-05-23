import React from "react";
import { useNavigate } from "react-router-dom";
import "./Product.css";


const Product = (props) => {
  const { _id, name, picture, price, quantity, description, supplier } = props.product;
  const navigate = useNavigate();
      
  const navigateToProductDetail = id => {
    navigate(`/product/${id}`);
  };
  
  return (
    <div className="container">
      <div className="col">
        <div className="card shadow-sm rounded">
          <img src={picture} className="card-img-top product-img" alt="..." />
          <div className="card-body">
            <h4 className="card-title">{name}</h4>
            <p className="card-text" title={description}>
              {description.length >= 20
                ? description.slice(0, 230)
                : description}
            </p>
            <p>
              <b>Price:</b> ${price}
            </p>
            <p>
              <b>Quantity:</b> {quantity}
            </p>
            <p>
              <b>Supplier:</b> {supplier}
            </p>
            <button
              onClick={() => navigateToProductDetail(_id)}
              className="button-style py-2 px-2"
            >
              UPDATE STOCK
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
