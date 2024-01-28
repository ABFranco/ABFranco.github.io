import React, { useState } from "react";
import AboutWindow from "../../components/aboutWindow/AboutWindow";
import "./about.css";
import { Grow } from "@mui/material";

const About = () => {

  const [isVisible, setIsVisible] = useState(true);

  // TODO: handle exit to do transition
  const handleExit = () => {
    setIsVisible(false);
  };

  return (
    <Grow 
      in={isVisible} 
      timeout={500}
      style={{ transformOrigin: '0 0 0' }}
      unmountOnExit
      onExited={handleExit}
    >
      <div className="about-container">
        <AboutWindow />
      </div>
    </Grow>
    
  );
};

export default About;
