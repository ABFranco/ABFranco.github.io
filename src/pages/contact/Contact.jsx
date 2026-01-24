import React, { useState, useEffect } from "react";
import { Typography, Link } from "@mui/material";
import { Fade } from "@mui/material";
import "./contact.css";
import PropTypes from "prop-types";

const Contact = ({ contactIsVisible }) => {
  Contact.propTypes = {
    contactIsVisible: PropTypes.bool,
  };

  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    setIsVisible(contactIsVisible);
  }, [contactIsVisible]);

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
    <Fade in={isVisible} timeout={500}>
      <div className="contact-container">
        <div className="contact-text">
          <Typography variant="h3">
            The best way to reach me is via{" "}
            {websiteLink("LinkedIn", "https://www.linkedin.com/in/abfranco/")}!
          </Typography>
        </div>
      </div>
    </Fade>
  );
};

export default Contact;
