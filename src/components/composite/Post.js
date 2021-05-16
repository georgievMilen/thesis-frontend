import React, { useState } from "react";
import { Label, Image, Paragraph, SubmitButton, Error } from "../common";
import { authenticationService } from "../../utils";
import { postAPI, deleteAPI } from "../../modules/services";
import { POSTER_CONNECTION_REQUEST, DELETE_POSTER } from "../../constants";
const Post = ({
  element: {
    id,
    user_id,
    first_name,
    last_name,
    age_from,
    age_to,
    country,
    image,
    text,
    title,
    type,
    cities,
    genders
  },
  dispatch,
  isMyPost
}) => {
  const [error, setErr] = useState("");
  const sendRequest = () => {
    const localStorageEmail = authenticationService.currentUserValue;
    const data = { email: localStorageEmail, postId: id };
    postAPI({ url: POSTER_CONNECTION_REQUEST, data: data })
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
        From: {first_name} {last_name}
      </Label>
      <Image src={image} />
      <Paragraph>Text: {text}</Paragraph>
      {age_from && <Label>Age From: {age_from}</Label>}
      {age_to && <Label>Age to: {age_to}</Label>}
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
        <SubmitButton onClick={sendRequest}>Send Request</SubmitButton>
      )}
      {isMyPost === true && (
        <SubmitButton onClick={deleteRequest}>Delete Request</SubmitButton>
      )}
    </div>
  );
};

export { Post };
