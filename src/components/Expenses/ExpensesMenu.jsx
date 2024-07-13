import { useContext, useState, useEffect } from "react";
import { ExpensesContext } from "../../App";
import TotalExpenses from "./TotalExpenses";
import TotalSavings from "./TotalSavings";
import MyExpenses from "./MyExpenses";

function ExpensesMenu() {
  const { expensePage, setExpensePage } = useContext(ExpensesContext);

  const displayMyExpenses = () => {
    setExpensePage(<MyExpenses />);
  };

  const displayTotalExpenses = () => {
    setExpensePage(<TotalExpenses />);
  };

  const displayTotalSavings = () => {
    setExpensePage(<TotalSavings />);
  };
  return (
    <>
      <div className="main__lower-navigation">
        <button onClick={displayMyExpenses}>My expenses</button>
        <button onClick={displayTotalExpenses}>Total expenses</button>
        <button onClick={displayTotalSavings}>Total savings</button>
      </div>
    </>
  );
}

export default ExpensesMenu;
