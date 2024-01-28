import "./App.css";
import { ThemeProvider } from "@mui/material/styles";
import Home from "./pages/home/Home.jsx";
import About from "./components/About/About.jsx";
import NavigationBar from "./components/NavigationBar";
import Footer from "./components/Footer";
import theme from "./theme/theme.js";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <header>
          <NavigationBar />
        </header>
        <main>
          <Home />
          <About />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
};

export default App;
