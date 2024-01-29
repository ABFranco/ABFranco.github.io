import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import Home from "../home/Home.jsx";
import About from "../about/About.jsx";
import NavigationBar from "../../components/navigationBar/NavigationBar.jsx";

const PageSelector = () => {
  const location = useLocation();
  const [homeIsVisible, setHomeIsVisible] = useState(false);
  const [aboutIsVisible, setAboutIsVisible] = useState(false);

  // check which page to display upon initial load
  useEffect(() => {
    switch (location?.pathname) {
      case "/about":
        setAboutIsVisible(true);
        break;
      default:
        setHomeIsVisible(true);
    }
  }, [location]);

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
    <>
      <header>
        <NavigationBar location={location} handlePageSwitch={handlePageSwitch} />
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Home homeIsVisible={homeIsVisible} />} />
          <Route
            path="/about"
            element={<About aboutIsVisible={aboutIsVisible} />}
          />
        </Routes>
      </main>
    </>
  );
};

export default PageSelector;
