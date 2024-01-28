import * as React from "react";
import Typography from "@mui/material/Typography";

const Footer = () => {
  return (
    <footer>
      <Typography variant="body2">
      © {new Date().getFullYear()} Antonio Franco
      </Typography>
    </footer>
  );
};

export default Footer;
