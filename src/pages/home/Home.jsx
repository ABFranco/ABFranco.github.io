import React from "react";
import SelfPic from "./../../assets/images/self_pic.png";
import "./home.css";

const Home = () => {
  return (
    <div className="home-container">
      <div className="home-text">
        <h1>Hello! I'm Antonio Franco. 👋🏽</h1>
        <h2>Software Engineer and Running Enthusiast.</h2>
      </div>
      <div className="home-img">
        <img id="self-pic" src={SelfPic} width="250px" />
      </div>
    </div>
  );
};

export default Home;
