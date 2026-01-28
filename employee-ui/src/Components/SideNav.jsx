import React from "react";
import { Link, useLocation } from "react-router-dom";
import {
  FaHome,
  FaCalendarCheck,
  FaFileInvoiceDollar,
  FaTasks,
  FaUserFriends,
} from "react-icons/fa";

const SideNav = () => {
  const location = useLocation();

  const menu = [
    { name: "Dashboard", path: "/dashboard", icon: <FaHome /> },
    { name: "Attendance", path: "/dashboard/attendance", icon: <FaCalendarCheck /> },
    { name: "Payslip", path: "/dashboard/payslip", icon: <FaFileInvoiceDollar /> },
    { name: "Tasks", path: "/dashboard/tasks", icon: <FaTasks /> },
    { name: "Employee Connect", path: "/dashboard/connect", icon: <FaUserFriends /> },
  ];

  const isActive = (path) => {
    if (path === "/dashboard") {
      return location.pathname === "/dashboard";
    }
    return location.pathname.startsWith(path);
  };

  return (
    <div className="h-screen w-60 bg-[#0f172a] text-gray-200 fixed left-0 top-0">
      {/* Logo */}
      <div className="h-16 flex items-center justify-center border-b border-gray-700">
        <h1 className="text-xl font-bold text-blue-400">Quadrant</h1>
      </div>

      {/* Menu */}
      <ul className="mt-6 space-y-1">
        {menu.map((item) => (
          <li key={item.name}>
            <Link
              to={item.path}
              className={`mx-3 px-4 py-3 rounded-lg flex items-center gap-3 transition-all
              ${
                isActive(item.path)
                  ? "bg-blue-600 text-white shadow-md"
                  : "text-gray-300 hover:bg-gray-800"
              }`}
            >
              <span className="text-lg">{item.icon}</span>
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SideNav;
