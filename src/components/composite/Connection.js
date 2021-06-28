import React from "react";
import { ChatButton } from "../common";
import { PostFields, DirFields } from "./PostTextFields";
const DirConn = (props) => {
  return (
    <div className="dir_conn">
      <DirFields {...props} />

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
      <PostFields {...props} />

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
