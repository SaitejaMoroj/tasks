import React from "react";
import { FaCalendarAlt } from "react-icons/fa";

const events = [
  { title: "Team Outing", date: "April 5, 2024" },
  { title: "Annual Gala Dinner", date: "May 12, 2024" },
];

const EventsCard = () => {
  return (
    <div className="bg-white rounded-xl shadow p-6">
      <h3 className="font-semibold text-lg mb-4">Upcoming Events</h3>

      <div className="space-y-4">
        {events.map((e, i) => (
          <div
            key={i}
            className="border rounded-lg p-4 flex items-center gap-3 hover:shadow-sm transition"
          >
            <FaCalendarAlt className="text-red-500 text-lg" />
            <div>
              <p className="font-medium">{e.title}</p>
              <p className="text-sm text-gray-500">{e.date}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EventsCard;
