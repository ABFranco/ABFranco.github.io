import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import { useMediaQuery } from "@mui/material";
import "./navigationBar.css";

const NavigationBar = ({handleNavigation}) => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const isMobile = useMediaQuery("(max-width:800px)"); // screen size breakpoint for mobile

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const menuItems = [
    { text: "Home", link: "/" },
    { text: "About", link: "/about" },
    { text: "Projects", link: "/projects" },
    { text: "Contact", link: "/contact" },
  ];

  const drawer = (
    <List>
      {menuItems.map((item, index) => (
        <ListItem key={index} onClick={() => handleNavigation(item.link)}>
          <ListItemText primary={item.text} />
        </ListItem>
      ))}
    </List>
  );

  const navigationButtons = menuItems.map((item, index) => (
    <div
      // to={item.link}
      key={index}
      style={{ textDecoration: "none", color: "inherit" }}
      onClick={() => handleNavigation(item.link)}
    >
      <ListItemText className="nav-bar-item" primary={item.text} />
    </div>
  ));

  return (
    <div className="navigation-bar">
      <AppBar position="fixed">
        <Toolbar className="nav-bar">
          {isMobile && (
            <IconButton
              color="inherit"
              aria-label="Open drawer"
              edge="start"
              onClick={handleDrawerToggle}
            >
              <MenuIcon />
            </IconButton>
          )}
          {!isMobile &&
            // Display text buttons for larger screens
            navigationButtons}
        </Toolbar>
      </AppBar>
      <nav>
        {isMobile && (
          // Drawer for mobile screens
          <Drawer
            variant="temporary"
            anchor="left"
            open={mobileOpen}
            onClose={handleDrawerToggle}
          >
            {drawer}
          </Drawer>
        )}
      </nav>
    </div>
  );
};

export default NavigationBar;
