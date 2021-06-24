import React, { useState, useContext } from "react";
import {
  Label,
  Image,
  Paragraph,
  ROTextArea,
  SubmitButton,
  Error,
  Textarea
} from "../common";
import { authenticationService } from "../../utils";
import { postAPI, deleteAPI } from "../../modules/services";
import { CONNECTION_REQUEST, DELETE_POSTER } from "../../constants";
import { Context } from "../../HOC/AppHOC";

const Post = ({
  id,
  ageFrom,
  ageTo,
  cities,
  country,
  email,
  firstName,
  genders,
  image,
  lastName,
  text,
  title,
  type,
  dispatch,
  isMyPost
}) => {
  const [error, setErr] = useState("");
  const [state] = useContext(Context);

  const sendRequest = () => {
    const localStorageEmail = authenticationService.currentUserValue;
    const data = { email: localStorageEmail, postId: id };
    postAPI({ url: CONNECTION_REQUEST, data: data })
      .then((res) => {
        dispatch({
          type: "form/success",
          payload: res.data
        });
      })
      .catch((error) => {
        setErr(error);
      });
  };

  const deleteRequest = () => {
    deleteAPI({ url: DELETE_POSTER, params: id })
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
      <Image src={image} />
      <div className="post-text-fields">
        <Error>{error}</Error>
        <Label>Title: {title}</Label>
        <Label>Type: {type}</Label>
        <Label>
          From: {firstName} {lastName}
        </Label>
        <Label>
          About: <ROTextArea defaultValue={text} />
        </Label>
        <Label>Age From: {ageFrom ? ageFrom : "N/A"}</Label>
        <Label>Age to: {ageTo ? ageTo : "N/A"}</Label>
        <Label>Country: {country ? country : "N/A"}</Label>
        <Label>
          Cities:
          {cities.length > 0
            ? cities.map((city, index) => {
                return <span key={index}> {city} </span>;
              })
            : " N/A"}
        </Label>

        <Label>
          Genders:
          {genders.length > 0
            ? genders.map((gender, index) => {
                return <span key={index}> {gender} </span>;
              })
            : " N/A"}
        </Label>

        {isMyPost === false && (
          <SubmitButton onClick={sendRequest} disabled={state.logged === email}>
            Send Request
          </SubmitButton>
        )}
        {isMyPost === true && (
          <SubmitButton onClick={deleteRequest}>Delete</SubmitButton>
        )}
      </div>
    </div>
  );
};

export { Post };
