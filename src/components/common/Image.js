import React from "react";

const Image = ({ src }) => {
  return (
    <img
      src={src}
      alt="Shouldn't see this text..."
      className="post-image"
      width="350px"
    />
  );
};

export { Image };
