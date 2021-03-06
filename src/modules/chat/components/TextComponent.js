import React from "react";
import onlineIcon from "../../../assets/images/onlineIcon.png";
const TextComponent = ({ users }) => (
  <div className="textContainer">
    {users ? (
      <div>
        <h1>Users chatting</h1>
        <div className="activeContainer">
          <h2>
            {users.map((name) => (
              <div key={name} className="activeItem">
                {name}
                <img alt="Online Icon" src={onlineIcon} />
              </div>
            ))}
          </h2>
        </div>
      </div>
    ) : null}
  </div>
);

export { TextComponent };
