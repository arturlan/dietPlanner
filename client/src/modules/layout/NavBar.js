import React, { Component } from 'react';
import { PropTypes } from 'prop-types'; 
import { Menu } from 'semantic-ui-react';
import logo from '../../logo.jpg';
import './style.css';
import { browserHistory } from 'react-router';

class NavBar extends Component {
  render() {

    const { path } = this.props;

    return (
  <Menu inverted>
    <Menu.Menu>
      <Menu.Item onClick={() =>  browserHistory.push('/')}>
        <img src={logo} alt="logo" className="NavBar-logo"/>
      </Menu.Item>
    </Menu.Menu>
    <Menu.Menu position="right">
      <Menu.Item active={path === '/login'} onClick={() =>  browserHistory.push('/login')}>
        Login
      </Menu.Item>
      <Menu.Item active={path === '/signup'} onClick={() =>  browserHistory.push('/signup')}>
        Sign Up
      </Menu.Item>
    </Menu.Menu>
  </Menu>
    )
  }
}

NavBar.propTypes = {
  path: PropTypes.string.isRequired
}

export default NavBar;
