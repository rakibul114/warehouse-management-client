import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Product from "../Product/Product";
import "./Products.css";

const Products = () => {
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const url = "product.json";
    fetch(url)
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  const navigateToManageInventory = () => {
    navigate('/manage');
  };

  return (
    <div className="container">
      <h1 className="products-title text-center">PERFUME COLLECTION</h1>
      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-5">
        {products.map((product) => (
          <Product key={product._id} product={product}></Product>
        ))}
      </div>
      <div className="text-center">
        <button onClick={navigateToManageInventory} className="mt-5 btn btn-primary">
          Manage Inventories
        </button>
      </div>
    </div>
  );
};

export default Products;
