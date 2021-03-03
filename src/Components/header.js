import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

export default class header extends Component {
  render() {
    return (
      <div>
        <NavLink to="/">ho-me</NavLink>
        <NavLink to="/login">log-in</NavLink>
        <NavLink to="/signup">sign-up</NavLink>
        <NavLink to="/todos">to-do</NavLink>
        <button>sign-out</button>
      </div>
    );
  }
}
