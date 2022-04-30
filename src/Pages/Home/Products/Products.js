import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Products.css';

const Products = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const url = 'product.json';
        fetch(url)
            .then(res => res.json())
            .then(data => setProducts(data));
    }, []);

    return (
        <div>
            <h1>Perfume collection:</h1>
            {
                products.map(product => <Product key={product._id}product={product}></Product>)
            }
        </div>
    );
};

export default Products;