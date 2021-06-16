import React, { useState, useContext } from "react";
import { Label, Image, Paragraph, SubmitButton, Error } from "../common";
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
      <Error>{error}</Error>
      <Label>Title: {title}</Label>

      <Label>Type: {type}</Label>
      <Label>
        From: {firstName} {lastName}
      </Label>
      <Image src={image} />
      <Paragraph>Text: {text}</Paragraph>
      {ageFrom && <Label>Age From: {ageFrom}</Label>}
      {ageTo && <Label>Age to: {ageTo}</Label>}
      <Label>Country: {country}</Label>

      <Label>
        Cities:
        {cities.map((city, index) => {
          return <span key={index}> {city}; </span>;
        })}
      </Label>
      {genders.length > 0 && (
        <Label>
          Genders:
          {genders.map((gender, index) => {
            return <span key={index}> {gender}; </span>;
          })}
        </Label>
      )}
      {isMyPost === false && (
        <SubmitButton onClick={sendRequest} disabled={state.logged === email}>
          Send Request
        </SubmitButton>
      )}
      {isMyPost === true && (
        <SubmitButton onClick={deleteRequest}>Delete</SubmitButton>
      )}
    </div>
  );
};

export { Post };
