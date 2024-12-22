import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <div className="absolute top-0 border-b-2 border-white h-16 w-full bg-black flex justify-end px-8">
        <div className=" absolute top-0 h-full w-2/5   justify-evenly flex items-center">
          <Link to="index" className="text-xl text-white font-semibold">
            Home
          </Link>
          <p className="text-xl text-white font-semibold">About Us</p>
          <p className="text-xl text-white font-semibold">Contact Us</p>
        </div>
      </div>
    </>
  );
};
export default Navbar;
