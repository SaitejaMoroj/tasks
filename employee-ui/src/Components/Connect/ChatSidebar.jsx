import React, { useState } from "react";
import { FaUsers } from "react-icons/fa";

const users = [
  { name: "General Team Chat" },
  { name: "Mark" },
  { name: "Lisa" },
  { name: "Admin" },
];

const ChatSidebar = ({ setActiveUser, activeUser }) => {
  const [search, setSearch] = useState("");

  const filteredUsers = users.filter((u) =>
    u.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="w-56 border-r p-3">
      <h3 className="font-semibold flex items-center gap-2 mb-3">
        <FaUsers /> Team Chat
      </h3>

      <input
        type="text"
        placeholder="Search user..."
        className="w-full border rounded px-2 py-1 text-sm mb-3"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <ul className="space-y-1">
        {filteredUsers.map((user) => (
          <li
            key={user.name}
            onClick={() => setActiveUser(user.name)}
            className={`cursor-pointer px-2 py-2 rounded text-sm
              ${
                activeUser === user.name
                  ? "bg-blue-100 text-blue-700"
                  : "hover:bg-gray-100"
              }`}
          >
            {user.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ChatSidebar;
