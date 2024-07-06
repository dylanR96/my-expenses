import React, { useContext, useState } from "react";
import { ExpenseMenuContext } from "../App";
import { useNavigate } from "react-router-dom";
import ExpensesMenu from "./Expenses/ExpensesMenu";

function Navigation() {
  const navigate = useNavigate();
  const { expenseMenu, setExpenseMenu } = useContext(ExpenseMenuContext);
  const displayMenu = () => {
    setExpenseMenu(<ExpensesMenu />);
  };

  const removeMenu = () => {
    setExpenseMenu("");
  };

  return (
    <>
      <aside className="main__navigation">
        <div className="main__navigation-container">
          <nav className="main__upper-navigation">
            <button
              className="main_nav-links"
              onClick={() => {
                navigate("/home");
                removeMenu();
              }}
            >
              Home
            </button>
            <button
              className="main_nav-links"
              onClick={() => {
                navigate("/myPages");
                removeMenu();
              }}
            >
              My pages
            </button>
            <button
              className="main_nav-links"
              onClick={() => {
                navigate("/expenses");
                displayMenu();
              }}
            >
              Expenses
            </button>
            <button
              className="main_nav-links"
              onClick={() => {
                navigate("/stocks");
                removeMenu();
              }}
            >
              Stocks
            </button>
            <button
              className="main_nav-links"
              onClick={() => {
                navigate("/savingPlan");
                removeMenu();
              }}
            >
              Saving plans
            </button>
          </nav>
          <div className="main__nav-divider"></div>
          <div>{expenseMenu}</div>
        </div>
      </aside>
      <div className="main__content-section"></div>
    </>
  );
}

export default Navigation;
