import React from "react";
import { SearchResultElement } from "../../modules/search/components/SearchResultElement";
const List = ({ arr, Element }) => {
  if (arr)
    return arr.map((element, index) => {
      return <Element key={index} element={element} />;
    });
  return;
};
export { List };
