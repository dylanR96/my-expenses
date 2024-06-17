import React from "react";
import MyExpenses from "../components/Expenses/MyExpenses";
import TotalExpenses from "../components/Expenses/TotalExpenses";
import TotalSavings from "../components/Expenses/TotalSavings";
import "./Expenses.css";
import Navigation from "../components/Navigation";

function Expenses({ activeMenu }) {
  return (
    <>
      <Navigation />
      <div className="main__my-expenses-wrapper">
        <div className="main__my-expenses-container">
          {activeMenu === "myExpenses" && <MyExpenses />}
          {activeMenu === "myTotal" && <TotalExpenses />}
          {activeMenu === "mySavings" && <TotalSavings />}
        </div>
      </div>
    </>
  );
}

export default Expenses;
