import React from "react";
import { Error } from "../../../components/common";

const SignupComponent = ({
  handleEmail,
  handleFirstName,
  handleLastName,
  handlePassword,
  handleSubmit,
  errors
}) => {
  return (
    <form>
      <h3>Sign Up</h3>

      <div className="form-group">
        <label>First name</label>
        <input
          type="text"
          className="form-control"
          placeholder="First name"
          onChange={handleFirstName}
        />
      </div>

      <div className="form-group">
        <label>Last name</label>
        <input
          type="text"
          className="form-control"
          placeholder="Last name"
          onChange={handleLastName}
        />
      </div>

      <div className="form-group">
        <label>Email address</label>
        <input
          type="email"
          className="form-control"
          placeholder="Enter email"
          onChange={handleEmail}
        />
      </div>

      <div className="form-group">
        <label>Password</label>
        <input
          type="password"
          className="form-control"
          placeholder="Enter password"
          onChange={handlePassword}
        />
      </div>
      {errors && <Error>{errors.msg}</Error>}
      <button
        type="submit"
        className="btn btn-primary btn-block"
        onClick={handleSubmit}
      >
        Sign Up
      </button>
      <p className="forgot-password text-right">
        Already registered <a href="/login">Login in?</a>
      </p>
    </form>
  );
};
export { SignupComponent };
