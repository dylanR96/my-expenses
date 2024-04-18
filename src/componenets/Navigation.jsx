import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

function Navigation() {
  const [test, setTest] = useState(false);

  const lowerMenu = () => {
    setTest(true);
  };
  return (
    <>
      <aside className="main__navigation">
        <div className="main__navigation-container">
          <nav>
            <Link to="/">Home</Link>
            <Link to="/myPages">My pages</Link>
            <Link to="/expenses" onClick={lowerMenu}>
              Expenses
            </Link>
            <Link to="/stocks">Stocks</Link>
            <Link to="/savingPlan">Saving plans</Link>
          </nav>
          <div className="main__nav-divider"></div>
          <div>{test ? <div>hello</div> : <div></div>}</div>
        </div>
      </aside>
    </>
  );
}

export default Navigation;
