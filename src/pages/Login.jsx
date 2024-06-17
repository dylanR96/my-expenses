import React from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import "./login.css";
const Login = () => {
  const navigate = useNavigate();
  const [view, setView] = useState("login");

  return (
    <>
      <div className="main">
        <div className="login-container">
          {view === "login" && (
            <form className="form">
              <input type="email" name="email" placeholder="Email" />
              <input type="password" name="password" placeholder="Password" />
              <h3>Forgot password?</h3>
              <div>
                <button onClick={() => setView("signUp")}>
                  Create account
                </button>
                <input type="submit" value="Sign in" />
              </div>
            </form>
          )}
          {view === "signUp" && (
            <form className="form">
              <input type="email" name="email" placeholder="Email" />
              <input type="password" name="password" placeholder="Password" />
              <input
                type="password"
                name="password"
                placeholder="Repeat password"
              />
              <h3>Forgot password?</h3>
              <div>
                <input
                  type="submit"
                  value="Create account"
                  onClick={() => setView("login")}
                />
              </div>
            </form>
          )}
          <button onClick={() => navigate("/home")}>Home</button>
        </div>
      </div>
    </>
  );
};

export default Login;
