import React, { useState, useContext } from "react";
import { Label, Image, ROTextArea, SubmitButton, Error } from "../common";
import { authenticationService } from "../../utils";
import { postAPI, deleteAPI } from "../../modules/services";
import { CONNECTION_REQUEST, DELETE_POSTER } from "../../constants";
import { Context } from "../../HOC/AppHOC";

const Post = (props) => {
  const [error, setErr] = useState("");
  const [state] = useContext(Context);

  const sendRequest = () => {
    const localStorageEmail = authenticationService.currentUserValue;
    const data = { email: localStorageEmail, postId: props.postId };
    postAPI({ url: CONNECTION_REQUEST, data: data })
      .then((res) => {
        props.dispatch({
          type: "form/success",
          payload: res.data
        });
        window.location.reload();
      })
      .catch((error) => {
        setErr(error);
      });
  };

  const deleteRequest = () => {
    deleteAPI({ url: DELETE_POSTER, params: props.postId })
      .then((res) => {
        window.location.reload();
      })
      .catch((err) => {
        console.log(err);
        setErr(err.data);
      });
  };

  return (
    <div className="post-wrapper">
      <Image src={props.image} />
      <div className="post-text-fields">
        {error && <Error>{error}</Error>}
        <Label>Title: {props.title}</Label>
        <Label>Type: {props.type}</Label>
        <Label>
          From: {props.firstName} {props.lastName}
        </Label>
        <Label>
          About: <ROTextArea defaultValue={props.text} />
        </Label>
        <Label>Age From: {props.ageFrom ? props.ageFrom : "N/A"}</Label>
        <Label>Age to: {props.ageTo ? props.ageTo : "N/A"}</Label>
        <Label>Country: {props.country ? props.country : "N/A"}</Label>
        <Label>
          Cities:
          {props.cities.length > 0
            ? props.cities.map((city, index) => {
                return <span key={index}> {city} </span>;
              })
            : " N/A"}
        </Label>

        <Label>
          Genders:
          {props.genders.length > 0
            ? props.genders.map((gender, index) => {
                return <span key={index}> {gender} </span>;
              })
            : " N/A"}
        </Label>

        {props.isMyPost === false && (
          <SubmitButton
            onClick={sendRequest}
            disabled={state.logged === props.email || props.conn_res === -1}
          >
            Send Request
          </SubmitButton>
        )}
        {props.isMyPost === true && (
          <SubmitButton onClick={deleteRequest}>Delete</SubmitButton>
        )}
      </div>
    </div>
  );
};

export { Post };
