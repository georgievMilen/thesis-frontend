import React from "react";
const Select = ({ onChange, optionsArr, name }) => {
  return (
    <select
      type="checkbox"
      className="form-control"
      onChange={onChange}
      name={name}
    >
      <option value="" className="select">
        Select
      </option>
      {optionsArr.map((value, index) => (
        <option type="checkbox" value={value} key={index}>
          {value}
        </option>
      ))}
    </select>
  );
};
export { Select };
