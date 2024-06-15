import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import MyPages from "../pages/MyPages";
import Expenses from "../pages/Expenses";
import Stocks from "../pages/Stocks";
import SavingPlan from "../pages/SavingPlan";

function Switch({ activeMenu }) {
  return (
    <Routes>
      <Route path="/" exact element={<Home />} />
      <Route path="/myPages" element={<MyPages />} />
      <Route path="/expenses" element={<Expenses activeMenu={activeMenu} />} />
      <Route path="/stocks" element={<Stocks />} />
      <Route path="/savingPlan" element={<SavingPlan />} />
    </Routes>
  );
}

export default Switch;
