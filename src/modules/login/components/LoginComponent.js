import React from "react";

const LoginComponent = ({
  handleSubmit,
  email,
  handleEmailInput,
  password,
  hanglePasswordInput,
  error
}) => {
  return (
    <form>
      <h3>Login</h3>

      <div className="form-group">
        <label>Email address</label>
        <input
          type="email"
          className="form-control"
          placeholder="Enter email"
          onChange={handleEmailInput}
          value={email}
        />
      </div>

      <div className="form-group">
        <label>Password</label>
        <input
          type="password"
          className="form-control"
          placeholder="Enter password"
          value={password}
          onChange={hanglePasswordInput}
        />
      </div>
      {error && <p className="error">{error.msg}</p>}
      <button
        type="submit"
        className="btn btn-primary btn-block"
        onClick={handleSubmit}
      >
        Submit
      </button>
      <p className="forgot-password text-right">
        Forgot
        {/* <a href="#">password?</a> */}
      </p>
      <p className="forgot-password text-right">
        Don't have an account? <a href="/signup">Sign up!</a>
      </p>
    </form>
  );
};

export { LoginComponent };
