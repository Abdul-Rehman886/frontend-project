import { Route, Routes } from "react-router-dom";
import Index from ".";
import Auth from "./auth";
import Products from "./products";
import CreateProduct from "./compnents/Products/createProduct";
import GetProduct from "./compnents/Products/getProduct";

const App = () => {
  return (
    <>
      <div className="flex flex-col justify-center items-center w-screen h-screen  ">
        <Routes>
          <Route index element={<Auth />} />

          <Route path="index" element={<Index />} />
          <Route path="products">
            <Route index element={<Products />} />
            <Route path="create-product" element={<CreateProduct />} />
            <Route path="get-product" element={<GetProduct />} />
          </Route>
        </Routes>
      </div>
    </>
  );
};

export default App;
