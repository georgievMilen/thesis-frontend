import React from "react";

import { Message } from "./Message";

const Messages = ({ messages, currUser }) => (
  <div className="messages">
    {messages.map((message, i) => (
      <div key={i}>
        <Message message={message} currUser={currUser} />
      </div>
    ))}
  </div>
);
export { Messages };
