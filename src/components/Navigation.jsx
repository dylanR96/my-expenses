import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import ExpensesMenu from "./ExpensesMenu";

function Navigation() {
  const navigate = useNavigate();
  const [expensesMenu, setExpensesMenu] = useState(false);

  const displayMenu = () => {
    setExpensesMenu(true);
  };

  const removeMenu = () => {
    setExpensesMenu(false);
  };

  const [activeMenu, setActiveMenu] = useState("myExpenses");

  const handleMenuSelect = (menu) => {
    setActiveMenu(menu);
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
                navigate("/myExpenses");
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
          <div>
            {expensesMenu ? (
              <ExpensesMenu onMenuSelect={handleMenuSelect} />
            ) : (
              <div></div>
            )}
          </div>
        </div>
      </aside>
      <div className="main__content-section"></div>
    </>
  );
}

export default Navigation;
