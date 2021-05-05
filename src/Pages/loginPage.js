import React from "react";
import { LoginContainer } from "../modules/login/LoginContainer";
import dogUrl from "../assets/images/dog.jpg";

const LoginPage = () => {
  return (
    <div className="login-page">
      <LoginContainer />
      <img className="start-image" src={dogUrl} alt="dog" />
    </div>
  );
};
export { LoginPage };
