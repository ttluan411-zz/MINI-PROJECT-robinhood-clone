import React, { Component } from 'react';
import Nav from './Components/Nav';
import Home from './Components/Home';
import Demo from './Components/Demo';
import './reset.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav />
        <Home />
        <Demo />
      </div>
    );
  }
}

export default App;
