import React from 'react';
import { Table } from 'react-bootstrap';
import useProducts from '../../../hooks/useProducts';
import './ManageItems.css';


const ManageItems = () => {
  const [products, setProducts] = useProducts();


    return (
      <div className="container my-5">
        <div>
          <h2 className='text-center mb-5'>Manage Items</h2>
          <div>
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>Product Name</th>
                  <th>Price</th>
                  <th>Quantity</th>
                  <th>Supplier</th>
                </tr>
              </thead>
              <tbody>
                {products.map((product) => (
                  <tr key={product._id}>
                    <td width={250}>{product.name}</td>
                    <td width={150}>${product.price}</td>
                    <td width={150}>{product.quantity} <span className='text-secondary'>pcs</span></td>
                    <td width={100}>{product.supplier}</td>
                    <td className='text-center' width={50}><button className='delete-button'>DELETE</button></td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </div>
        </div>
      </div>
    );
};

export default ManageItems;