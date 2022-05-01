import React from 'react';
import { useParams } from 'react-router-dom';

const InventoryDetail = () => {
    const { productId } = useParams();
    return (
        <div>
            <h3>Inventory Details Id: {productId}</h3>
        </div>
    );
};

export default InventoryDetail;