import React from "react";

const chatData = {
  "General Team Chat": [
    { name: "Mark", text: "Let's meet at 3 PM." },
    { name: "Lisa", text: "Got it, see you then!" },
  ],
  Mark: [{ name: "Mark", text: "Can you review my PR?" }],
  Lisa: [{ name: "Lisa", text: "Did you update the design?" }],
  Admin: [{ name: "Admin", text: "Server maintenance tonight." }],
};

const ChatMessages = ({ activeUser }) => {
  const messages = chatData[activeUser] || [];

  return (
    <div className="flex-1 overflow-y-auto space-y-2">
      {messages.map((msg, i) => (
        <div key={i} className="bg-gray-100 p-2 rounded">
          <p className="text-sm font-semibold">{msg.name}</p>
          <p className="text-sm">{msg.text}</p>
        </div>
      ))}
    </div>
  );
};

export default ChatMessages;
