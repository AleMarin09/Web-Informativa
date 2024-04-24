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
      <NavBar/>
      <Home/>
      <Services/>
      <HowWeWork/>
      <Benefits/>
      <Conctact/>
    </div>
  );
}

export default App;
