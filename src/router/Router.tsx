import React from "react";
import { createBrowserRouter } from "react-router-dom";
import DefaulLayout from "../layout/DefaulLayout";
import Dashboard from "../pages/Dashboard";
//
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
//
export const Router = createBrowserRouter([
  {
    path: "/",
    element: <DefaulLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "dashboard",
        element: <Dashboard />,
      },
      {
        path: "register",
        element: <Register />,
      },
    ],
  },
]);
