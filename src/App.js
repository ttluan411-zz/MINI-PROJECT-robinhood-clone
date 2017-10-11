import React, { Component } from 'react';
import Nav from './Components/Nav';
import Home from './Components/Home';
import Demo from './Components/Demo';
import Protection from './Components/Protection';

import './reset.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav />
        <Home />
        <Demo />
        <Protection />
      </div>
    );
  }
}

export default App;
