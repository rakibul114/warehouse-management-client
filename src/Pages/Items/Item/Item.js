import axios from 'axios';
import React, { useState } from 'react';
import { toast } from 'react-toastify';
import './Item.css';

const Item = (props) => {  
  // const [singleItem, setSingleItem] = useState();
  const { _id, image, name, price, quantity, supplier } = props.item;

  // Delete a item from my items page
  const handleDeleteItem = (id) => {
    const proceed = window.confirm("Are you sure?");
    if (proceed) {
      const url = `http://localhost:5000/myitem/${id}`;
      console.log(url);
      // Axios method
      axios.delete(url, props.item).then((response) => {
        const { data } = response;
        console.log(data);
        if (data.deletedCount) {
          toast("Your item has been deleted");
        }
      });      
    }
  };

  return (
    <div className="item-container d-flex w-75 mx-auto my-5">
      <div>
        <img height={100} src={image} alt="" />
      </div>
      <div className="w-100 d-flex justify-content-between align-items-center">
        <div className="product-info ms-2">
          <h4>{name}</h4>
          <p>Price: ${price}</p>
          <p>
            Quantity: {quantity} <small>pcs</small>
          </p>
          <p>Supplier: {supplier}</p>
        </div>
        <div className="button">
          <button
            className="btn btn-primary"
            onClick={() => handleDeleteItem(props.item._id)}
          >
            DELETE
          </button>
        </div>
      </div>
    </div>
  );
};

export default Item;