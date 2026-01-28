import React from "react";
import { Outlet } from "react-router-dom";
import SideNav from "../Components/SideNav";

const DashboardLayout = () => {
  return (
    <div className="flex">
      <SideNav />
      <div className="ml-64 w-full bg-gray-100 min-h-screen p-6">
        <Outlet />
      </div>
    </div>
  );
};

export default DashboardLayout;
