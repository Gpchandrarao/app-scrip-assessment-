import React from "react";
import Navbar from "../pages/Navbar";
import Products from "./Products";
import "../styles/Home.css";
const Home = () => {
  return (
    <div className="home-container">
      <Navbar />
      <Products />
    </div>
  );
};

export default Home;
