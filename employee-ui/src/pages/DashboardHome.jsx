import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  FaCalendarCheck,
  FaTasks,
  FaMoneyBillWave,
  FaCalendarAlt,
  FaFileInvoiceDollar,
} from "react-icons/fa";

const DashboardHome = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) setUser(JSON.parse(storedUser));
  }, []);

  if (!user) {
    return (
      <div className="flex justify-center items-center h-60">
        <p className="text-gray-500 text-lg">Loading dashboard...</p>
      </div>
    );
  }

  return (
    <div className="space-y-10 px-6 py-6 bg-gray-50 min-h-screen">

      {/* WELCOME BANNER */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-6 text-white shadow-lg flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold">Welcome back, {user.fullName}</h1>
          <p className="opacity-90 mt-1">
            Employee ID: {user.id} • {user.position || "Employee"}
          </p>
        </div>
        <button className="bg-white text-blue-600 px-5 py-2 rounded-lg font-semibold hover:bg-blue-50">
          Explore
        </button>
      </div>

      {/* QUICK NAVIGATION CARDS (YOUR ORIGINAL FEATURE) */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Attendance */}
        <div
          onClick={() => navigate("/dashboard/attendance")}
          className="bg-white p-6 rounded-xl shadow hover:shadow-xl transition cursor-pointer hover:scale-105"
        >
          <div className="flex items-center gap-4">
            <div className="bg-blue-100 p-3 rounded-full text-blue-600 text-xl">
              <FaCalendarCheck />
            </div>
            <div>
              <h3 className="font-semibold text-lg">Attendance</h3>
              <p className="text-sm text-gray-500">Present: 18 | Absent: 2</p>
            </div>
          </div>
        </div>

        {/* Tasks */}
        <div
          onClick={() => navigate("/dashboard/tasks")}
          className="bg-white p-6 rounded-xl shadow hover:shadow-xl transition cursor-pointer hover:scale-105"
        >
          <div className="flex items-center gap-4">
            <div className="bg-green-100 p-3 rounded-full text-green-600 text-xl">
              <FaTasks />
            </div>
            <div>
              <h3 className="font-semibold text-lg">Tasks</h3>
              <p className="text-sm text-gray-500">Pending: 5 | Completed: 12</p>
            </div>
          </div>
        </div>

        {/* Payslip */}
        <div
          onClick={() => navigate("/dashboard/payslip")}
          className="bg-white p-6 rounded-xl shadow hover:shadow-xl transition cursor-pointer hover:scale-105"
        >
          <div className="flex items-center gap-4">
            <div className="bg-purple-100 p-3 rounded-full text-purple-600 text-xl">
              <FaMoneyBillWave />
            </div>
            <div>
              <h3 className="font-semibold text-lg">Payslip</h3>
              <p className="text-sm text-gray-500">Latest payslip available</p>
            </div>
          </div>
        </div>
      </div>

      {/* HR STYLE GRID */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

        {/* LEFT */}
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-xl shadow">
            <h2 className="font-semibold mb-2">Review</h2>
            <p className="text-gray-600">
              🎉 Hurrah! You have nothing to review.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow">
            <h2 className="font-semibold mb-4">Quick Access</h2>
            <ul className="space-y-2 text-blue-600">
              <li className="cursor-pointer hover:underline">Reimbursement Payslip</li>
              <li className="cursor-pointer hover:underline">IT Statement</li>
              <li className="cursor-pointer hover:underline">YTD Reports</li>
              <li className="cursor-pointer hover:underline">Loan Statement</li>
            </ul>
          </div>
        </div>

        {/* MIDDLE */}
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-xl shadow">
            <div className="flex justify-between mb-3">
              <h2 className="font-semibold">Upcoming Holidays</h2>
              <FaCalendarAlt className="text-gray-400" />
            </div>
            <div className="space-y-3 text-sm">
              <div><b>04 Mar</b> - Holi</div>
              <div><b>19 Mar</b> - Ugadi</div>
              <div><b>03 Apr</b> - Good Friday</div>
              <div><b>01 May</b> - May Day</div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl shadow">
            <h2 className="font-semibold mb-2">IT Declaration</h2>
            <p className="text-sm text-gray-600">
              Hold on! IT Declaration will be enabled soon.
            </p>
          </div>
        </div>

        {/* RIGHT */}
        <div className="bg-white p-6 rounded-xl shadow flex flex-col justify-center items-center text-center">
          <FaFileInvoiceDollar className="text-purple-500 text-4xl mb-3" />
          <h2 className="font-semibold">Payslip</h2>
          <p className="text-sm text-gray-600">
            Your payslip will appear after payroll processing.
          </p>
        </div>
      </div>
    </div>
  );
};

export default DashboardHome;
