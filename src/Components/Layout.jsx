import React from "react";
import Header from "./Header/Header";
import Slidebar from "./Slidebar";
import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <div className="flex">
      <Slidebar />
      <div className="w-full ml-16 md:ml-56">
        <Header />
        <Outlet />
      </div>
    </div>
  );
}

export default Layout;
