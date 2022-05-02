import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const InventoryDetail = () => {
    const { productId } = useParams();
    const navigate = useNavigate();

    const navigateToManageInventory = () => {
      navigate("/manage");
    };

    return (
      <div>
        <h3>Inventory Details Id: {productId}</h3>
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

export default InventoryDetail;