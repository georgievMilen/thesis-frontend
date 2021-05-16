import React, { useReducer, useState } from "react";

import { POST_INITIAL_STATE } from "../../constants";
import { CITIES_BG, CITIES_BR } from "../../constants";
import { formReducer } from "../../utils/Reducer";

const HOCPostContainer = (Component) => {
  const NewComponent = ({ ...props }) => {
    const [postInfo, dispatch] = useReducer(formReducer, POST_INITIAL_STATE);
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

      // let tempState = state;
      if (target.name === "type") handleType();
      if (target.name === "country") changeCitiesDisplay(target);
      // tempState[target.name] = target.value;
      // setState(tempState);
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

    return (
      <Component
        postInfo={postInfo}
        cities={cities}
        handleArrState={handleArrState}
        handleState={handleState}
        dispatch={dispatch}
        {...props}
      />
    );
  };

  return NewComponent;
};
export { HOCPostContainer };
