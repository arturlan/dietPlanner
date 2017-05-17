import React from 'react';
import ReactDOM from 'react-dom';
// import App from './App';
import './index.css';
import '../semantic/dist/semantic.min.css';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import Routes from './Routes';


ReactDOM.render(
  <Provider store={store}>
    <Routes />
  </Provider>,
  document.getElementById('root')
);
