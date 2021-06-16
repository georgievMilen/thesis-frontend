import React from "react";

const Textarea = ({ value, onChange }) => {
  return (
    <textarea
      className="textarea"
      name="text"
      rows="4"
      cols="50"
      value={value}
      onChange={onChange}
    ></textarea>
  );
};
export { Textarea };
