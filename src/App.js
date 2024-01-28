import "./App.css";
import { ThemeProvider } from "@mui/material/styles";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from "./pages/home/Home.jsx";
import About from "./pages/about/About.jsx";
import NavigationBar from "./components/NavigationBar";
import Footer from "./components/Footer";
import theme from "./theme/theme.js";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Router>
          <header>
            <NavigationBar />
          </header>
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
            </Routes>
          </main>
          <Footer />
        </Router>
      </div>
    </ThemeProvider>
  );
};

export default App;
