import React, { useState, useEffect } from "react";
import { Typography } from "@mui/material";
import { Fade } from "@mui/material";
import "./contact.css";

const Contact = ({ contactIsVisible }) => {
  const [isVisible, setIsVisible] = useState(true);
  const email = "abfranco@berkeley.edu";

  useEffect(() => {
    setIsVisible(contactIsVisible);
  }, [contactIsVisible]);

  const handleEmailClick = () => {
    window.location.href = `mailto:${email}`;
  };

  return (
    <Fade in={isVisible} timeout={500}>
      <div className="contact-container">
        <div className="contact-text">
          <Typography variant="h3">
            The best way to reach me is to email me at:
          </Typography>
          <Typography
            className="email-text"
            variant="h3"
            onClick={handleEmailClick}
          >
            {email}
          </Typography>
        </div>
      </div>
    </Fade>
  );
};

export default Contact;
