import React from "react";
import Header from "./Header";
import logo from "../assets/Logo.svg";
import { CiSearch } from "react-icons/ci";
import { GoHeart } from "react-icons/go";

const Navbar = () => {
  return (
    <div>
      <Header />
      <div>
        <img src={logo} alt="" className="nav-logo-img" />
        <h1 className="nav-logo-heading">LOGO</h1>
        <div className="icon-container"></div>
      </div>
    </div>
  );
};

export default Navbar;
