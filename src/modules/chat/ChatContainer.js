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
    setRoom(room);

    setName(name.replace("_", " "));

    socket.current.emit("join", { name, room }, ({ error, mssgs }) => {
      if (error) alert(error);
      setMessages(mssgs);
    });
  }, [ENDPOINT, search]);

  socket.current.on("loadMessages", (mssgs) => setMessages(mssgs));
  useEffect(() => {
    socket.current.on("message", (mssg) => {
      console.log({ mssg });
      setMessages((msgs) => [...msgs, mssg]);
    });

    socket.current.on("roomData", ({ users }) => {
      setUsers(users);
    });
  }, []);

  const sendMessage = (event) => {
    event.preventDefault();
    const data = { message, email: global.logged, room };
    if (message) {
      socket.current.emit("sendMessage", data, () => {
        setMessage("");
      });
    }
  };

  return (
    <>
      {console.log(messages)}
      <ChatComponent
        users={users}
        room={state.room}
        currUser={global.logged}
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
