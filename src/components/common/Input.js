import React from "react";
import paper_plane from "../../assets/images/paper_plane.png";
import { SLIDER_MIN, SLIDER_MAX } from "../../constants/";
const Input = ({
  placeholder,
  type,
  onChange,
  name,
  value,
  checked = false
}) => {
  return (
    <input
      className="form-control"
      type={type}
      placeholder={placeholder}
      onChange={onChange}
      value={value}
      // for type == "checkbox"
      name={name}
      checked={checked}
    />
  );
};

const RangeInput = ({ value, onChange }) => {
  return (
    <input
      type="range"
      min={SLIDER_MIN}
      max={SLIDER_MAX}
      value={value}
      onChange={onChange}
    />
  );
};

const ChatInput = ({ message, setMessage, sendMessage }) => {
  return (
    <form className="chatForm">
      <input
        className="input"
        type="text"
        placeholder="Type your message here."
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        onKeyPress={(e) => (e.key === "Enter" ? sendMessage(e) : null)}
      />
      <button className="sendButton" onClick={sendMessage}>
        <img className="paperPlaneImage" src={paper_plane} alt="paper plane" />
      </button>
    </form>
  );
};

const FileInput = ({ onChange }) => {
  return <input className="form-control" type="file" onChange={onChange} />;
};

export { Input, RangeInput, ChatInput, FileInput };
