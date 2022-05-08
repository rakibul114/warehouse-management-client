import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";
import { useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import axiosPrivate from "../../../api/axiosPrivate";
import axios from "axios";
import { toast } from "react-toastify";
import "./MyItems.css";

const MyItems = () => {
  const [user] = useAuthState(auth);
  const [items, setItems] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    const getItems = async () => {
      const email = user?.email;
      const url = `https://mighty-shelf-89768.herokuapp.com/myitem?email=${email}`;
      try {
        const { data } = await axiosPrivate.get(url);
        setItems(data);
      } catch (error) {
        console.log(error.message);
        if (error.response.status === 401 || error.response.status === 403) {
          signOut(auth);
          navigate("/login");
        }
      }
    };
    getItems();
  }, [user]);

  // Delete a item from my items page
  const handleDeleteItem = (id) => {
    const proceed = window.confirm("Are you sure?");
    if (proceed) {
      const url = `https://mighty-shelf-89768.herokuapp.com/myitem/${id}`;
      console.log(url);
      // Axios method
      axios.delete(url, items).then((response) => {
        const { data } = response;
        const remaining = items.filter((item) => item._id !== id);
        setItems(remaining);
        if (data.deletedCount) {
          toast("Your item has been deleted");
        }
      });
    }
  };

  return (
    <div>
      <h2 className="text-center">Your items: {items.length}</h2>
      {items.map((item) => (
        <div className="item-container d-flex w-75 mx-auto my-5" key={item._id}>
          <div>
            <img height={100} src={item.image} alt="" />
          </div>
          <div className="w-100 d-flex justify-content-between align-items-center">
            <div className="product-info ms-2">
              <h4>{item.name}</h4>
              <p>Price: ${item.price}</p>
              <p>
                Quantity: {item.quantity} <small>pcs</small>
              </p>
              <p>Supplier: {item.supplier}</p>
            </div>
            <div className="button">
              <button
                className="btn btn-primary"
                onClick={() => handleDeleteItem(item._id)}
              >
                DELETE
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
    // <div className='container'>
    // <h2 className='text-center my-4'>Your items: {items.length}</h2>
    // {
    //    items.map(item =>(<Item key={item._id} item={item}></Item>))
    // }

    // </div>
  );
};

export default MyItems;
