import React, { createContext, useState } from "react";
import "./App.css";
import { Outlet } from "react-router-dom";
import Navigation from "./components/Navigation";
import MyExpenses from "./components/Expenses/MyExpenses";

export const ExpenseMenuContext = createContext();
export const ExpensesContext = createContext();

function App() {
  const [expenseMenu, setExpenseMenu] = useState("");
  const [expensePage, setExpensePage] = useState(<MyExpenses />);
  return (
    <>
      <div className="main">
        <ExpenseMenuContext.Provider value={{ expenseMenu, setExpenseMenu }}>
          <ExpensesContext.Provider value={{ expensePage, setExpensePage }}>
            <Navigation />
            <Outlet />
          </ExpensesContext.Provider>
        </ExpenseMenuContext.Provider>
      </div>
    </>
  );
}

export default App;
