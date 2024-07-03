import React from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import "./login.css";
import toast, { Toaster } from "react-hot-toast";

const Login = () => {
  const navigate = useNavigate();
  const [view, setView] = useState("login");
  const [existingUsername, setExistingUsername] = useState("");
  const [existingPassword, setExistingPassword] = useState("");
  const [newEmail, setNewEmail] = useState("");
  const [newUsername, setNewUsername] = useState("");
  const [newPassword, setNewPassword] = useState("");
  let failureMessage = "Hi";
  const notifySuccess = () => toast.success("User was successfully created.");
  const notifyFailure = () => toast.error(failureMessage);

  const loginUser = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch(`http://localhost:8000/api/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: existingUsername,
          password: existingPassword,
        }),
      });
      if (!res.ok) {
        const errorData = await res.json();
        failureMessage = errorData.message;
        notifyFailure();
        throw new Error(errorData.message);
      } else {
        navigate("/home");
      }
      const responseData = await res.json();
      console.log(responseData);
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
          username: newUsername,
          password: newPassword,
        }),
      });
      if (!res.ok) {
        const errorData = await res.json();
        failureMessage = errorData.message;
        notifyFailure();
        throw new Error(errorData.message);
      } else {
        notifySuccess();
        setView("login");
      }
      const responseData = await res.json();
      console.log(responseData);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="main">
        <Toaster />
        <div className="login-container">
          {view === "login" && (
            <form className="form" onSubmit={loginUser}>
              <input
                type="text"
                name="username"
                placeholder="Username"
                className="input-fields"
                value={existingUsername}
                onChange={(e) => setExistingUsername(e.target.value)}
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
                type="text"
                name="username"
                placeholder="Username"
                className="input-fields"
                value={newUsername}
                onChange={(e) => setNewUsername(e.target.value)}
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
    </>
  );
};

export default Login;
