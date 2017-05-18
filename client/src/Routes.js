import React from 'react';
import { Router, Route } from 'react-router';
import { history } from './redux/store';
import App from './App';
import { Login, Signup, Food } from './modules';


export default () => (
  <Router history={history}>
    <Route path="/" component={App} >
      <Route path="/login" component={Login} />
      <Route path="/signup" component={Signup} />
      <Route path="/food" component={Food} />
    </Route>
  </Router>
)
