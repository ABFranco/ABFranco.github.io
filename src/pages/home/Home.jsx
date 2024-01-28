import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faGithub,
  faStrava,
} from "@fortawesome/free-brands-svg-icons";
import SelfPic from "./../../assets/images/self_pic.jpg";
import "./home.css";
import { Typography } from "@mui/material";

const Home = () => {
  return (
    <div className="home-container">
      <div className="home-top-content">
        <div className="home-text">
          <Typography variant="h1">Hello! I'm Antonio. 👋🏽</Typography>
          <Typography variant="h3">Full Stack Software Engineer</Typography>
        </div>
        <div className="home-img">
          <img id="self-pic" src={SelfPic} width="250px" />
        </div>
      </div>

      <div className="home-icons">
        <a
          href="https://www.linkedin.com/in/abfranco/"
          target="_blank"
          rel="noopener noreferrer"
          className="social-button linkedin"
        >
          <FontAwesomeIcon icon={faLinkedin} />
        </a>
        <a
          href="https://github.com/ABFranco"
          target="_blank"
          rel="noopener noreferrer"
          className="social-button github"
        >
          <FontAwesomeIcon icon={faGithub} />
        </a>
        <a
          href="https://www.strava.com/athletes/antoniofranco"
          target="_blank"
          rel="noopener noreferrer"
          className="social-button strava"
        >
          <FontAwesomeIcon icon={faStrava} />
        </a>
      </div>
    </div>
  );
};

export default Home;
