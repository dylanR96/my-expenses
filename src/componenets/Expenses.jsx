import React from "react";
import MyExpenses from "./MyExpenses";
import TotalExpenses from "./TotalExpenses";
import TotalSavings from "./TotalSavings";
import "./Expenses.css";

function Expenses({ activeMenu }) {
  return (
    <>
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
