import React from "react";
import { Link } from "react-router-dom";
import { Label } from "../../../components/common";

const SearchResultElement = ({
  element: {
    first_name,
    last_name,
    age,
    gender,
    weight,
    height,
    eye_color,
    hair_color
  }
}) => {
  return (
    <div className="search_result_element_wrapper">
      <img className="result_element_image" alt="avatar" />
      <Label>First Name: {first_name}</Label>
      <Label>Last Name: {last_name}</Label>
      <Label>Age: {age}</Label>
      <Label>Gender: {gender}</Label>
      <Label>Weight: {weight}</Label>
      <Label>Height: {height}</Label>
      <Label>Eye color: {eye_color}</Label>
      <Label>Hair color: {hair_color}</Label>
      <Link
        to={`chat?name=${first_name} ${last_name}&roomID=${
          age * weight + height
        }`}
      >
        Start Chat
      </Link>
    </div>
  );
};
export { SearchResultElement };
