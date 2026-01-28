import React, { useState } from "react";
import { FaPaperPlane, FaSearch } from "react-icons/fa";

const users = ["General Team Chat", "Mark", "Lisa", "Admin"];

const Connect = () => {
  const [selectedUser, setSelectedUser] = useState("General Team Chat");
  const [message, setMessage] = useState("");
  const [chat, setChat] = useState({
    "General Team Chat": [
      { sender: "Mark", text: "Let's meet at 3 PM." },
      { sender: "Lisa", text: "Got it, see you then!" }
    ],
    Mark: [],
    Lisa: [],
    Admin: []
  });

  const sendMessage = () => {
    if (!message.trim()) return;

    setChat({
      ...chat,
      [selectedUser]: [
        ...chat[selectedUser],
        { sender: "You", text: message }
      ]
    });
    setMessage("");
  };

  return (
    <div className="h-[85vh] grid grid-cols-1 md:grid-cols-4 gap-4">

      {/* User List */}
      <div className="bg-white rounded-xl shadow p-4 flex flex-col">
        <h2 className="font-semibold mb-3">Team Chat</h2>

        <div className="flex items-center border rounded-lg px-2 mb-3">
          <FaSearch className="text-gray-400" />
          <input
            className="w-full p-2 outline-none"
            placeholder="Search user..."
          />
        </div>

        <div className="space-y-2 overflow-y-auto">
          {users.map((u) => (
            <button
              key={u}
              onClick={() => setSelectedUser(u)}
              className={`w-full text-left px-3 py-2 rounded-lg text-sm transition
              ${
                selectedUser === u
                  ? "bg-blue-600 text-white"
                  : "hover:bg-gray-100"
              }`}
            >
              {u}
            </button>
          ))}
        </div>
      </div>

      {/* Chat Area */}
      <div className="col-span-2 bg-white rounded-xl shadow flex flex-col">

        {/* Header */}
        <div className="p-4 border-b font-semibold">
          {selectedUser}
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto p-4 space-y-3">
          {chat[selectedUser].map((msg, i) => (
            <div
              key={i}
              className={`max-w-xs px-4 py-2 rounded-lg text-sm
              ${
                msg.sender === "You"
                  ? "ml-auto bg-blue-600 text-white"
                  : "bg-gray-100"
              }`}
            >
              <p className="font-semibold text-xs">{msg.sender}</p>
              {msg.text}
            </div>
          ))}
        </div>

        {/* Input */}
        <div className="p-3 border-t flex gap-2">
          <input
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="flex-1 border rounded-lg px-3 py-2"
            placeholder="Type a message..."
          />
          <button
            onClick={sendMessage}
            className="bg-blue-600 text-white px-4 rounded-lg flex items-center gap-2"
          >
            <FaPaperPlane /> Send
          </button>
        </div>
      </div>

      {/* Company Emails */}
      <div className="bg-white rounded-xl shadow p-4">
        <h2 className="font-semibold mb-4">Company Emails</h2>

        <div className="space-y-3">
          <div className="border rounded-lg p-3">
            <p className="font-semibold">Project Update</p>
            <p className="text-sm text-gray-500">From: Manager • 10:00 AM</p>
          </div>

          <div className="border rounded-lg p-3">
            <p className="font-semibold">HR Policy Changes</p>
            <p className="text-sm text-gray-500">From: HR • Yesterday</p>
          </div>

          <div className="border rounded-lg p-3">
            <p className="font-semibold">Event Reminder</p>
            <p className="text-sm text-gray-500">From: Admin • Apr 12, 2024</p>
          </div>
        </div>
      </div>

    </div>
  );
};

export default Connect;
