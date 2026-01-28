import React, { useState } from "react";
import ChatSidebar from "./ChatSidebar";
import ChatHeader from "./ChatHeader";
import ChatMessages from "./ChatMessages";
import ChatInput from "./ChatInput";

const ChatBox = () => {
  const [activeUser, setActiveUser] = useState("General Team Chat");

  return (
    <div className="bg-white w-1/2 rounded-lg shadow flex h-[500px]">
      <ChatSidebar setActiveUser={setActiveUser} activeUser={activeUser} />

      <div className="flex flex-col flex-1 p-4">
        <ChatHeader activeUser={activeUser} />
        <ChatMessages activeUser={activeUser} />
        <ChatInput />
      </div>
    </div>
  );
};

export default ChatBox;
