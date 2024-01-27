import "./App.css";
import Home from "./pages/home/Home.jsx";
import About from "./components/About/About.jsx";
import NavigationBar from "./components/NavigationBar";
import Footer from "./components/Footer";

const App = () => {
  return (
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
  );
};

export default App;
