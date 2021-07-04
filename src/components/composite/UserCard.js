import React, { useState } from "react";
import { DIR_CONNECTION_REQUEST } from "../../constants";
import {
  Label,
  Paragraph,
  SubmitButton,
  ChatButton,
  ROTextArea,
  ProfileImage
} from "../common";
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
      <div className="post-text-fields">
        <Label>
          {props.firstName} {props.lastName}
        </Label>

        <ProfileImage src={props.userImage} />

        <Label>Gender: {props.gender ? props.gender : " N/A"}</Label>
        <Label>Age: {props.age}</Label>
        <Label>
          About:
          <ROTextArea defaultValue={props.about ? props.about : " N/A"} />
        </Label>
        <Label>Height: {props.height ? props.height : " N/A"}</Label>
        <Label>Weight: {props.weight ? props.weight : " N/A"}</Label>
        <Label>Eye color: {props.eyeColour ? props.eyeColour : " N/A"} </Label>
        <Label>Hair color:{props.hairColour ? props.hairColour : " N/A"}</Label>
      </div>

      {props.response === null && (
        <SubmitButton onClick={sendRequest} type="primary">
          Send Request
        </SubmitButton>
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
