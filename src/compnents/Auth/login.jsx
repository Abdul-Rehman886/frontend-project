import { useNavigate } from "react-router-dom";

const Login = ({ setAuth }) => {
  const navigate = useNavigate();
  return (
    <>
      <div className="h-full w-full flex justify-center items-center">
        <div className=" h-2/4 w-1/4 bg-black flex flex-col">
          <h1 className="flex justify-center  m-2 p-2 font-bold text-white text-4xl ">
            Login
          </h1>

          <div className="m-2 h-3/4  flex flex-col gap-2 justify-center ">
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
            <br />
            <p className="text-white">
              Don't have an account?{" "}
              <span
                className="hover:text-blue-500 cursor-pointer"
                onClick={() => {
                  setAuth("signup");
                }}
              >
                Signup
              </span>
            </p>
          </div>
          <div className="flex justify-center">
            <button
              className="p-2 bg-gray-600 m-2 w-32 rounded-md text-xl text-white"
              onClick={() => {
                navigate("/index");
              }}
            >
              Login
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
export default Login;
