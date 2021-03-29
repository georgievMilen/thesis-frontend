import React from "react";
import { SearchResultElement } from "./SearchResultElement";
const SearchResultList = ({ resultArr }) => {
  return resultArr.map((element, index) => {
    return <SearchResultElement key={index} element={element} />;
  });
};
export { SearchResultList };
