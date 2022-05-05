import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const UpdateQuantity = () => {
    const { id } = useParams();
    const [quantity, setQuantity] = useState({});

    useEffect(() => {
        const url = `http://localhost:5000/product/${id}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setQuantity(data));
        console.log(quantity);
    }, []);


    return (
        <div>
            <h2>Updating Quantity: {id}</h2>
        </div>
    );
};

export default UpdateQuantity;