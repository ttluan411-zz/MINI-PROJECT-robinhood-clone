import React, { Component } from 'react';
import Nav from './Components/Nav';
import Home from './Components/Home';
import Demo from './Components/Demo';
import Protection from './Components/Protection';
import Realtime from './Components/Realtime';
import Team from './Components/Team';


import './reset.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav />
        <Home />
        <Demo />
        <Protection />
        <Realtime />
        <Team />
      </div>
    );
  }
}

export default App;
