import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

function Navigation() {
  const [test, setTest] = useState(false);

  const lowerMenu = () => {
    setTest(true);
  };

  const removeMenu = () => {
    setTest(false);
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
            <Link className="main_nav-links" to="/expenses" onClick={lowerMenu}>
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
            {test ? (
              <div className="main__lower-navigation">
                <button>My expenses</button>
                <button>Total expenses</button>
                <button>Total savings</button>
              </div>
            ) : (
              <div></div>
            )}
          </div>
        </div>
      </aside>
    </>
  );
}

export default Navigation;
