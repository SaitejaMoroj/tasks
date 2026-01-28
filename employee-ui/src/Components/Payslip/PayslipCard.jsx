import React from "react";
import { FaFilePdf, FaEye } from "react-icons/fa";

const PayslipCard = () => {
  return (
    <div className="bg-white rounded-xl shadow p-6">
      <h3 className="font-semibold text-lg mb-4">March 2024 Payslip</h3>

      <div className="bg-blue-600 text-white rounded-xl p-6 text-center space-y-4">
        <p className="text-sm opacity-90">Net Salary</p>
        <h2 className="text-4xl font-bold">$3,500</h2>

        <div className="flex flex-col sm:flex-row justify-center gap-4 mt-4">
          <button className="bg-white text-blue-600 px-4 py-2 rounded-lg flex items-center justify-center gap-2 font-medium shadow hover:bg-gray-100">
            <FaEye /> View Payslip
          </button>

          <button className="bg-white text-blue-600 px-4 py-2 rounded-lg flex items-center justify-center gap-2 font-medium shadow hover:bg-gray-100">
            <FaFilePdf /> Download PDF
          </button>
        </div>
      </div>
    </div>
  );
};

export default PayslipCard;
