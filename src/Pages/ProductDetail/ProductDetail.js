import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import useProductDetail from '../../hooks/useProductDetail';
import './ProductDetail.css';
import axios from 'axios';
import { useAuthState } from "react-firebase-hooks/auth";
import auth from '../../firebase.init';


const ProductDetail = () => {  
  const { productId } = useParams();
  const [product, setProduct] = useProductDetail(productId);
  const [user] = useAuthState(auth);
  
  
  const [addQuantity, setAddQuantity] = useState(1);
  
  const { quantity } = product;
  
    const navigate = useNavigate();
    const navigateToManageInventory = () => {
      navigate("/manage");
  };
  
  // event handler for delivered button
  const decreaseQuantity = () => {
    let newQuantity = parseInt(quantity - 1);    
    const newProduct = { ...product, quantity: newQuantity };   
    setProduct(newProduct);
    if (newProduct.length <= 0) {
      return;
    }    
    
    const url = `http://localhost:5000/product/${productId}`;
    fetch(url, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newProduct),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("success", data);
        toast("Quantity updated successfully!!!");
      });
  };

  const handleUpdate = () => {
    const item = {
      supplier: product.supplier,
      price: product.price,
      description: product.description,
      image: product.picture,
      quantity: product.quantity,
      name: product.name,
      userName: user.displayName,
      email: user.email,
    };
    axios.post("http://localhost:5000/product", item).then((response) => {
      const { data } = response;
      if (data.insertedId) {
        toast('Your item is updated');
      }
    });
  };

  const handleAddQuantity = async () => {   
    let deliver = addQuantity;
    let quantityParse = parseInt(product.quantity);
    let quantity = quantityParse + deliver;

    const productInfo = {
      supplier: product.supplier,
      price: product.price,
      description: product.description,
      image: product.picture,      
      quantity: quantity,
      name: product.name,
    };
    const url = `http://localhost:5000/product/${productId}`;
    fetch(url, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(productInfo),
    })
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        setProduct(productInfo);
      });
  };
  const updateQuantity = (event) => {
    event.preventDefault();
    const q = event.target.value;
    const total = parseInt(q);
    setAddQuantity(total);
    toast('Quantity added');    
    event.target.reset();    
  };  

    return (
      <div className="container">
        <h3 className="text-center my-4">Product Details</h3>
        <div className="product-container mx-auto rounded-3 shadow">
          <div className="text-center my-3">
            <img width={250} src={product.picture} alt="" />
          </div>
          <div className="product-info px-4">
            <h6 className="text-muted">Product Id: {productId}</h6>
            <h3>{product.name}</h3>
            <p>
              <b>Price:</b> ${product.price}
            </p>
            <p>
              <b>Quantity:</b>{" "}
              {product.quantity === 0 ? (
                <span className="text-danger fw-bold">Sold Out</span>
              ) : (
                product.quantity
              )}{" "}
              <small className="text-muted">
                {product.quantity === 0 ? "" : "pcs"}
              </small>
            </p>

            <p>
              <b>Supplier:</b> {product.supplier}
            </p>
            <p>{product.description}</p>
          </div>
          <div className="text-center mt-4">
            <button onClick={handleUpdate} className="btn btn-success me-3">Update</button>
            <button
              onClick={() => decreaseQuantity(productId)}
              className="btn btn-primary"
            >
              Delivered
            </button>
          </div>
        </div>

        <div className="mt-5 d-flex justify-content-center align-items-center">
          <form
            // onSubmit={increaseQuantity}
            className="d-flex justify-content-center align-items-center"
          >
            <Form.Group className="mb-3" controlId="formBasicNumber">
              <Form.Control
                // ref={inputRef}
                onBlur={updateQuantity}
                type="text"
                placeholder="Enter quantity number"
                autoComplete="false"
              />
            </Form.Group>
            <Button
              onClick={() => handleAddQuantity()}
              className="mb-3 ms-2"
              variant="success"
              type="submit"
            >
              Restock
            </Button>
          </form>
        </div>

        <div className="text-center">
          <button
            onClick={navigateToManageInventory}
            className="mb-5 mt-4 btn btn-primary"
          >
            Manage Inventories
          </button>
        </div>
      </div>
    );
};

export default ProductDetail;