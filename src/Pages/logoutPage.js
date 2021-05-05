import React, { useContext, useEffect } from "react";
import { Context } from "../HOC/AppHOC";
import { authenticationService } from "../utils";
import { Redirect } from "react-router-dom";

const LogoutPage = () => {
  const [state, dispatch] = useContext(Context);
  useEffect(() => {
    authenticationService.logout();
    dispatch({ type: "logout", payload: false });
  });
  return <>{!state.logged && <Redirect to="/login" />}</>;
};
export { LogoutPage };
