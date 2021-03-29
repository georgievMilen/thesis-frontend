import React from "react";

import onlineIcon from "../../../assets/images/onlineIcon.png";
import closeIcon from "../../../assets/images/closeIcon.png";

const InfoBar = ({ name }) => (
  <div className="infoBar">
    <div className="leftInnerInfoBarContainer">
      <img className="onlineIcon" src={onlineIcon} alt="online icon" />
      <h3>{name}</h3>
    </div>
    <div className="rightInnerInfoBarContainer">
      <a href="/">
        <img src={closeIcon} alt="close icon" />
      </a>
    </div>
  </div>
);

export { InfoBar };
