import React from "react";

const List = ({ arr, Element, ...other }) => {
  if (arr)
    return arr.map((element, index) => {
      return <Element key={index} element={element} {...other} />;
    });
  return;
};
export { List };
