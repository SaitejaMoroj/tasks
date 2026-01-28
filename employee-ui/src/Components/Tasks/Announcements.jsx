import React from "react";

const Announcements = () => {
  const items = [
    { id: 1, text: "Quarterly Meeting this Friday", color: "green" },
    { id: 2, text: "System Maintenance on April 22", color: "red" },
  ];

  return (
    <div className="bg-white rounded-lg shadow p-5">
      <h3 className="font-semibold mb-4">Announcements</h3>
      <div className="space-y-3">
        {items.map((item) => (
          <div
            key={item.id}
            className={`flex items-center gap-2 p-3 rounded text-sm
            ${
              item.color === "green"
                ? "bg-green-100 text-green-700"
                : "bg-red-100 text-red-700"
            }`}
          >
            ● {item.text}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Announcements;
