import React from "react";
const Select = ({ setter, optionsArr, name, onChange }) => {
  const defaultChange = (e) => {
    setter(e.target.value);
  };
  if (!onChange) onChange = defaultChange;
  return (
    <div>
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
    </div>
  );
};
export { Select };
