import React, { useState, useEffect, useRef } from "react";
import io from "socket.io-client";
import queryString from "query-string";
import { ENDPOINT } from "../../constants/index.js";
import { ChatComponent } from "./components/ChatComponent.js";
const ChatContainer = (props) => {
  const [name, setName] = useState("");
  const [room, setRoom] = useState("");
  const [users, setUsers] = useState(["milen", "deni", "dancho"]);
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);
  let socket = useRef(io(ENDPOINT));

  useEffect(() => {
    const { name, roomID } = queryString.parse(window.location.search);

    setRoom(roomID);
    setName(name);

    socket.emit("join", { name, roomID });
  }, [props.location]);

  useEffect(() => {
    socket.on("message", (message) => {
      setMessages((msgs) => [...msgs, message]);
    });

    socket.on("loadMessages", (messages) => setMessages(messages));

    socket.on("roomData", ({ users }) => {
      setUsers(users);
    });
  }, []);

  const sendMessage = (event) => {
    event.preventDefault();

    // if (message) {
    //   socket.emit("sendMessage", message, () => setMessage(""));
    // }
  };

  return (
    <>
      <ChatComponent
        users={users}
        room={room}
        name={name}
        message={message}
        messages={messages}
        setMessage={setMessage}
        sendMessage={sendMessage}
      />
    </>
  );
};
export { ChatContainer };
