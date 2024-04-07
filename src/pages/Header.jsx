import React from "react";
import headerLogo from "../assets/element-4.png";
import "../styles/Header.css";

const Header = () => {
  return (
    <div className="header-container">
      <div className="header-staring-mobie">
        <img src={headerLogo} alt="logo" className="header-icon" />
        <h1 className="header-heading">Lorem ipsum dolor</h1>
      </div>
      <div className="header-staring">
        <img src={headerLogo} alt="logo" className="header-icon" />
        <h1 className="header-heading">Lorem ipsum dolor</h1>
      </div>
      <div className="header-staring">
        <img src={headerLogo} alt="logo" className="header-icon" />
        <h1 className="header-heading">Lorem ipsum dolor</h1>
      </div>
      <div className="header-staring">
        <img src={headerLogo} alt="logo" className="header-icon" />
        <h1 className="header-heading">Lorem ipsum dolor</h1>
      </div>
    </div>
  );
};

export default Header;
