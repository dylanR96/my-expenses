import React, { createContext, useState } from "react";
import "./App.css";
import { Outlet } from "react-router-dom";

export const ExpenseMenuContext = createContext();

function App() {
  const [expenseMenu, setExpenseMenu] = useState("");
  return (
    <>
      <div className="main">
        <ExpenseMenuContext.Provider value={{ expenseMenu, setExpenseMenu }}>
          <Outlet />
        </ExpenseMenuContext.Provider>
      </div>
    </>
  );
}

export default App;
