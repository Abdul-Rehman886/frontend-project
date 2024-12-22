import { useState } from "react";
import Login from "./components/Auth/login";
import Signup from "./components/Auth/signup";

const Auth = () => {
  const [auth, setAuth] = useState("signup");
  return (
    <>
      {auth == "login" && <Login setAuth={setAuth} />}
      {auth == "signup" && <Signup setAuth={setAuth} />}
    </>
  );
};
export default Auth;
