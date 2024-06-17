import React from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  return (
    <>
      <div>Login</div>
      <button onClick={() => navigate("/home")}>Home</button>
    </>
  );
};

export default Login;
