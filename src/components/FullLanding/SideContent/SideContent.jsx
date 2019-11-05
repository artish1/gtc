import React from "react";
import "./SideContent.scss";

import logo from "../../../images/gtc-logo-white.png";

const SideContent = () => {
  return (
    <div className="side-container">
      <div className="title-info shadow">
        <img className="logo" src={logo} alt="" />
        <h1>Grace Trinity Church</h1>
        <div className="main-info-body"></div>
      </div>

      <div className="side-info shadow"></div>
    </div>
  );
};

export default SideContent;
