import { useEffect, useState } from 'react';

const useProducts = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const url = 'product.json';
        fetch(url)
            .then(res => res.json())
            .then(data => setProducts(data));
    }, []);
    return [products, setProducts];
};

export default useProducts;