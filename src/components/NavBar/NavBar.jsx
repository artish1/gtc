import React, { Component } from "react";
import logo from "../../images/gtc-logo.png";
import "./NavBar.scss";

const NavBar = () => {
  return (
    <nav className="shadow">
      <div className="nav-wrapper max-width">
        <img className="logo" src={logo} alt="church logo" />
        <div className="links">
          <a href="#">Home</a>
          <a href="#">Services</a>
          <a href="#">Media</a>
          <a href="#">About</a>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
