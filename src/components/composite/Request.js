import React from "react";
import { Label, Image, SaveButton, CancelButton } from "../common";
import { putAPI } from "../../modules/services";

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
        <Label>
          {props.firstName} {props.lastName}
        </Label>
        <Image src={props.userImage}></Image>
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
    </>
  );
};

const PostReq = (props) => {
  return (
    <>
      <div className="req_conn">
        <Label>About poster: {props.posterTitle}</Label>
        <Image src={props.posterImage}></Image>
        <DirReq {...props} />
      </div>
    </>
  );
};

export { DirReq, PostReq };
