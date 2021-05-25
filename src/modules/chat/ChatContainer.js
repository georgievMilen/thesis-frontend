import React, { useState, useEffect, useRef, useContext } from "react";
import io from "socket.io-client";
import { ENDPOINT } from "../../constants/index.js";
import { ChatComponent } from "./components/ChatComponent.js";
import queryString from "query-string";
import { Context } from "../../HOC/AppHOC";

const ChatContainer = ({ location: { state, search } }) => {
  const [global] = useContext(Context);
  const [room, setRoom] = useState("");
  const [name, setName] = useState("");
  const [users, setUsers] = useState(["milen", "deni", "dancho"]);
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);
  let socket = useRef(io(ENDPOINT));

  useEffect(() => {
    const { name, room } = queryString.parse(search);

    socket.current.emit("join", { name, room }, (error) => {
      if (error) alert(error);
    });
  }, [ENDPOINT, search]);

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
    const data = { message, email: global.logged };
    if (message) {
      socket.current.emit("sendMessage", data, () => setMessage(""));
    }
  };

  return (
    <>
      {console.log(messages)}
      <ChatComponent
        users={users}
        room={state.room}
        name={state.name}
        message={message}
        messages={messages}
        setMessage={setMessage}
        sendMessage={sendMessage}
      />
    </>
  );
};
export { ChatContainer };
