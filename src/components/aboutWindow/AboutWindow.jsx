import React from "react";
import "./aboutWindow.css";
import { Typography } from "@mui/material";

const AboutWindow = () => {
  return (
    <div className="about-window">
      <div className="window-bar">
        <div className="dot red"></div>
        <div className="dot amber"></div>
        <div className="dot green"></div>
      </div>

      <div className="about-content">
        <Typography variant="body1">
          My name is Antonio, and I am currently a Software Engineer at Hall Capital Partners. Previously, I worked at Inductive Automation and CITRIS @ UC Berkeley. My academic background includes studying Computer Science in UC Berkeley's Engineering department.
        </Typography>
        <Typography variant="body1">
          I am passionate for programming and building innovative solutions. My career aspirations mainly include web development, software engineering, and UX design. I aim for continuous personal growth, driven by the desire to learn and adapt to new technologies and best practices in the ever-evolving landscape of the tech industry.
        </Typography>
        <Typography variant="body1">
          On my free time, I love to run. I'm often training for an upcoming marathon, or looking for the next running shoe I should buy! 😅
        </Typography>
      </div>
  </div>
  );
};

export default AboutWindow;
