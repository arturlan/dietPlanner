import React, { Component } from 'react';
import './App.css';
import { PropTypes } from 'prop-types';
import { NavBar } from './modules/';
// import { RouteHandler } from 'react-router';
// import $ from "jquery";

class App extends Component {
  //
  // componentWillMount() {
  //   $.ajax({
  //     method: "GET",
  //     url: "/auth/is_signed_in.json"
  //   })
  //   .done(function(data){
  //     this.setState({ signedIn: data.signed_in });
  //   }.bind(this));
  // }
  //
  // getInitialState() {
  //   return { signedIn: null };
  // }

  render() {

    const { location, children } = this.props;

    return (
      <div className='App'>
        {/* <RouteHandler signedIn={this.state.signedIn}/> */}
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
