import React, { createContext, useState, useContext } from "react";
import "./App.css";
import { Outlet } from "react-router-dom";

function App() {
  const myContent = createContext();
  return (
    <>
      <div className="main">
        <Outlet />
      </div>
    </>
  );
}

export default App;
