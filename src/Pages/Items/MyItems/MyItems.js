import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { useNavigate } from 'react-router-dom';
import { signOut } from 'firebase/auth';
import axiosPrivate from '../../../api/axiosPrivate';
import Item from '../../../Pages/Items/Item/Item';

const MyItems = () => {
  const [user] = useAuthState(auth);  
  const [items, setItems] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {

    const getItems = async () => {
      const email = user.email;
      const url = `http://localhost:5000/item?email=${email}`;
      try {
        const { data } = await axiosPrivate.get(url);        
        setItems(data);
      }
      catch (error) {
        console.log(error.message);
        if (error.response.status === 401 || error.response.status === 403) {
          signOut(auth);
          navigate('/login');
        }
      
      }
    };
    getItems();
    
  }, [user]);
    
    return (
        <div className='container'>
        <h2 className='text-center my-4'>Your items: {items.length}</h2>
        {
           items.map(item =>(<Item key={item._id} item={item}></Item>))
        }
        
        </div>
    );
};

export default MyItems;