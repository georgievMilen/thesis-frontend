import React, { useContext, useEffect, useState } from "react";
import { Label, List, Error } from "../../components/common";
import { Redirect } from "react-router-dom";

import { User } from "../../components/composite";
import { GET_CONNECTIONS, UPDATE_REQUEST } from "../../constants";
import { getAPI, putAPI } from "../services";
import { Context } from "../../HOC/AppHOC";
import { isEmptyObj } from "../../utils";
const ConnectionsContainer = () => {
  const [state] = useContext(Context);
  const [error, setError] = useState({});
  const [chat, setChat] = useState({});
  const [requestsArr, setRequestArr] = useState([]);
  const [connectionsArr, setConnectionsArr] = useState([]);

  const handleConnections = (data) => {
    const reqArr = [];
    const connArr = [];
    data.forEach((el) => {
      if (el[0].response === -1) reqArr.push(el[0]);
      if (el[0].response === 1) connArr.push(el[0]);
    });
    setConnectionsArr(connArr);
    setRequestArr(reqArr);
  };
  useEffect(() => {
    getAPI({ url: GET_CONNECTIONS, params: state.logged })
      .then((res) => {
        const data = [...res.data];
        handleConnections(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const handleRequest = ({ id, response }) => {
    console.log(id, response);
    putAPI({ url: UPDATE_REQUEST, data: { id, response } })
      .then(() => {
        window.location.reload();
      })
      .catch((err) => setError(err));
    setTimeout(() => {}, 3000);
  };
  const handleChat = ({ _id, _roomID }) => {
    setChat({ id: _id, roomID: _roomID });
  };

  return (
    <>
      {isEmptyObj === false && <Error>{error.data}</Error>}
      <Label>Reqeusts:</Label>
      <List arr={requestsArr} Element={User} handleRequest={handleRequest} />

      <Label>Connections: </Label>
      <List arr={connectionsArr} Element={User} handleChat={handleChat} />
      {isEmptyObj(chat) === false && (
        <Redirect
          to={{
            pathname: "/chat",
            state: { id: chat.id, roomID: chat.roomID }
          }}
        />
      )}
    </>
  );
};

export { ConnectionsContainer };
