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

const NavigationBar = ({ handleNavigation }) => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const isMobile = useMediaQuery("(max-width:800px)"); // screen size breakpoint for mobile

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const menuItems = [
    { text: "About", link: "/about" },
    { text: "Contact", link: "/contact" },
    { text: "Resume", link: "/resume", filePath: "/resume.pdf" },
  ];

  const navigationClick = (link) => {
    handleNavigation(link);
  };

  const mobileDrawer = (
    <List>
      {menuItems.map((item, index) => (
        <ListItem key={index}>
          {item.link === "/resume" ? (
            <a href={item.filePath} target="_blank" rel="noopener noreferrer">
              <ListItemText className="nav-bar-item" primary={item.text} />
            </a>
          ) : (
            <ListItemText
              className="nav-bar-item"
              primary={item.text}
              onClick={() => navigationClick(item.link)}
            />
          )}
        </ListItem>
      ))}
    </List>
  );

  const navigationButtons = menuItems.map((item, index) => (
    <div key={index} style={{ textDecoration: "none", color: "inherit" }}>
      {item.link === "/resume" ? (
        <a href={item.filePath} target="_blank" rel="noopener noreferrer">
          <ListItemText className="nav-bar-item" primary={item.text} />
        </a>
      ) : (
        <ListItemText
          className="nav-bar-item"
          primary={item.text}
          onClick={() => navigationClick(item.link)}
        />
      )}
    </div>
  ));

  return (
    <div className="navigation-bar">
      <AppBar className="nav-bar" position="fixed">
        <div
          className="nav-bar-name"
          style={{ textDecoration: "none", color: "inherit" }}
        >
          <ListItemText
            className="nav-bar-item"
            primary={"Antonio Franco"}
            onClick={() => navigationClick("/")}
          />
        </div>
        <Toolbar style={{ padding: 0, minHeight: "40px" }}>
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
            {mobileDrawer}
          </Drawer>
        )}
      </nav>
    </div>
  );
};

export default NavigationBar;
