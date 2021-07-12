import React from "react";
import { ENDPOINT } from "../../constants";

const Image = ({ src }) => {
  return (
    <img
      src={`${ENDPOINT}/${src}`}
      alt="Shouldn't see this text..."
      className="post-image"
      width="350px"
    />
  );
};

const ProfileImage = ({ src }) => {
  return (
    <img
      src={`${ENDPOINT}/${src ? src : "avatar.png"}`}
      alt="Shouldn't see this text..."
      className="post-image"
      width="350px"
    />
  );
};

export { Image, ProfileImage };
