import React from "react";
import { FaPaperPlane } from "react-icons/fa";

const ChatInput = () => {
  return (
    <div className="border-t pt-3 flex gap-2">
      <input
        type="text"
        placeholder="Type a message..."
        className="flex-1 border rounded px-3 py-2 text-sm"
      />
      <button className="bg-blue-600 text-white px-4 py-2 rounded flex items-center gap-2">
        <FaPaperPlane />
        Send
      </button>
    </div>
  );
};

export default ChatInput;
