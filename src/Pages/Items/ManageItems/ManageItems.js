import React from "react";
import { Table } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import useProducts from "../../../hooks/useProducts";
import "./ManageItems.css";
// for toast
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ManageItems = () => {
  const [products, setProducts] = useProducts();
  const navigate = useNavigate();

  const navigateToAddItem = () => {
    navigate("/additem");
  };

  // Delete a product from manage items page
  const handleDelete = (id) => {
    const proceed = window.confirm("Are you sure?");
    if (proceed) {
      const url = `https://mighty-shelf-89768.herokuapp.com/product/${id}`;
      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          const remaining = products.filter((product) => product._id !== id);
          setProducts(remaining);
          toast("Your item has been deleted");
        });
    }
  };

  return (
    <div className="container my-5">
      <div>
        <h2 className="text-center mb-5">Manage Items</h2>
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
                  <td width={150}>
                    {product.quantity}{" "}
                    <span className="text-secondary">pcs</span>
                  </td>
                  <td width={100}>{product.supplier}</td>
                  <td className="text-center" width={50}>
                    <button
                      onClick={() => handleDelete(product._id)}
                      className="delete-button px-3 py-1"
                    >
                      DELETE
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      </div>
      <div className="text-center mt-4">
        <button onClick={navigateToAddItem} className="btn btn-primary px-5">
          Add New Item
        </button>
      </div>
    </div>
  );
};

export default ManageItems;
