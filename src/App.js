import React, { Component } from 'react';
import Navbar from './navigation/Navbar';
import Menu from './navigation/Menu';
import './App.css';
import SmashList from './display/SmashList';

class App extends Component {

  render() {
    return (
      <div className="App">
        <Navbar />
        <div className="container">
          <div className="row">
            <div className="col-2">
              <Menu/>
            </div>
            <div className="col-10">
              <SmashList />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
