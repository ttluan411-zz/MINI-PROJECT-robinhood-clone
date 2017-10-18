import React, { Component } from 'react';
import Nav from './Components/Nav';
import Home from './Components/Home';
import Demo from './Components/Demo';
import Protection from './Components/Protection';
import Realtime from './Components/Realtime';
import Team from './Components/Team';
import Footer from './Components/Footer';



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
        <Footer />
      </div>
    );
  }
}

export default App;
