import React from "react";
import { SaveButton, CancelButton } from "../common";
import { putAPI } from "../../modules/services";
import { DirFields, PostFields } from "./PostTextFields";
const DirReq = (props) => {
  const handleRequest = ({ connectionId, response }) => {
    putAPI({ url: props.url, data: { connectionId, response } })
      .then(() => {
        window.location.reload();
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <div className="req_conn">
        <DirFields {...props} />
        <div className="req_btns">
          <SaveButton
            onClick={() =>
              handleRequest({
                connectionId: props.connectionId,
                response: 1
              })
            }
          >
            Accept
          </SaveButton>
          <CancelButton
            onClick={() =>
              handleRequest({
                connectionId: props.connectionId,
                response: 0
              })
            }
          >
            Decline
          </CancelButton>
        </div>
      </div>
    </>
  );
};

const PostReq = (props) => {
  const handleRequest = ({ connectionId, response }) => {
    putAPI({ url: props.url, data: { connectionId, response } })
      .then(() => {
        window.location.reload();
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <div className="req_conn">
        <PostFields {...props} />
        <div className="req_btns">
          <SaveButton
            onClick={() =>
              handleRequest({
                connectionId: props.connectionId,
                response: 1
              })
            }
          >
            Accept
          </SaveButton>
          <CancelButton
            onClick={() =>
              handleRequest({
                connectionId: props.connectionId,
                response: 0
              })
            }
          >
            Decline
          </CancelButton>
        </div>
      </div>
    </>
  );
};

export { DirReq, PostReq };
