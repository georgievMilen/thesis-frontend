import React from "react";

const DoubleLabel = ({ first, second }) => {
  return (
    <div className="profile_label_holder">
      <label>{first} </label>
      <label>{second}</label>
    </div>
  );
};
export { DoubleLabel };
