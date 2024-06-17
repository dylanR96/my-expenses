import React from "react";
import "./App.css";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <>
      <div className="main">
        <Outlet />
      </div>
    </>
  );
}

export default App;
