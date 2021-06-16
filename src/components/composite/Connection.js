import { Label, Image, ChatButton } from "../common";
import React from "react";

const DirConn = (props) => {
  return (
    <div className="dir_conn">
      <Label>
        {props.firstName} {props.lastName}
      </Label>
      <Image src={props.userImage}></Image>
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
      <Label>About poster: {props.posterTitle}</Label>
      <Image src={props.posterImage}></Image>

      <DirConn {...props} />
    </div>
  );
};
export { DirConn, PostConn };
