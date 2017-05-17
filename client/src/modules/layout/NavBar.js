import React from 'react';
import { Menu } from 'semantic-ui-react';
import logo from '../../logo.jpg';
import './style.css';

const NavBar = () => (
  <Menu>
    <Menu.Menu>
      <Menu.Item>
        DIET PLANNER <img src={logo} alt="logo" className="NavBar-logo"/>
      </Menu.Item>
    </Menu.Menu>
    <Menu.Menu position="right">
      <Menu.Item>
        Login
      </Menu.Item>
      <Menu.Item>
        Sign Up
      </Menu.Item>
    </Menu.Menu>
  </Menu>
);

export default NavBar;
