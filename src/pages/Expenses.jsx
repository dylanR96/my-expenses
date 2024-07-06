import { useState, createContext } from "react";
import MyExpenses from "../components/Expenses/MyExpenses";
import "./Expenses.css";
import Navigation from "../components/Navigation";

export const ExpensesContext = createContext();

function Expenses() {
  const [expensePage, setExpensePage] = useState(<MyExpenses />);
  return (
    <>
      <ExpensesContext.Provider value={{ expensePage, setExpensePage }}>
        <Navigation />
        <div className="main__my-expenses-wrapper">
          <div className="main__my-expenses-container">{expensePage}</div>
        </div>
      </ExpensesContext.Provider>
    </>
  );
}

export default Expenses;
