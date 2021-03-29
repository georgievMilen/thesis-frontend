import React from "react";
import { SignupContainer } from "../modules/signup/SignupContainer";

const SignupPage = () => {
  return (
    <div>
      <div className="container">
        <div className="auth-wrapper">
          <div className="auth-inner">
            <SignupContainer />
          </div>
        </div>
      </div>
    </div>
  );
};
export { SignupPage };
