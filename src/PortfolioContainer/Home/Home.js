import React from "react";
import Header from "../Header/Header";
import Footer from "./Footer/Footer";
import "./Home.css";
import Profile from "./Profile/Profile";
const Home = () => {
  return (
    <div className="home-container">
      <Header/>
      <Profile />
      <Footer />
    </div>
  );
};

export default Home;
