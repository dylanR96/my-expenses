import React, { useState } from "react";

function MyExpenses() {
  const [showExpense, setShowExpense] = useState("");

  const addExpense = () => {
    setShowExpense("Hello there!");
  };
  return (
    <>
      <div>
        <tabel>
          <tr className="main__my-expenses-grid">
            <th>Date</th>
            <th>Day</th>
            <th>Sum</th>
            <th>Category</th>
            <th>Total</th>
            <th>Location</th>
          </tr>
          <tr>
            <td></td>
          </tr>
        </tabel>
        {showExpense}
        <button onClick={addExpense}>Add expense</button>
        <button>10 per page</button>
        <button>Filter dates</button>
      </div>
    </>
  );
}

export default MyExpenses;
