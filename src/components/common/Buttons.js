import React from "react";

const CancelButton = ({ onClick, children = "Cancel" }) => {
  return (
    <button className="btn btn-secondary" onClick={onClick}>
      {children}
    </button>
  );
};
const EditButton = ({ onClick, children = "Edit" }) => {
  return (
    <button className="btn btn-outline-dark btn-sm" onClick={onClick}>
      {children}
    </button>
  );
};

const SaveButton = ({ onClick, children = "Save" }) => {
  return (
    <button className="btn btn-primary " onClick={onClick}>
      {children}
    </button>
  );
};

const FilterButton = ({ onClick }) => {
  return (
    <button className="btn btn-primary " onClick={onClick}>
      Filter
    </button>
  );
};

const SubmitButton = ({ onClick, children = "Save" }) => {
  return (
    <button
      style={{ margin: "0 auto", marginTop: "50px" }}
      type="submit"
      className="btn btn-primary btn-block"
      onClick={onClick}
    >
      {children}
    </button>
  );
};

const LogoutButton = ({ onClick, children = "Log out" }) => {
  return (
    <button
      style={{ margin: "0 auto", marginTop: "50px", marginBottom: "25px" }}
      type="button"
      className="btn btn-default btn-block"
      onClick={onClick}
    >
      <span className="glyphicon glyphicon-log-out" aria-hidden="true"></span>{" "}
      {children}
    </button>
  );
};

const ChatButton = ({ onClick, children = "Chat" }) => {
  return (
    <button className="btn btn-primary btn-block" onClick={onClick}>
      {children}
    </button>
  );
};

export {
  CancelButton,
  EditButton,
  SaveButton,
  SubmitButton,
  ChatButton,
  LogoutButton,
  FilterButton
};
