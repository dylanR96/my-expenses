import React from "react";

function ExpensesMenu({ onMenuSelect }) {
  const displayMyExpenses = () => {
    onMenuSelect("myExpenses");
  };

  const displayTotalExpenses = () => {
    onMenuSelect("myTotal");
  };

  const displayTotalSavings = () => {
    onMenuSelect("mySavings");
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
