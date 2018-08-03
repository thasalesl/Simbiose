import React from 'react';
import Cards from "./components/Cards"
import simbiose from './assets/img/simbiose.png';
import './App.css'
class App extends React.Component {
  render() {
    return (
      <div>
        <img className="simbiose" src={simbiose} alt="logo simbiose" />
        <Cards />
      </div>
    );
  }
}

export default App;