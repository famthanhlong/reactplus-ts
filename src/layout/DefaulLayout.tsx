import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../common/Header";

function DefaulLayout() {
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  );
}

export default DefaulLayout;
