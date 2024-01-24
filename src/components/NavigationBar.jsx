import React, { useState } from 'react';
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Hidden from '@mui/material/Hidden';
import { useMediaQuery } from '@mui/material';

const NavigationBar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const isMobile = useMediaQuery('(max-width:800px)'); // Adjust the breakpoint as needed

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const menuItems = [
    { text: 'Home', link: '/' },
    { text: 'About', link: '/about' },
    { text: 'Projects', link: '/projects' },
    { text: 'Contact', link: '/contact' },
    // Add more menu items as needed
  ];

  const drawer = (
    <List>
      {menuItems.map((item, index) => (
        <ListItem button key={index}>
          <ListItemText primary={item.text} />
        </ListItem>
      ))}
    </List>
  );

  return (
    <div>
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
              <ListItemText className="nav-bar-item" primary={item.text} key={index} />
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
    // <Box sx={{ flexGrow: 1 }}>
    //   <AppBar position="static">
    //     <Toolbar>
    //       <IconButton
    //         size="large"
    //         edge="start"
    //         color="inherit"
    //         aria-label="menu"
    //         sx={{ mr: 2 }}
    //       >
    //         <MenuIcon />
    //       </IconButton>
    //       <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
    //         Antonio Franco
    //       </Typography>
    //       <Button color="inherit">Home</Button>
    //       <Button color="inherit">Running</Button>
    //     </Toolbar>
    //   </AppBar>
    // </Box>
  );
};

export default NavigationBar;
