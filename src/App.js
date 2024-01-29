import React, { useState, useEffect } from "react";
import "./App.css";
import { ThemeProvider } from "@mui/material/styles";
import { BrowserRouter as Router, Route, Routes, useLocation  } from "react-router-dom";
import Home from "./pages/home/Home.jsx";
import About from "./pages/about/About.jsx";
import NavigationBar from "./components/navigationBar/NavigationBar.jsx";
import PageSelector from "./pages/pageSelector/PageSelector.jsx";
import Footer from "./components/footer/Footer.jsx";
import theme from "./theme/theme.js";

const App = () => {
  // const location = useLocation();
  // const [homeIsVisible, setHomeIsVisible] = useState(false);
  // const [aboutIsVisible, setAboutIsVisible] = useState(false);

  // useEffect(() => {
  //   // check which page upon initial load
  //   console.log("initial location: %o", location)
  // }, [location]);

  // const handlePageSwitch = (currentPage, newPage) => {
  //   switch (currentPage) {
  //     case "/about":
  //       setAboutIsVisible(false);
  //       break;
  //     default:
  //       setHomeIsVisible(false);
  //   }

  //   switch (newPage) {
  //     case "/about":
  //       setAboutIsVisible(true);
  //       break;
  //     default:
  //       setHomeIsVisible(true);
  //   }
  // };

  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Router>
          <PageSelector />
          <Footer />
        </Router>
      </div>
    </ThemeProvider>
  );
};

export default App;
