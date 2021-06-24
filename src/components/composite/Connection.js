import { Label, Image, ChatButton, ROTextArea } from "../common";
import React from "react";

const DirConn = (props) => {
  return (
    <div className="dir_conn">
      <div className="post-text-fields">
        <Label>
          Name: {props.firstName} {props.lastName}
        </Label>
      </div>
      <Image src={props.userImage}></Image>
      <div className="post-text-fields">
        <Label>Email: {props.email ? props.email : " N/A"}</Label>
        <Label>Eye colour: {props.eyeColour ? props.eyeColour : " N/A"}</Label>
        <Label>
          Hair colour: {props.hairColour ? props.hairColour : " N/A"}
        </Label>
        <Label>Height: {props.height ? props.height : " N/A"}</Label>

        <Label>
          About:
          <ROTextArea defaultValue={props.about ? props.about : " N/A"} />
        </Label>
      </div>

      <ChatButton
        onClick={() =>
          props.handleChat({
            _name: props.firstName + "_" + props.lastName,
            _roomID: props.connectionId
          })
        }
      />
    </div>
  );
};

const PostConn = (props) => {
  return (
    <div className="post_conn">
      <div className="post-text-fields">
        <Label>Poster title: {props.posterTitle}</Label>
      </div>
      <Image src={props.posterImage}></Image>

      <div className="post-text-fields">
        <Label>
          About poster:
          <ROTextArea defaultValue={props.posterText} />
        </Label>
        <Label>Connected to:</Label>
        <Label>
          Name: {props.firstName} {props.lastName}
        </Label>
        <Label>Email: {props.email}</Label>
        <Label>Age: {props.age}</Label>
      </div>

      <ChatButton
        onClick={() =>
          props.handleChat({
            _name: props.firstName + "_" + props.lastName,
            _roomID: props.connectionId
          })
        }
      />
    </div>
  );
};
export { DirConn, PostConn };
