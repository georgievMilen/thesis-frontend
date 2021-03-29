import React from "react";

const CancelButton = ({ onClick }) => {
  return (
    <button className="btn btn-secondary" onClick={onClick}>
      Cancel
    </button>
  );
};
const EditButton = ({ onClick }) => {
  return (
    <button className="btn btn-outline-dark btn-sm" onClick={onClick}>
      Edit
    </button>
  );
};

const SaveButton = ({ onClick }) => {
  return (
    <button className="btn btn-primary " onClick={onClick}>
      Save
    </button>
  );
};

const SubmitButton = ({ onClick }) => {
  return (
    <button
      style={{ margin: "0 auto", marginTop: "50px" }}
      type="submit"
      className="btn btn-primary btn-block"
      onClick={onClick}
    >
      Save
    </button>
  );
};

const LogoutButton = ({ onClick }) => {
  return (
    <button
      style={{ margin: "0 auto", marginTop: "50px", marginBottom: "25px" }}
      type="button"
      className="btn btn-default btn-block"
      onClick={onClick}
    >
      <span className="glyphicon glyphicon-log-out" aria-hidden="true"></span>{" "}
      Log out
    </button>
  );
};

const ChatButton = ({ onClick }) => {
  return (
    <button className="btn btn-primary btn-block" onClick={onClick}>
      Chat
    </button>
  );
};

export {
  CancelButton,
  EditButton,
  SaveButton,
  SubmitButton,
  ChatButton,
  LogoutButton
};
