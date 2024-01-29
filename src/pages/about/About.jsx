import React, { useState, useEffect } from "react";
import AboutWindow from "../../components/aboutWindow/AboutWindow";
import "./about.css";
import { Grow } from "@mui/material";

const About = ({aboutIsVisible}) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    if (!aboutIsVisible) {
      console.log("About useEffect called to set to false")
      setIsVisible(false);
    }
  }, [aboutIsVisible]);

  return (
    <Grow 
      in={isVisible} 
      timeout={500}
      style={{ transformOrigin: '0 0 0' }}
    >
      <div className="about-container">
        <AboutWindow />
      </div>
    </Grow>
    
  );
};

export default About;
