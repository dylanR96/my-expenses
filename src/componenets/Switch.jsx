import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import MyPages from "./MyPages";
import Expenses from "./Expenses";
import Stocks from "./Stocks";
import SavingPlan from "./SavingPlan";

function Switch() {
  return (
    <Routes>
      <Route path="/" exact element={<Home />} />
      <Route path="/myPages" element={<MyPages />} />
      <Route path="/expenses" element={<Expenses />} />
      <Route path="/stocks" element={<Stocks />} />
      <Route path="/savingPlan" element={<SavingPlan />} />
    </Routes>
  );
}

export default Switch;
