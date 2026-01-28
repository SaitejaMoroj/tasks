import React from "react";
import { FaComments } from "react-icons/fa";

const ChatHeader = ({ activeUser }) => {
  return (
    <div className="border-b pb-2 mb-3 flex items-center gap-2">
      <FaComments className="text-blue-600" />
      <h3 className="font-semibold">{activeUser}</h3>
    </div>
  );
};

export default ChatHeader;
