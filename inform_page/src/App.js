import logo from './logo.svg';
//import './App.css';
import Home from "./Screens/Home";
import Benefits from "./Screens/Benefits";
import Conctact from "./Screens/Conctact";
import Services from "./Screens/Services";
import HowWeWork from "./Screens/HowWeWork";
import NavBar from './Components/NavBar';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
          Yo el dios todo poderoso SMITH
        </a>
        GHOST JOHAN
      </header>

      <NavBar/>
      <Home/>
      <Benefits/>
      <Conctact/>
      <Services/>
      <HowWeWork/>
    </div>
  );
}

export default App;
