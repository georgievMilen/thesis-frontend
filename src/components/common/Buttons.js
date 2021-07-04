import React from "react";
import { Button } from "antd";

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
    <Button
      type="primary"
      style={{
        backgroundColor: "#337ab7",
        color: "#fff"
      }}
      onClick={onClick}
    >
      Filter
    </Button>
  );
};

const SubmitButton = ({ onClick, children = "Save", disabled }) => {
  return (
    <div className="submit_btn">
      <Button
        disabled={disabled}
        style={{ margin: "0 auto" }}
        type="primary"
        onClick={onClick}
      >
        {children}
      </Button>
    </div>
  );
};

const LogoutButton = ({ onClick, children = "Log out" }) => {
  return (
    <div className="logout_btn">
      <Button
        // style={{ margin: "0 auto", marginTop: "50px", marginBottom: "25px" }}
        type="button"
        // className="btn btn-default btn-block"
        onClick={onClick}
      >
        <span className="glyphicon glyphicon-log-out" aria-hidden="true"></span>{" "}
        {children}
      </Button>
    </div>
  );
};

const ChatButton = ({ onClick, children = "Chat" }) => {
  return (
    <Button type="primary" onClick={onClick}>
      {children}
    </Button>
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
