import React, { useContext, useState } from "react";
import { Redirect } from "react-router-dom";
import { LoginComponent } from "./components/LoginComponent";
import { login } from "./services/loginService";
import { Context } from "../../HOC/Store";

const LoginContainer = () => {
  const [successfulLogin, setSuccessfulLogin] = useState(false);
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
    login({ email, password }, (response) => {
      if (response.status !== 200) return setError({ msg: response.data });
      dispatch({ type: "login", payload: true });
      setSuccessfulLogin(true);
    });
  };

  const handleEmailInput = ({ target }) => {
    setEmail(target.value);
  };
  const hanglePasswordInput = ({ target }) => {
    setPassword(target.value);
  };
  return (
    <div className="form_wrapper">
      <LoginComponent
        handleEmailInput={handleEmailInput}
        hanglePasswordInput={hanglePasswordInput}
        handleSubmit={handleSubmit}
        validateForm={validateForm}
        password={password}
        error={error}
        email={email}
      />
      {successfulLogin && <Redirect to="/profile" />}
    </div>
  );
};

export { LoginContainer };
