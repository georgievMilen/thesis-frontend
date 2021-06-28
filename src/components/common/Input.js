import React from "react";
import paper_plane from "../../assets/images/paper_plane.png";
import { Checkbox } from "antd";
import { SLIDER_MIN, SLIDER_MAX } from "../../constants/";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const Input = ({ placeholder, type, name, value, setter, onChange }) => {
  const defaultChange = (e) => {
    setter(e.target.value);
  };
  if (!onChange) onChange = defaultChange;
  return (
    <div>
      <input
        className="form-control"
        type={type}
        placeholder={placeholder}
        onChange={onChange}
        value={value}
        name={name}
      />
    </div>
  );
};

const DateInput = ({ value, onChange, setter }) => {
  const defaultChange = (date) => {
    setter(date);
  };
  if (!onChange) onChange = defaultChange;
  return (
    <div className="customDatePickerWidth">
      <DatePicker
        selected={value}
        onChange={(date) => onChange(date)}
        dateFormat="yyyy/MM/dd"
      />
    </div>
  );
};

const CheckBoxInput = ({ name, checked, onChange, value, children }) => {
  return (
    <Checkbox name={name} onChange={onChange} value={value} checked={checked}>
      {children}
    </Checkbox>
  );
};

const RangeInput = ({ value, setter }) => {
  const onChange = (e) => {
    setter(parseInt(e.target.value));
  };

  return (
    <input
      type="range"
      min={SLIDER_MIN}
      max={SLIDER_MAX}
      value={value}
      valueasnumber={value}
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

const FileInput = ({ setSelectedImage }) => {
  const fileSelect = (e) => {
    e.preventDefault();

    const imageFile = e.target.files[0];

    if (!e.target.files[0]) {
      alert("Please select image.");
      e.target.value = null;
      setSelectedImage({ name: "" });
      return false;
    }

    if (!imageFile.name.match(/\.(jpg|jpeg|png|gif)$/)) {
      alert("Please select valid image.");
      e.target.value = null;
      setSelectedImage({ name: "" });
      return false;
    }
    setSelectedImage(imageFile);
  };

  return (
    <input
      type="file"
      name="file"
      className="form-control"
      style={{ marginTop: "10px" }}
      onChange={fileSelect}
    />
  );
};

export { Input, RangeInput, ChatInput, FileInput, DateInput, CheckBoxInput };
