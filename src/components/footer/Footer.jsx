import * as React from "react";
import Typography from "@mui/material/Typography";
import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <Typography variant="body2">
      © {new Date().getFullYear()} Antonio Franco
      </Typography>
    </footer>
  );
};

export default Footer;
