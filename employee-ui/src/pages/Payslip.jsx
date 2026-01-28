import React from "react";
import PayslipCard from "../Components/Payslip/PayslipCard";
import EventsCard from "../Components/Payslip/EventsCard";
import CompanyCalendar from "../Components/Payslip/CompanyCalendar";

const Payslip = () => {
  return (
    <div className="space-y-6 p-4">

      {/* Top section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <PayslipCard />
        <EventsCard />
      </div>

      {/* Calendar */}
      <CompanyCalendar />

    </div>
  );
};

export default Payslip;
