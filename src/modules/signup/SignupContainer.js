import React, { useState } from "react";
import { SignupComponent } from "./components/SignupComponent";
import { REG_URL } from "../../constants";
import { validateSignin } from "../../utils/validation";
import { Redirect } from "react-router-dom";
import { postAPI } from "../services";

const SignupContainer = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [first_name, setFirstName] = useState("");
  const [last_name, setLastName] = useState("");
  const [errors, setErrors] = useState("");
  const [successfulReg, setSuccessfulReg] = useState(false);
  const [password, setPassword] = useState("");

  const handleUsername = ({ target }) => {
    setUsername(target.value);
  };

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
    const userData = {
      username,
      password,
      email,
      first_name,
      last_name
    };
    const errs = validateSignin(userData);

    if (errs) return setErrors(errs);
    postAPI({ url: REG_URL, data: userData })
      .then((response) => {
        setSuccessfulReg(true);
      })
      .catch((err) => {
        setErrors(err.data);
      });
  };
  return (
    <>
      <SignupComponent
        handleUsername={handleUsername}
        handleEmail={handleEmail}
        handleFirstName={handleFirstName}
        handleLastName={handleLastName}
        handlePassword={handlePassword}
        handleSubmit={handleSubmit}
        errors={errors}
      />
      {successfulReg && <Redirect to="/login" />}
    </>
  );
};
export { SignupContainer };
