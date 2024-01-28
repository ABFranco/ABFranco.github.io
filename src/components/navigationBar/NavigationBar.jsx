import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import { useMediaQuery } from '@mui/material';
import "./navigationBar.css";


const NavigationBar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const isMobile = useMediaQuery('(max-width:800px)'); // screen size breakpoint for mobile
  const navigate = useNavigate();

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const menuItems = [
    { text: 'Home', link: '/' },
    { text: 'About', link: '/about' },
    { text: 'Projects', link: '/projects' },
    { text: 'Contact', link: '/contact' },
  ];

  const drawer = (
    <List>
      {menuItems.map((item, index) => (
        <ListItem button key={index} onClick={() => navigate(item.link)}>
          <ListItemText primary={item.text} />
        </ListItem>
      ))}
    </List>
  );

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
          {!isMobile && (
            // Display text buttons for larger screens
            menuItems.map((item, index) => (
              <Link to={item.link} key={index} style={{ textDecoration: 'none', color: 'inherit' }}>
                <ListItemText className="nav-bar-item" primary={item.text} />
              </Link>
            ))
          )}
        </Toolbar>
      </AppBar>
      <nav>
        {/* Drawer for mobile screens */}
        {isMobile && (
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
