import React from 'react';
import './Item.css';

const Item = (props) => {
    const {description, image, name, price, quantity, supplier} = props.item;
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
            <button className='btn btn-primary'>DELETE</button>
          </div>
        </div>
      </div>
    );
};

export default Item;