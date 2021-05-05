import React from "react";
import { Error, SubmitButton, Label, Input } from "../../../components/common";

const SignupComponent = ({
  handleEmail,
  handleFirstName,
  handleLastName,
  handlePassword,
  handleSubmit,
  handleUsername,
  errors
}) => {
  return (
    <form>
      <h3>Sign Up</h3>

      <div className="form-group">
        <Label>First name</Label>
        <Input
          type="text"
          placeholder="First name"
          onChange={handleFirstName}
        />
      </div>

      <div className="form-group">
        <Label>Last name</Label>
        <Input type="text" placeholder="Last name" onChange={handleLastName} />
      </div>

      <div className="form-group">
        <Label>Username</Label>
        <Input type="text" placeholder="Username" onChange={handleUsername} />
      </div>
      <div className="form-group">
        <Label>Email address</Label>
        <Input type="email" placeholder="Enter email" onChange={handleEmail} />
      </div>

      <div className="form-group">
        <Label>Password</Label>
        <Input
          type="password"
          placeholder="********"
          onChange={handlePassword}
        />
      </div>
      {errors && <Error>{errors}</Error>}
      <SubmitButton onClick={handleSubmit}>Sign Up</SubmitButton>
      <p className="forgot-password text-right">
        Already registered <a href="/login">Login in?</a>
      </p>
    </form>
  );
};
export { SignupComponent };
