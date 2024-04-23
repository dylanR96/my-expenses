import React from "react";
import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import Navigation from "./componenets/Navigation";

function App() {
  return (
    <>
      <div className="main">
        <Router>
          <Navigation />
        </Router>
      </div>
    </>
  );
}

export default App;
