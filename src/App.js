import logo from './logo.svg';
import './App.css';
import Home from './pages/Home';
import NavigationBar from './components/NavigationBar';

// const Home = () => {
//   return (
//     <div>
//       <h1>Welcome to the Home Page</h1>
//       <p>This is your home page content.</p>
//     </div>
//   );
// };

const App = () => {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hello Antonio! The website is up and working.
        </p>
      </header> */}
      <header>
        <NavigationBar />
      </header>
      <main>
        <Home />
      </main>
      <footer>
        <p>© 2023 My React App</p>
      </footer>
    </div>
  );
}

export default App;
