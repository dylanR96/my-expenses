import React from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import "./login.css";
const Login = () => {
  const navigate = useNavigate();
  const [view, setView] = useState("login");
  const [existingEmail, setExistingEmail] = useState("");
  const [existingPassword, setExistingPassword] = useState("");
  const [newEmail, setNewEmail] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const loginUser = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch(`http://localhost:8000/api/login`, {
        method: "POST",
        header: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: existingEmail,
          password: existingPassword,
        }),
      });
      if (!res.ok) {
        throw new Error("User does not exist");
      } else {
        navigate("/home");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const createUser = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch(`http://localhost:8000/api/signup`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: newEmail,
          password: newPassword,
        }),
      });
      if (!res.ok) {
        throw new Error("User was not created");
      } else {
        setView("login");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="main">
        <div className="login-container">
          {view === "login" && (
            <form className="form" onSubmit={loginUser}>
              <input
                type="email"
                name="email"
                placeholder="Email"
                className="input-fields"
                value={existingEmail}
                onChange={(e) => setExistingEmail(e.target.value)}
              />
              <div>
                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  className="input-fields"
                  value={existingPassword}
                  onChange={(e) => setExistingPassword(e.target.value)}
                />
                <h3>Forgot password?</h3>
              </div>
              <div className="form-btns">
                <button onClick={() => setView("signUp")}>
                  Create account
                </button>
                <input type="submit" value="Sign in" />
              </div>
            </form>
          )}
          {view === "signUp" && (
            <form className="form" onSubmit={createUser}>
              <input
                type="email"
                name="email"
                placeholder="Email"
                className="input-fields"
                value={newEmail}
                onChange={(e) => setNewEmail(e.target.value)}
              />
              <input
                type="password"
                name="password"
                placeholder="Password"
                className="input-fields"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
              />
              {/* <input
                type="password"
                name="password"
                placeholder="Repeat password"
                className="input-fields"
              /> */}
              <h3>Forgot password?</h3>
              <div>
                <button type="submit">Create account</button>
              </div>
            </form>
          )}
        </div>
      </div>
      <button onClick={() => navigate("/home")}>Home</button>
    </>
  );
};

export default Login;
