import { Route, Routes } from "react-router-dom";
import Index from ".";
import Auth from "./auth";

const App = () => {
  return (
    <>
      <div className="flex flex-col justify-center items-center w-screen h-screen  ">
        <Routes>
          <Route path="/" element={<Auth />} />

          <Route path="/index" element={<Index />} />
        </Routes>
      </div>
    </>
  );
};

export default App;
