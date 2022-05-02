import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import useProductDetail from '../../hooks/useProductDetail';

const ProductDetail = () => {  
    const { productId } = useParams();
  const [product] = useProductDetail(productId);
    const navigate = useNavigate();

    const navigateToManageInventory = () => {
      navigate("/manage");
    };

    return (
      <div>
        <h3>Inventory Details Id: {product.name}</h3>
        <div className="text-center">
          <button
            onClick={navigateToManageInventory}
            className="mt-5 btn btn-primary"
          >
            Manage Inventories
          </button>
        </div>
      </div>
    );
};

export default ProductDetail;