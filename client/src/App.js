import React, { Component } from 'react';
import './App.css';
import { PropTypes } from 'prop-types';
import { NavBar } from './modules/';

class App extends Component {

  render() {

    const { location, children } = this.props;

    return (
      <div className='App'>
        <NavBar path={location.pathname}/>
        {children}
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.element.isRequired,
  location: PropTypes.object.isRequired
}

export default App;
