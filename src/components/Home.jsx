import React from "react";
import Navbar from "../pages/Navbar";
import Products from "./Products";
import "../styles/Home.css";
import Footer from "../pages/Footer";
const Home = () => {
  return (
    <div className="home-container">
      <Navbar />
      <Products />
      <Footer />
    </div>
  );
};

export default Home;
