import React, { useEffect, useState } from 'react';
import axios from "axios";
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import Item from '../Item/Item';

const MyItems = () => {
    const [user] = useAuthState(auth);    
  const [items, setItems] = useState([]);
  
    
    useEffect(() => {
      const getItems = async () => {
        const email = user.email;
        const url = `http://localhost:5000/item?email=${email}`;
        const { data } = await axios.get(url);        
        setItems(data);
      };
      getItems();
    }, [user]);
    return (
        <div className='container'>
        <h2 className='text-center my-4'>Your items</h2>
        {
          items.map(item => <Item key={item._id} item={item}></Item>)
        }
        </div>
    );
};

export default MyItems;