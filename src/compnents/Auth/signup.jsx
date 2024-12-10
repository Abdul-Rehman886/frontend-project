const Signup = ({ setAuth }) => {
  return (
    <>
      <div className="h-full w-full flex justify-center items-center">
        <div className=" h-3/4  w-1/4 bg-black flex flex-col">
          <h1 className="flex justify-center  m-2 p-2 font-bold text-white text-4xl ">
            Signup
          </h1>

          <div className="m-2 h-4/5  flex flex-col gap-2 justify-center ">
            <label className="text-xl text-white ">Name</label>

            <input
              className="p-2 rounded-md "
              type="text"
              placeholder="Enter Your Name"
              required
            />
            <label className="text-xl text-white ">Email</label>

            <input
              className="p-2 rounded-md "
              type="email"
              placeholder="Enter Your Email"
              required
            />

            <label className="text-xl text-white ">Username</label>

            <input
              className="p-2 rounded-md "
              type="text"
              placeholder="Enter Your Username"
              required
            />
            <label className="text-xl text-white ">Password</label>
            <input
              className="p-2 rounded-md "
              type="password"
              placeholder="Enter Your Password"
              required
            />
            <label className="text-xl text-white ">Confirm Password</label>

            <input
              className="p-2 rounded-md "
              type="text"
              placeholder="Confirm Your Password"
              required
            />
            <br />
            <p className="text-white">
              Already have an account?{" "}
              <span
                className="hover:text-blue-500 cursor-pointer"
                onClick={() => {
                  setAuth("login");
                }}
              >
                Login
              </span>
            </p>
          </div>

          <div className="flex justify-center">
            <button
              className="p-2 bg-gray-600 m-2 w-32 rounded-md text-xl text-white"
              onClick={() => {
                setAuth("login");
              }}
            >
              Signup
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
export default Signup;
