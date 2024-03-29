import React, { useState, useEffect } from "react";
import AboutWindow from "../../components/aboutWindow/AboutWindow";
import "./about.css";
import { Grow } from "@mui/material";
import PropTypes from "prop-types";

const About = ({ aboutIsVisible, handleNavigation }) => {
  About.propTypes = {
    handleNavigation: PropTypes.func,
    aboutIsVisible: PropTypes.bool,
  };

  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    setIsVisible(aboutIsVisible);
  }, [aboutIsVisible]);

  return (
    <Grow in={isVisible} timeout={500} style={{ transformOrigin: "0 0 0" }}>
      <div className="about-container">
        <AboutWindow handleNavigation={handleNavigation} />
      </div>
    </Grow>
  );
};

export default About;
