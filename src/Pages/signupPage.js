import React from "react";
import { SignupContainer } from "../modules/signup/SignupContainer";
import dogUrl from "../assets/images/dog.jpg";
const SignupPage = () => {
  return (
    <div className="signup-page">
      <SignupContainer />
      <img className="start-image" src={dogUrl} alt="dog" />
    </div>
  );
};
export { SignupPage };
