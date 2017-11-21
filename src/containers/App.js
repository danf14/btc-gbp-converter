import React, { Component } from 'react';
import MainGrid from '../components/MainGrid';
import Coindesk from '../components/Coindesk';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">       
        <MainGrid />
        <Coindesk />
      </div>
    );
  }
}

export default App;
