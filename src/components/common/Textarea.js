import React from "react";

const Textarea = ({ value, onChange }) => {
  return (
    <div className="texarea_div">
      <textarea
        className="textarea"
        name="text"
        rows="4"
        cols="50"
        value={value}
        onChange={onChange}
      ></textarea>
    </div>
  );
};

const ROTextArea = ({ defaultValue }) => {
  return (
    <textarea className="ro-textarea" readOnly defaultValue={defaultValue} />
  );
};
export { Textarea, ROTextArea };
