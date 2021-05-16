import React from "react";
import { Label, Image } from "../common";

const User = ({ src, user_id, firstName, lastName }) => {
  return (
    <>
      <Label>
        {firstName} {lastName}
      </Label>
      <Image src={src}></Image>
    </>
  );
};

export { User };
