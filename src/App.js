import "./App.css";
import Home from "./pages/Home";
import NavigationBar from "./components/NavigationBar";

const App = () => {
  return (
    <div className="App">
      <header>
        <NavigationBar />
      </header>
      <main>
        <Home />
      </main>
      <footer>
        <p>© {new Date().getFullYear()} Antonio Franco</p>
      </footer>
    </div>
  );
};

export default App;
