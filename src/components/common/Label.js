import React from "react";

const Label = (props) => {
  return <label>{props.children}</label>;
};

const ImportanceLabel = (props) => {
  return <label style={{ textAlign: "end" }}>{props.children}%</label>;
};
export { Label, ImportanceLabel };
