import { useState } from "react";
import React from "react";
import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import Navigation from "./componenets/Navigation";
import Switch from "./componenets/Switch";

function App() {
  return (
    <>
      <Router>
        <div>Hi</div>
        <Navigation />
        <Switch />
      </Router>
    </>
  );
}

export default App;
