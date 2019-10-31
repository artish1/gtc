import React from "react";
import "./Header.scss";
import Schedule from "../Schedule/Schedule";

const Header = () => {
  return (
    <div className="header-wrapper max-width">
      <header>
        <h2 className="title">Grace Trinity Church</h2>
      </header>
      <Schedule />
    </div>
  );
};

export default Header;
