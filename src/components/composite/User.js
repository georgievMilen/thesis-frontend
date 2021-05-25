import React from "react";
import { Label, Image, ChatButton, SaveButton, CancelButton } from "../common";

const User = ({
  element: {
    connection_id,
    image,
    first_name,
    last_name,
    poster_image,
    response,

    title
  },
  type,
  handleRequest,
  handleChat
}) => {
  return (
    <>
      {type === "connection" && response === 1 && (
        <div className="req_conn">
          <Label>
            {first_name} {last_name}
          </Label>
          <Label>About poster: {title}</Label>
          <Image src={poster_image}></Image>
          <ChatButton
            onClick={() =>
              handleChat({
                _name: first_name + "_" + last_name,
                _roomID: connection_id
              })
            }
          />
        </div>
      )}
      {type === "request" && response !== -1 && <></>}
      {type === "request" && response === -1 && (
        <div className="req_conn">
          <Label>
            {first_name} {last_name}
          </Label>
          <Label>About poster: {title}</Label>
          <Image src={poster_image}></Image>

          <SaveButton
            onClick={() => handleRequest({ connection_id, response: 1 })}
          >
            Accept
          </SaveButton>
          <CancelButton
            onClick={() => handleRequest({ connection_id, response: 0 })}
          >
            Decline
          </CancelButton>
        </div>
      )}
    </>
  );
};

export { User };
