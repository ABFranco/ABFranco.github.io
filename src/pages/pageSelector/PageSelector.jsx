import React, { useState, useEffect } from "react";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import Home from "../home/Home.jsx";
import About from "../about/About.jsx";
import Contact from "../contact/Contact.jsx";
import NavigationBar from "../../components/navigationBar/NavigationBar.jsx";

const PageSelector = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [homeIsVisible, setHomeIsVisible] = useState(false);
  const [aboutIsVisible, setAboutIsVisible] = useState(false);
  const [contactIsVisible, setContactIsVisible] = useState(false);

  // check which page to display upon initial load
  useEffect(() => {
    switch (location?.pathname) {
      case "/about":
        setAboutIsVisible(true);
        break;
      case "/contact":
        setContactIsVisible(true);
        break;
      default:
        setHomeIsVisible(true);
    }
  }, [location]);

  const handleNavigation = (newPage) => {
    const currentPage = location?.pathname;
    if (newPage === currentPage) {
      return;
    }
    handlePageSwitch(currentPage, newPage);

    setTimeout(() => {
      // delay for exit transition before navigating to new page
      navigate(newPage);
    }, 500);
  };

  const handlePageSwitch = (currentPage, newPage) => {
    switch (currentPage) {
      case "/about":
        setAboutIsVisible(false);
        break;
      case "/contact":
        setContactIsVisible(false);
        break;
      default:
        setHomeIsVisible(false);
    }

    switch (newPage) {
      case "/about":
        setAboutIsVisible(true);
        break;
      case "/contact":
        setContactIsVisible(true);
        break;
      default:
        setHomeIsVisible(true);
    }
  };

  return (
    <>
      <header>
        <NavigationBar handleNavigation={handleNavigation} />
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Home homeIsVisible={homeIsVisible} />} />
          <Route
            path="/about"
            element={
              <About
                aboutIsVisible={aboutIsVisible}
                handleNavigation={handleNavigation}
              />
            }
          />
          <Route
            path="/contact"
            element={<Contact contactIsVisible={contactIsVisible} />}
          />
        </Routes>
      </main>
    </>
  );
};

export default PageSelector;
