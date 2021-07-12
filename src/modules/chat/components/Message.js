import React from "react";

const Message = ({
  message: { email, text, firstName, lastName },
  currUser
}) => {
  let isSentByCurrentUser = false;

  if (currUser === email) isSentByCurrentUser = true;

  return isSentByCurrentUser ? (
    <div className="messageContainer justifyEnd">
      <span className="sentText pr-10">{firstName + " " + lastName}</span>
      <div className="messageBox backgroundBlue">
        <span className="messageText colorWhite">{text}</span>
      </div>
    </div>
  ) : (
    <div className="messageContainer justifyStart">
      <div className="messageBox backgroundLight">
        <span className="messageText colorDark">{text}</span>
      </div>
      <span className="sentText pl-10">{firstName + " " + lastName}</span>
    </div>
  );
};
export { Message };
