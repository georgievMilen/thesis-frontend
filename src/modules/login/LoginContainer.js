import React, { useContext, useState } from "react";
import { Redirect } from "react-router-dom";
import { LoginComponent } from "./components/LoginComponent";
import { postAPI } from "../services";
import { LOGIN_URL } from "../../constants";
import { authenticationService } from "../../utils";
import { Context } from "../../HOC/AppHOC";

const LoginContainer = () => {
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [email, setEmail] = useState("");

  const [state, dispatch] = useContext(Context);

  const validateForm = () => {
    return email.length > 0 && password.length > 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) return;
    postAPI({ url: LOGIN_URL, data: { email, password } })
      .then((response) => {
        authenticationService.login(email);
        dispatch({ type: "login", payload: true });
      })
      .catch((err) => {
        setError({ msg: err.data });
      });
  };

  const handleEmailInput = ({ target }) => {
    setEmail(target.value);
  };
  const hanglePasswordInput = ({ target }) => {
    setPassword(target.value);
  };
  return (
    <>
      <LoginComponent
        handleEmailInput={handleEmailInput}
        hanglePasswordInput={hanglePasswordInput}
        handleSubmit={handleSubmit}
        validateForm={validateForm}
        password={password}
        error={error}
        email={email}
      />
      {state.logged && <Redirect to="/posts" />}
    </>
  );
};

export { LoginContainer };
