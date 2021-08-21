import logo from './logo.svg';
import './App.css';
import {useState} from "react";
import Secured from "./components/Secured";
import NotSecured from "./components/NotSecured";
import Securing from "./components/Securing";
import {securedStates} from "./states";

const App = () => {
  const [securedState, setSecuredState] = useState(securedStates.NOT_SECURED)

  const getCurrentState = (currentState) => {
    const states = [
      <NotSecured setSecuredState={setSecuredState} />,
      <Securing setSecuredState={setSecuredState} />,
      <Secured />
    ]
    return states[currentState];
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo"/>
        {getCurrentState(securedState)}
      </header>
    </div>
  );
}

export default App;
