import React from "react";

const days = Array.from({ length: 14 });

const CompanyCalendar = () => {
  return (
    <div className="bg-white rounded-lg shadow p-5">
      <div className="flex justify-between mb-3">
        <h3 className="font-semibold">Company Calendar</h3>
        <button className="text-sm text-blue-600">Get PDF</button>
      </div>

      <div className="grid grid-cols-14 gap-2">
        {days.map((_, i) => (
          <div
            key={i}
            className="h-8 flex items-center justify-center border rounded"
          >
            <span
              className={`h-2 w-2 rounded-full ${
                i % 4 === 0
                  ? "bg-green-500"
                  : i % 4 === 1
                  ? "bg-red-500"
                  : i % 4 === 2
                  ? "bg-yellow-500"
                  : "bg-gray-400"
              }`}
            ></span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CompanyCalendar;
