import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

export default class header extends Component {
  render() {
    return (
      <div>
        <NavLink to="/">ho-me</NavLink>
        {this.props.user && this.props.user.token && (
          <>
            <NavLink to="/todos">to-do</NavLink>
            <button onClick={this.props.handleLogout}>sign-out</button>
          </>
        )}
        {(!this.props.user || this.props.user.token) && (
          <>
            <NavLink to="/login">log-in</NavLink>
            <NavLink to="/signup">sign-up</NavLink>
          </>
        )}
      </div>
    );
  }
}
