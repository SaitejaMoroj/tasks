import React from "react";

const emails = [
  { title: "Project Update", from: "Manager", time: "10:00 AM" },
  { title: "HR Policy Changes", from: "HR", time: "Yesterday" },
  { title: "Event Reminder", from: "Admin", time: "Apr 12, 2024" },
];

const CompanyEmails = () => {
  return (
    <div className="bg-white w-1/2 rounded-lg shadow p-4">
      <h3 className="font-semibold mb-4">Company Emails</h3>
      <div className="space-y-4">
        {emails.map((mail, index) => (
          <div key={index} className="border p-3 rounded">
            <p className="font-medium">{mail.title}</p>
            <p className="text-xs text-gray-500">From: {mail.from}</p>
            <p className="text-xs text-gray-400">{mail.time}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CompanyEmails;
