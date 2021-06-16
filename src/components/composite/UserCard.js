import React, { useState } from "react";
import { DIR_CONNECTION_REQUEST } from "../../constants";
import { Label, Image, Paragraph, SubmitButton, ChatButton } from "../common";
import { Redirect } from "react-router-dom";

import { authenticationService } from "../../utils";
import { postAPI } from "../../modules/services";

const UserCard = (props) => {
  const [chat, setChat] = useState({});

  const sendRequest = () => {
    const localStorageEmail = authenticationService.currentUserValue;
    const data = { senderEmail: localStorageEmail, receiverId: props.id };
    postAPI({ url: DIR_CONNECTION_REQUEST, data: data })
      .then((res) => {
        window.location.reload();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleChat = () => {
    setChat({
      name: props.firstName + " " + props.lastName,
      roomID: props.connectionId
    });
  };
  return (
    <div className="user_card">
      <div>
        <Label>
          {props.firstName} {props.lastName}
        </Label>
        <Image src={props.userImage}></Image>
        <Paragraph>{props.about}</Paragraph>
        <Label>Gender: {props.gender}</Label>
        <Label>Age: {props.age}</Label>
        <Paragraph>About: {props.about}</Paragraph>
        <Label>Height: {props.height}</Label>
        <Label>Weight: {props.weight}</Label>
        <Label>Eye color: {props.eyeColour} </Label>
        <Label>Hair color:{props.hairColour}</Label>
      </div>

      {props.response === null && (
        <SubmitButton onClick={sendRequest}>Send Request</SubmitButton>
      )}
      {props.response === -1 && <Paragraph>Pending</Paragraph>}

      {props.response === 1 && <ChatButton onClick={handleChat} />}
      {chat.name !== undefined && chat.roomID !== undefined && (
        <Redirect
          to={{
            pathname: `/chat`,
            search: `?name=${chat.name}&room=${chat.roomID}`,
            state: { name: chat.name, room: chat.roomID }
          }}
        />
      )}
    </div>
  );
};

export { UserCard };
