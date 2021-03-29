import React from "react";
const Select = ({ onChange, optionsArr }) => {
  return (
    <select type="checkbox" className="form-control" onChange={onChange}>
      <option value="" className="selectColor">
        Select Color
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
