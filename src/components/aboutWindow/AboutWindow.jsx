import React from "react";
import "./aboutWindow.css";
import { Typography, Link } from "@mui/material";

const AboutWindow = () => {

  const websiteLink = (text, url) => (
    <Link
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      underline="none"
      color="inherit"
      fontWeight="600"
    >
      {text}
    </Link>
  );

  return (
    <div className="about-window">
      <div className="window-bar">
        <div className="dot red"></div>
        <div className="dot amber"></div>
        <div className="dot green"></div>
      </div>

      <div className="about-content">
        <Typography variant="body1">
          My name is Antonio, and I am currently a Software Engineer at {websiteLink("Hall Capital Partners", "https://www.hallcapital.com/")}. Previously, I worked at {websiteLink("Inductive Automation", "https://inductiveautomation.com/")} and {websiteLink("CITRIS @ UC Berkeley", "https://citris-uc.org/")}. My academic background includes studying {websiteLink("Computer Science in UC Berkeley's", "https://eecs.berkeley.edu/")} Engineering department.
        </Typography>
        <Typography variant="body1">
          I am passionate for programming and building innovative solutions. My career aspirations mainly include web development, software engineering, and UX design. I aim for continuous personal growth, driven by the desire to learn new technologies and best practices in the ever-evolving landscape of the tech industry.
        </Typography>
        <Typography variant="body1">
          On my free time, I love to run. I'm often training for an upcoming marathon, or looking for the next running shoe I should buy! 😅
        </Typography>
      </div>
  </div>
  );
};

export default AboutWindow;
