import React from "react";
import { Label, Image, ChatButton, SaveButton, CancelButton } from "../common";

const User = ({
  element: {
    first_name,
    last_name,
    id,
    poster_image,
    poster_title,
    response,
    user_id
  },
  handleRequest,
  handleChat
}) => {
  return (
    <div className="req_conn">
      <Label>
        {first_name} {last_name}
      </Label>
      <Label>About poster: {poster_title}</Label>
      <Image src={poster_image}></Image>
      {response === 1 && (
        <ChatButton
          onClick={() =>
            handleChat({ name: first_name + " " + last_name, roomID: id })
          }
        />
      )}
      {response === -1 && (
        <>
          <SaveButton onClick={() => handleRequest({ id, response: 1 })}>
            Accept
          </SaveButton>
          <CancelButton onClick={() => handleRequest({ id, response: 0 })}>
            Decline
          </CancelButton>
        </>
      )}
    </div>
  );
};

export { User };
