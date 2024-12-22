import { Link } from "react-router-dom";

const Products = ({ children }) => {
  return (
    <>
      <div className="h-full w-full p-8 flex flex-col">
        <h1 className="text-2xl font-semibold">Product Page</h1>
        <div className="h-full w-full flex pt-4  flex-col">
          <div className="h-1/6 w-full flex gap-x-4">
            <Link
              to="/products/create-product"
              className="bg-black text-white py-2 px-4 rounded-md h-12"
            >
              Create Product
            </Link>
            <Link
              to="/products/get-product"
              className="bg-black text-white py-2 px-4 rounded-md h-12"
            >
              Get Product{" "}
            </Link>
          </div>
          <div className="h-5/6 w-full">{children}</div>
        </div>
      </div>
    </>
  );
};
export default Products;
