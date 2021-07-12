import React, { useEffect, useState } from "react";
import { Label, List } from "../../components/common";
import { Redirect } from "react-router-dom";
import { DirConn, PostConn } from "../../components/composite";
import { GET_CONNECTIONS } from "../../constants";
import { getAPI } from "../services";

import { authenticationService } from "../../utils";
const ConnectionsContainer = () => {
  const [chat, setChat] = useState({});
  const [postConnArr, setPostConnArr] = useState([]);
  const [dirConnArr, setDirConnArr] = useState([]);

  const handleConnections = (data) => {
    const dirConn = [...data.dirConn];
    const postConn = [...data.postConn];

    setDirConnArr(dirConn);
    setPostConnArr(postConn);
  };
  useEffect(() => {
    const localStorageEmail = authenticationService.currentUserValue;

    getAPI({ url: GET_CONNECTIONS, params: localStorageEmail })
      .then((res) => {
        if (res.data !== "No requests.") {
          handleConnections(res.data);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const handleChat = ({ _name, _roomID }) => {
    setChat({ name: _name, roomID: _roomID });
  };

  return (
    <>
      <Label>Connections: </Label>
      <div className="search_result_list_wrapper">
        <List arr={[...dirConnArr]} Element={DirConn} handleChat={handleChat} />
        <List
          arr={[...postConnArr]}
          Element={PostConn}
          handleChat={handleChat}
        />
      </div>
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
