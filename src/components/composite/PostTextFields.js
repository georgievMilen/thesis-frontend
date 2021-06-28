import React from "react";
import { Label, Image, ROTextArea } from "../common";

const DirFields = (props) => {
  return (
    <div className="post-text-fields">
      <Label>
        Name: {props.firstName} {props.lastName}
      </Label>

      <Image src={props.userImage}></Image>

      <Label>Email: {props.email ? props.email : " N/A"}</Label>
      <Label>Eye colour: {props.eyeColour ? props.eyeColour : " N/A"}</Label>
      <Label>Hair colour: {props.hairColour ? props.hairColour : " N/A"}</Label>
      <Label>Height: {props.height ? props.height : " N/A"}</Label>

      <Label>
        About:
        <ROTextArea defaultValue={props.about ? props.about : " N/A"} />
      </Label>
    </div>
  );
};

const PostFields = (props) => {
  return (
    <div className="post-text-fields">
      <Label>Poster title: {props.posterTitle}</Label>

      <Image src={props.posterImage}></Image>

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
  );
};

export { PostFields, DirFields };
