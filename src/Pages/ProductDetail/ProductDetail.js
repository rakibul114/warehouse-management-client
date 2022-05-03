import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import useProductDetail from '../../hooks/useProductDetail';
import './ProductDetail.css';

const ProductDetail = () => {  
    const { productId } = useParams();
  const [product] = useProductDetail(productId);
  
    const navigate = useNavigate();

    const navigateToManageInventory = () => {
      navigate("/manage");
    };

    return (
      <div className="container">
        <h3 className="text-center my-4">Product Details</h3>
        <div className="product-container mx-auto rounded-3 shadow">
          <div className="text-center my-3">
            <img width={250} src={product.picture} alt="" />
          </div>
          <div className="product-info px-4">
            <h6 className="text-muted">Product Id: {productId}</h6>
            <h3>{product.name}</h3>
            <p>
              <b>Price:</b> ${product.price}
            </p>
            <p>
              <b>Quantity:</b> {product.quantity}{" "}
              <small className="text-muted">pcs</small>
            </p>
            <p>
              <b>Supplier:</b> {product.supplier}
            </p>
            <p>{product.description}</p>
          </div>
          <div className="d-flex justify-content-center">
            <button className="w-50 btn btn-primary mt-3">Delivered</button>
          </div>
        </div>

        <div className="text-center">
          <button
            onClick={navigateToManageInventory}
            className="my-5 btn btn-primary"
          >
            Manage Inventories
          </button>
        </div>
      </div>
    );
};

export default ProductDetail;