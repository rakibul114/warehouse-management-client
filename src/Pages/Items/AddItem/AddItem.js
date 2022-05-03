import React from 'react';
import './AddItem.css';
import { useForm } from "react-hook-form";

const AddItem = () => {
    const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    console.log(data
    );
    // Post/add data to database and (UI)
    const url = `http://localhost:5000/product`;
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
      });
  };

    return (
      <div className="w-50 mx-auto">
        <h1 className='text-center  mt-5 mb-3'>Add an item</h1>
        <div className='form-container mb-5'>
          <form className="d-flex flex-column w-100 mx-auto" onSubmit={handleSubmit(onSubmit)}>
            <input className='mb-2' placeholder='Item Name' {...register("name", { required: true, maxLength: 20 })}
            />
            <input className='mb-2' placeholder='Description' {...register("description")} />
            <input className='mb-2' placeholder='Price' type="number" {...register("price")} />
            <input className='mb-2' placeholder='Photo URL' type="text" {...register("picture")} />
            <input className='mb-2' placeholder='Quantity' type="number" {...register("quantity")} />
            <input className='mb-2' placeholder='Supplier' type="text" {...register("supplier")} />
            <input type="submit" value='Add Item'/>
          </form>
        </div>
      </div>
    );
};

export default AddItem;