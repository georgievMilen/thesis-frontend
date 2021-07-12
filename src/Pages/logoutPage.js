import React, { useContext, useEffect } from "react";
import { Context } from "../HOC/AppHOC";
import { authenticationService } from "../utils";
import { Redirect } from "react-router-dom";

const LogoutPage = () => {
  const [state, dispatch] = useContext(Context);

  const logout = () => {
    if (window.confirm("Are you sure you want to logout?")) {
      authenticationService.logout();
      dispatch({ type: "logout", payload: false });
    }
  };
  useEffect(() => {
    logout();
    // eslint-disable-next-line
  }, []);
  return <>{!state.logged && <Redirect to="/login" />}</>;
};
export { LogoutPage };
