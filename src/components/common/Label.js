import React from "react";
import { Typography } from "antd";
const { Text } = Typography;
const Label = (props) => {
  return (
    <div>
      <Text strong style={{ display: "block" }}>
        {props.children}
      </Text>
    </div>
  );
};

const ImportanceLabel = (props) => {
  return (
    <label htmlFor={props.for} style={{ textAlign: "end" }}>
      {props.children}%
    </label>
  );
};
export { Label, ImportanceLabel };
