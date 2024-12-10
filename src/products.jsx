import { Link } from "react-router-dom";

const Products = () => {
  return (
    <>
      <Link to="create-product">Create Product</Link>
      <Link to="get-product">Get Product</Link>
    </>
  );
};
export default Products;
