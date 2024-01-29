import React, { useState } from "react";
import "./App.css";
import { ThemeProvider } from "@mui/material/styles";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home.jsx";
import About from "./pages/about/About.jsx";
import NavigationBar from "./components/navigationBar/NavigationBar.jsx";
import Footer from "./components/footer/Footer.jsx";
import theme from "./theme/theme.js";

const App = () => {
  const [homeIsVisible, setHomeIsVisible] = useState(true);
  const [aboutIsVisible, setAboutIsVisible] = useState(false);

  const handlePageSwitch = (currentPage, newPage) => {
    switch (currentPage) {
      case "/about":
        setAboutIsVisible(false);
        break;
      default:
        setHomeIsVisible(false);
    }

    switch (newPage) {
      case "/about":
        setAboutIsVisible(true);
        break;
      default:
        setHomeIsVisible(true);
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Router>
          <header>
            <NavigationBar handlePageSwitch={handlePageSwitch} />
          </header>
          <main>
            <Routes>
              <Route
                path="/"
                element={<Home homeIsVisible={homeIsVisible} />}
              />
              <Route
                path="/about"
                element={<About aboutIsVisible={aboutIsVisible} />}
              />
            </Routes>
          </main>
          <Footer />
        </Router>
      </div>
    </ThemeProvider>
  );
};

export default App;
