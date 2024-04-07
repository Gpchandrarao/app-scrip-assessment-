import React from "react";
import Header from "./Header";
import logo from "../assets/Logo.svg";
import { CiSearch } from "react-icons/ci";
import { GoHeart } from "react-icons/go";
import { TbShoppingBagMinus } from "react-icons/tb";
import { IoPersonOutline } from "react-icons/io5";
import { CiMenuBurger } from "react-icons/ci";

import "../styles/Navbar.css";

const Navbar = () => {
  return (
    <div>
      <Header />
      <div className="nav-contariner">
        <div className="nav-items-contariner">
          <div className="menu-mobile">
            <CiMenuBurger />
          </div>
          <img src={logo} alt="" className="nav-logo-img" />
          <h1 className="nav-logo-heading">LOGO</h1>
          <div className="icon-container">
            <CiSearch className="icons" />
            <GoHeart className="icons" />
            <TbShoppingBagMinus className="icons" />
            <IoPersonOutline className="icons-persone" />
            <select className="select">
              <option>ENG</option>
              <option>TEG</option>
              <option>HIN</option>
            </select>
          </div>
        </div>
        <ul className="ul-container">
          <li>SHOP</li>
          <li>SKILLS</li>
          <li>STORIES</li>
          <li>ABOUT</li>
          <li>CONTACT US</li>
        </ul>
      </div>
      <hr />
    </div>
  );
};

export default Navbar;
