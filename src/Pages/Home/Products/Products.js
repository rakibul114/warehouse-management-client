import { useNavigate } from "react-router-dom";
import useProducts from "../../../hooks/useProducts";
import Product from "../Product/Product";
import "./Products.css";

const Products = () => {
  const [products] = useProducts();
  const navigate = useNavigate();
  

  const navigateToManageInventory = () => {
    navigate('/manage');
  };

  return (
    <div className="container">
      <div className="d-flex justify-content-center align-items-center">
        <div style={{ height: "1px" }} className="title-bar w-25 me-5"></div>
        <h1 className="products-title text-center">PERFUME COLLECTION</h1>
        <div style={{ height: "1px" }} className="title-bar w-25 ms-5"></div>
      </div>
      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-5">
        {products.slice(0, 6).map((product) => (
          <Product key={product._id} product={product}></Product>
        ))}
      </div>
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

export default Products;
