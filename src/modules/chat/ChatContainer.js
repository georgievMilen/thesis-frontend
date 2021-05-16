import React, { useState, useEffect, useRef } from "react";
import io from "socket.io-client";
import queryString from "query-string";
import { ENDPOINT } from "../../constants/index.js";
import { ChatComponent } from "./components/ChatComponent.js";
const ChatContainer = ({ name, roomID }) => {
  const [room, setRoom] = useState("roomID");
  const [users, setUsers] = useState(["milen", "deni", "dancho"]);
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);
  let socket = useRef(io(ENDPOINT));

  useEffect(() => {
    // const { name, roomID } = queryString.parse(window.location.search);

    // setRoom("roomID");

    socket.current.emit("join", { name, roomID });
  }, []);

  useEffect(() => {
    socket.current.on("message", (message) => {
      setMessages((msgs) => [...msgs, message]);
    });

    socket.current.on("loadMessages", (messages) => setMessages(messages));

    socket.current.on("roomData", ({ users }) => {
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
        room={roomID}
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
