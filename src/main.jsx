import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./pages/Login.jsx";
import Home from "./pages/Home.jsx";
import Expenses from "./pages/Expenses.jsx";
import MyPages from "./pages/MyPages.jsx";
import SavingPlan from "./pages/SavingPlan.jsx";
import Stocks from "./pages/Stocks.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Login />,
        loader: () => (document.title = "Expenses || Login"),
      },
      {
        path: "/home",
        element: <Home />,
        loader: () => (document.title = "Expenses || Home page"),
      },
      {
        path: "/myPages",
        element: <MyPages />,
        loader: () => (document.title = "Expenses || My pages"),
      },
      {
        path: "/expenses",
        element: <Expenses />,
        loader: () => (document.title = "Expenses || Expenses"),
      },
      {
        path: "/stocks",
        element: <Stocks />,
        loader: () => (document.title = "Expenses || Stocks"),
      },
      {
        path: "/savingPlan",
        element: <SavingPlan />,
        loader: () => (document.title = "Expenses || Saving plan"),
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router}>
      <App />
    </RouterProvider>
  </React.StrictMode>
);
