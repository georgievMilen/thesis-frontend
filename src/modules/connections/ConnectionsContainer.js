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
    const reqArr = [...data.populReq];
    const connArr = [...data.populConn];

    setConnectionsArr(connArr);
    setRequestArr(reqArr);
  };
  useEffect(() => {
    getAPI({ url: GET_CONNECTIONS, params: state.logged })
      .then((res) => {
        if (res.data !== "No requests.") {
          const data = { ...res.data };
          handleConnections(data);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const handleRequest = ({ connection_id, response }) => {
    putAPI({ url: UPDATE_REQUEST, data: { connection_id, response } })
      .then(() => {
        window.location.reload();
      })
      .catch((err) => setError(err));
    setTimeout(() => {}, 3000);
  };

  const handleChat = ({ _name, _roomID }) => {
    setChat({ name: _name, roomID: _roomID });
  };

  return (
    <>
      {isEmptyObj === false && <Error>{error.data}</Error>}
      <Label>Reqeusts:</Label>
      <List
        arr={requestsArr}
        Element={User}
        handleRequest={handleRequest}
        type="request"
      />

      <Label>Connections: </Label>
      <List
        arr={[...connectionsArr, ...requestsArr]}
        Element={User}
        handleChat={handleChat}
        type="connection"
      />
      {chat.name !== undefined && chat.roomID !== undefined && (
        <Redirect
          to={{
            pathname: `/chat`,
            search: `?name=${chat.name}&room=${chat.roomID}`,
            state: { name: chat.name, room: chat.roomID }
          }}
        />
      )}
    </>
  );
};

export { ConnectionsContainer };
