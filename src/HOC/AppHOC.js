import React, { createContext, useReducer } from "react";
import { Reducer } from "../utils/Reducer";
import { authenticationService } from "../utils";

const initialState = {
  logged: authenticationService.currentUserValue
};

const AppHOC = ({ children }) => {
  const [state, dispatch] = useReducer(Reducer, initialState);
  return (
    <Context.Provider value={[state, dispatch]}>{children}</Context.Provider>
  );
};

export const Context = createContext(initialState);

export { AppHOC };
