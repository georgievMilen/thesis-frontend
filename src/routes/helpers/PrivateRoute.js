import React from "react";

import { Redirect, Route } from "react-router-dom";
import { authenticationService } from "../../utils";

export const PrivateRoute = ({ component, ...rest }) => {
  const currentUser = authenticationService.currentUserValue;
  console.log(component);
  return (
    <>
      {currentUser ? (
        <Route path={rest.path} exact={rest.exact} component={component} />
      ) : (
        <Redirect to="/login" />
      )}
    </>
  );
};
