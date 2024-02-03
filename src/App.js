import React, { useState, useEffect } from "react";
import "./App.css";
import { ThemeProvider } from "@mui/material/styles";
import { BrowserRouter as Router, Route, Routes, useLocation  } from "react-router-dom";
import PageSelector from "./pages/pageSelector/PageSelector.jsx";
import Footer from "./components/footer/Footer.jsx";
import theme from "./theme/theme.js";

const App = () => {
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
