import Navbar from "./nav-bar";
import Sidebar from "./side-bar";

const Layout = ({ children }) => {
  return (
    <>
      <div className="h-full w-full ">
        <Navbar />
        <div className="h-full w-full pt-16 flex ">
          <Sidebar />
          {children}
        </div>
      </div>
    </>
  );
};
export default Layout;
