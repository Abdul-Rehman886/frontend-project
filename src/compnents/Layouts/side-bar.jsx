const Sidebar = () => {
  return (
    <>
      <div className=" flex justify-end h-full w-1/6 pt-20 px-2 bg-black ">
        <div className="w-full h-2/5 flex flex-col items-start justify-between">
          <h1 className="text-xl w-full rounded-md text-white p-2 hover:bg-white hover:text-gray-800">
            Product Management
          </h1>
          <h1 className="text-xl w-full rounded-md text-white p-2 hover:bg-white hover:text-gray-800">
            Order Management
          </h1>
          <h1 className="text-xl w-full rounded-md text-white p-2 hover:bg-white hover:text-gray-800">
            Customer Management
          </h1>
          <input
            className="w-full p-2 rounded-md"
            type="text"
            placeholder="Search......"
            required
          />
          <button className="w-20 bg-white p-1  rounded-md">Search</button>
        </div>
      </div>
    </>
  );
};
export default Sidebar;
