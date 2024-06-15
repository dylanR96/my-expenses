import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import ExpensesMenu from "./ExpensesMenu";
import Switch from "./Switch";

function Navigation() {
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
            <Link className="main_nav-links" to="/" onClick={removeMenu}>
              Home
            </Link>
            <Link className="main_nav-links" to="/myPages" onClick={removeMenu}>
              My pages
            </Link>
            <Link
              className="main_nav-links"
              to="/expenses"
              onClick={displayMenu}
            >
              Expenses
            </Link>
            <Link className="main_nav-links" to="/stocks" onClick={removeMenu}>
              Stocks
            </Link>
            <Link
              className="main_nav-links"
              to="/savingPlan"
              onClick={removeMenu}
            >
              Saving plans
            </Link>
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
      <div className="main__content-section">
        <Switch activeMenu={activeMenu} />
      </div>
    </>
  );
}

export default Navigation;
