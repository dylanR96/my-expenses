import React from "react";
import { Link } from "react-router-dom";

function Navigation() {
  return (
    <aside>
      <div>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/myPages">My pages</Link>
          <Link to="/expenses">Expenses</Link>
          <Link to="/stocks">Stocks</Link>
          <Link to="/savingPlan">Saving plans</Link>
        </nav>
      </div>
    </aside>
  );
}

export default Navigation;
