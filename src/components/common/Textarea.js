import React from "react";

const Textarea = ({ onChange }) => {
  return (
    <textarea
      className="textarea"
      name="text"
      rows="4"
      cols="50"
      onChange={onChange}
    ></textarea>
  );
};
export { Textarea };
