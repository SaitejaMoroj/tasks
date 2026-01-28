import React from "react";
import CheckInCard from "./Attendance/CheckInCard";
import MonthlySummary from "./Attendance/MonthlySummary";
import AttendanceCalendar from "./Attendance/AttendanceCalendar";
import RecentLogs from "./Attendance/RecentLogs";
import Legend from "./Attendance/Legend";

const Attendance = () => {
  return (
    <div className="space-y-6">
      <CheckInCard />
      <MonthlySummary />

      <div className="grid grid-cols-12 gap-6">
        <div className="col-span-8">
          <AttendanceCalendar />
        </div>
        <div className="col-span-4 space-y-6">
          <RecentLogs />
          <Legend />
        </div>
      </div>
    </div>
  );
};

export default Attendance;
