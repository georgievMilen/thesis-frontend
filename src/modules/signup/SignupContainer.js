import React, { useState } from "react";
import { SignupComponent } from "./components/SignupComponent";
import { signup } from "./services/signupService";
import { validateSignin } from "../../utils/validateSignin";
import { Redirect } from "react-router-dom";

const SignupContainer = () => {
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});
  const [successfulReg, setSuccessfulReg] = useState(false);

  const handleEmail = ({ target }) => {
    setEmail(target.value);
  };

  const handleFirstName = ({ target }) => {
    setFirstName(target.value);
  };

  const handleLastName = ({ target }) => {
    setLastName(target.value);
  };
  const handlePassword = ({ target }) => {
    setPassword(target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errs = validateSignin({ firstName, lastName, password, email });
    if (errs) return setErrors(errs);
    signup({ email, firstName, lastName, password }, (response) => {
      if (response.status !== 200) return setErrors({ msg: response.data });
      setSuccessfulReg(true);
    });
  };
  return (
    <div>
      <SignupComponent
        handleEmail={handleEmail}
        handleFirstName={handleFirstName}
        handleLastName={handleLastName}
        handlePassword={handlePassword}
        handleSubmit={handleSubmit}
        errors={errors}
      />
      {successfulReg && <Redirect to="/login" />}
    </div>
  );
};
export { SignupContainer };
