import React from "react";
import "./aboutWindow.css";
import { Typography } from "@mui/material";

const AboutWindow = () => {
  return (
    <div class="about-window">
      <div class="window-bar">
        <div class="dot red"></div>
        <div class="dot amber"></div>
        <div class="dot green"></div>
      </div>

      <div class="about-content">
        <Typography variant="body1">
          My name is Antonio, and I am currently a Software Engineer at Hall Capital Partners. Previously, I worked at Inductive Automation and CITRIS @ UC Berkeley. I studied Computer Science in UC Berkeley’s Engineering department.
        </Typography>
        <Typography variant="body1">
          I am passionate for programming and building things. My career goals mainly include web development, software engineering, and UX design. I aim for personal growth every day and I hope to learn new technologies and practices in the rapidly changing world of tech.
        </Typography>
      </div>
  </div>
  );
};

export default AboutWindow;
