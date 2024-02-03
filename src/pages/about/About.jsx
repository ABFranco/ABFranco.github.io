import React, { useState, useEffect } from "react";
import AboutWindow from "../../components/aboutWindow/AboutWindow";
import "./about.css";
import { Grow } from "@mui/material";

const About = ({aboutIsVisible, handleNavigation}) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    setIsVisible(aboutIsVisible);
  }, [aboutIsVisible]);

  return (
    <Grow 
      in={isVisible} 
      timeout={500}
      style={{ transformOrigin: '0 0 0' }}
    >
      <div className="about-container">
        <AboutWindow handleNavigation={handleNavigation}/>
      </div>
    </Grow>
    
  );
};

export default About;
