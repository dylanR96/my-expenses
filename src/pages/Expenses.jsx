import "./Expenses.css";
import React, { useContext, useState } from "react";
import { ExpensesContext } from "../App";

function Expenses() {
  const { expensePage, setExpensePage } = useContext(ExpensesContext);
  return (
    <>
      <div className="main__my-expenses-wrapper">
        <div className="main__my-expenses-container">{expensePage}</div>
      </div>
    </>
  );
}

export default Expenses;
