import React from "react";
import { InfoBar } from "./InfoBar";
import { ChatInput } from "../../../components/common";
import { Messages } from "./Messages";
const ChatComponent = ({
  users,
  room,
  messages,
  message,
  setMessage,
  sendMessage,
  name
}) => {
  return (
    <div className="outerChatContainer">
      {/* <TextComponent users={users} /> */}
      <div className="innerChatContainer">
        <InfoBar name={name} />
        <Messages messages={messages} name={name} />
        <ChatInput
          message={message}
          setMessage={setMessage}
          sendMessage={sendMessage}
        />
      </div>
    </div>
  );
};
export { ChatComponent };
