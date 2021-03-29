import React, { useState, useEffect } from "react";
import axios from "axios";
import socketIOClient from "socket.io-client";
const ENDPOINT = "http://localhost:4000";
const socket = socketIOClient(ENDPOINT);
export const Users = () => {
  const [newUser, setNewUser] = useState({ name: "" });
  const [users, setUsers] = useState([]);
  const [user, setUser] = useState("");
  const [room, setRoom] = useState("");
  const [id, setId] = useState("");
  const [image, setImage] = useState({});
  const [response, setResponse] = useState("");
  const [message, setMessage] = useState("");

  useEffect(() => {
    socket.on("FromAPI", (data) => {
      setResponse(data);
    });
  });

  const joinRoom = (e) => {
    e.preventDefault();
    socket.emit("join", { user: user, room: room }, callback);
  };
  const callback = (messageFromServer) => {
    console.log(messageFromServer);
  };
  const getUsersData = () => {
    axios
      .get("http://localhost:4000/api/v1/users")
      .then((res) => {
        console.log(res);
        setUsers(res.data);
      })
      .catch((err) => {
        console.error(err.response);
      });
  };

  const postNewUser = (user) => {
    axios
      .post("http://localhost:4000/api/v1/users", user)
      .then((res) => {
        console.log(res.data);
        getUsersData();
      })
      .catch((err) => {
        console.error(err.response.data);
      });
  };

  const editUser = (user, id) => {
    axios
      .put(`http://localhost:4000/api/v1/users/${id}`, user)
      .then((res) => {
        console.log(res.data);
        getUsersData();
      })
      .catch((err) => {
        console.error(err.response.data);
      });
  };

  const deleteUser = (id) => {
    axios
      .delete(`http://localhost:4000/api/v1/users/${id}`)
      .then((res) => {
        console.log(res.data);
        getUsersData();
      })
      .catch((err) => {
        console.error(err.response.data);
      });
  };

  const usersList = users.map((user) => {
    return (
      <li key={user.id}>
        {user.id}: {user.name}
      </li>
    );
  });

  const ImageUpload = (image) => {
    axios
      .post(`http://localhost:4000/api/v1/profile/upload`, image)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  const onImageUpload = (e) => {
    e.preventDefault();
    ImageUpload(image);
    setImage({});
  };

  const onImageSelect = ({ target }) => {
    const { files } = target;
    setImage(files[0]);
  };

  const onUserNameInput = ({ target: { value } }) => {
    setNewUser({ name: value });
  };

  const onAddUser = (e) => {
    e.preventDefault();
    postNewUser(newUser);
    setNewUser({ name: "" });
  };

  const onEditUser = (e) => {
    e.preventDefault();
    editUser(newUser, id);
    setNewUser({ name: "" });
    setId("");
  };

  const onDeleteUser = (e) => {
    deleteUser(id);
    setNewUser({ name: "" });
    setId("");
  };

  const onIdIntup = ({ target: { value } }) => {
    setId(value);
  };

  const handleMessageChange = ({ target }) => {
    const { value } = target;
    setMessage(value);
  };
  const handleRoomChange = ({ target }) => {
    const { value } = target;
    setRoom(value);
  };

  const sendMessage = (e) => {
    e.preventDefault();
    console.log(message);
    socket.emit("messageSent", message);
  };

  const handleUserChange = ({ target }) => {
    const { value } = target;
    setUser(value);
  };

  return (
    <div>
      <span>
        It's <time dateTime={response}>{response}</time>
      </span>
      <ul>{usersList}</ul>
      <label className="label">
        Username:
        <input type="text" value={newUser.name} onChange={onUserNameInput} />
      </label>
      <br />
      <label className="label">Edit:</label>
      <br />
      <label className="label">
        ID: <input type="text" value={id} onChange={onIdIntup} />
      </label>
      <br />
      <button className="Button" onClick={onAddUser}>
        Add user
      </button>
      <button className="Button" onClick={onEditUser}>
        Edit user
      </button>
      <button className="Button" onClick={onDeleteUser}>
        Delete user
      </button>
      <br />
      <input type="file" name="image" onChange={onImageSelect} />
      <button className="Button" onClick={onImageUpload}>
        Upload Image
      </button>
      <br />
      <label>Message: </label>
      <input type="text" value={message} onChange={handleMessageChange} />

      <button className="Button" onClick={sendMessage}>
        Send Message
      </button>
      <br />
      <label>Room: </label>
      <input type="text" value={room} onChange={handleRoomChange} />
      <br />
      <label>User: </label>
      <input type="text" value={user} onChange={handleUserChange} />

      <button className="Button" onClick={joinRoom}>
        Join Room
      </button>
    </div>
  );
};
