import React, { useReducer, useState } from "react";
import { CITIES_BG, CITIES_BR } from "../../constants";
import { formReducer } from "../../utils/Reducer";

const HOCPostContainer = (Component, initial_state) => {
  const NewComponent = ({ ...props }) => {
    const [postInfo, dispatch] = useReducer(formReducer, initial_state);
    const [cities, setCities] = useState([]);

    const handleType = () => {
      dispatch({
        type: "form/arr-state-clear",
        payload: { fieldName: "genders" }
      });
    };
    const changeCitiesDisplay = (country) => {
      if (country.value === "Bulgaria") {
        setCities(CITIES_BG);
      }
      if (country.value === "Britain") setCities(CITIES_BR);
      if (country.value === "") setCities([]);
      dispatch({
        type: "form/arr-state-clear",
        payload: { fieldName: "cities" }
      });
    };

    const handleState = ({ target }) => {
      dispatch({
        type: "form/enter-data",
        payload: {
          fieldName: target.name,
          value: target.value
        }
      });

      if (target.name === "type") handleType();
      if (target.name === "country") changeCitiesDisplay(target);
    };

    const handleArrState = ({ target }) => {
      dispatch({
        type: "form/arr-state-select",
        payload: {
          fieldName: target.name,
          value: target.value
        }
      });
    };

    const handleFileState = (props) => {
      dispatch({
        type: "form/enter-data",
        payload: { fieldName: "imageName", value: props.name }
      });
      dispatch({
        type: "form/enter-data",
        payload: { fieldName: "selectedImage", value: props }
      });
    };

    return (
      <Component
        postInfo={postInfo}
        cities={cities}
        handleArrState={handleArrState}
        handleState={handleState}
        dispatch={dispatch}
        handleFileState={handleFileState}
        {...props}
      />
    );
  };

  return NewComponent;
};
export { HOCPostContainer };
