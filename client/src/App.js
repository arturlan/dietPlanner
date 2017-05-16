import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <button className="login" onClick={this.handleChange}>Search</button>
      </div>
    );
  }
}

export default App;
