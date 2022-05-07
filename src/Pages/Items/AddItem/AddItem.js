import React from 'react';
import './AddItem.css';
import { useForm } from "react-hook-form";
import { useNavigate } from 'react-router-dom';
// for toast
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AddItem = () => {
  const { register, handleSubmit, reset } = useForm();
  const navigate = useNavigate();

  const onSubmit = (data) => {
    console.log(data
    );
    
    // Post/add data to database and (UI)
    const url = `http://localhost:5000/item`;
    fetch(url, {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(data)
    })
      .then(res => res.json())
      .then(result => {
        console.log(result);
        toast('Your item has been added');
      });
    reset();
  };

  const navigateToManage = () => {
    navigate('/manage');
  };

    return (
      <div className="w-50 mx-auto">
        <h1 className="text-center  mt-5 mb-3">Add an item</h1>
        <div className="form-container mb-5">
          <form
            className="d-flex flex-column w-100 mx-auto"
            onSubmit={handleSubmit(onSubmit)}
          >
            <input
              className="mb-2"
              placeholder="Item Name"
              {...register("name", { required: true, maxLength: 20 })}
            />
            <input
              className="mb-2"
              placeholder="Description"
              {...register("description")}
            />
            <input
              className="mb-2"
              placeholder="Price"
              type="number"
              {...register("price")}
            />
            <input
              className="mb-2"
              placeholder="Photo URL"
              type="text"
              {...register("picture")}
            />
            <input
              className="mb-2"
              placeholder="Quantity"
              type="number"
              {...register("quantity")}
            />
            <input
              className="mb-2"
              placeholder="Supplier"
              type="text"
              {...register("supplier")}
            />
            <input type="submit" value="Add Item" />
          </form>
        </div>
        <div className="text-center">
          <button className="btn btn-primary mb-5" onClick={navigateToManage}>
            Manage Items
          </button>
        </div>        
      </div>
    );
};

export default AddItem;