import React from "react";

const Message = ({
  message: { email, text, first_name, last_name },
  currUser
}) => {
  let isSentByCurrentUser = false;

  if (currUser === email) isSentByCurrentUser = true;
  console.log(currUser);
  return isSentByCurrentUser ? (
    <div className="messageContainer justifyEnd">
      <span className="sentText pr-10">{first_name + " " + last_name}</span>
      <div className="messageBox backgroundBlue">
        <span className="messageText colorWhite">{text}</span>
      </div>
    </div>
  ) : (
    <div className="messageContainer justifyStart">
      <div className="messageBox backgroundLight">
        <span className="messageText colorDark">{text}</span>
      </div>
      <span className="sentText pl-10">{first_name + " " + last_name}</span>
    </div>
  );
};
export { Message };
