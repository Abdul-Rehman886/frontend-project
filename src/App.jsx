import { Route, Routes, useLocation } from "react-router-dom";
import Index from ".";
import Auth from "./auth";
import Products from "./products";
import CreateProduct from "./compnents/Products/createProduct";
import GetProduct from "./compnents/Products/getProduct";
import Layout from "./compnents/Layouts/layout";

const App = () => {
  const location = useLocation();
  const isAuthPath = location.pathname === "/";
  return (
    <>
      <div className="flex flex-col justify-center items-center w-screen h-screen">
        {isAuthPath ? (
          <Routes>
            <Route index element={<Auth />} />
          </Routes>
        ) : (
          <Layout>
            <Routes>
              <Route path="index" element={<Index />} />
              <Route path="products">
                <Route index element={<Products />} />
                <Route path="create-product" element={<CreateProduct />} />
                <Route path="get-product" element={<GetProduct />} />
              </Route>
            </Routes>
          </Layout>
        )}
      </div>
    </>
  );
};

export default App;
