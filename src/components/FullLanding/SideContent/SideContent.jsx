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

      <div className="side-info shadow">
        <h2>Join us on Sundays</h2>
        <div className="quick-info">
          <div className="info-wrapper">
            <i class="fas fa-church fa-3x"></i>
            <br />
            <p>Located at </p>
            <span>5821 Auburn Blvd, Sacramento, CA 95841</span>
          </div>
          <div className="info-wrapper">
            <i class="fas fa-hands fa-3x"></i>
            <br />
            <p>Worship</p>
            <span>Come to a place of worship</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideContent;
