import { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const AttendanceCalendar = () => {
  const [currentDate, setCurrentDate] = useState(new Date());

  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();
  const firstDay = new Date(year, month, 1).getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();

  const days = [];
  for (let i = 0; i < firstDay; i++) days.push(null);
  for (let i = 1; i <= daysInMonth; i++) days.push(i);

  return (
    <div className="bg-white rounded-xl shadow p-6">
      <div className="flex justify-between items-center mb-6">
        <button className="bg-gray-100 p-2 rounded-lg hover:bg-gray-200">
          <FaChevronLeft />
        </button>

        <h3 className="text-lg font-semibold">
          {currentDate.toLocaleString("default", { month: "long" })} {year}
        </h3>

        <button className="bg-gray-100 p-2 rounded-lg hover:bg-gray-200">
          <FaChevronRight />
        </button>
      </div>

      <div className="grid grid-cols-7 text-center text-sm font-semibold text-gray-500 mb-4">
        {["Sun","Mon","Tue","Wed","Thu","Fri","Sat"].map(d => <div key={d}>{d}</div>)}
      </div>

      <div className="grid grid-cols-7 gap-3">
        {days.map((day, idx) => (
          <div
            key={idx}
            className={`h-10 flex items-center justify-center rounded-lg text-sm
            ${day ? "bg-gray-100 hover:bg-blue-100 cursor-pointer" : ""}`}
          >
            {day}
          </div>
        ))}
      </div>
    </div>
  );
};

export default AttendanceCalendar;
