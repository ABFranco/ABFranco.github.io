import React from "react";
import SelfPic from "./../assets/images/self_pic.png";

const Home = () => {
  return (
    <div>
      <h1>Hello! I'm Antonio Franco. 👋🏽</h1>
      <h2>Software Engineer and Running Enthusiast.</h2>
      <img id="self-pic" src={SelfPic} width="250px" />
    </div>
  );
};

export default Home;
