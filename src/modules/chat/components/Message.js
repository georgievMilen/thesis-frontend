import React from "react";

const Message = ({ message: { email, text, first_name, last_name }, name }) => {
  let isSentByCurrentUser = false;

  // const trimmedName = name.trim().toLowerCase();

  // if (user === trimmedName) {
  //   isSentByCurrentUser = true;
  // }
  const trimmedName = email;
  return isSentByCurrentUser ? (
    <div className="messageContainer justifyEnd">
      <p className="sentText pr-10">{trimmedName}</p>
      <div className="messageBox backgroundBlue">
        <p className="messageText colorWhite">{text}</p>
      </div>
    </div>
  ) : (
    <div className="messageContainer justifyStart">
      <div className="messageBox backgroundLight">
        <p className="messageText colorDark">{text}</p>
      </div>
      <p className="sentText pl-10">{first_name + " " + last_name}</p>
    </div>
  );
};
export { Message };
