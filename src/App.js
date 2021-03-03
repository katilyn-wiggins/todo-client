import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// import request from 'superagent';
import './App.css';
import Home from './Home/home.js';
import Login from './Login/login.js';
import Signup from './Login/signup.js';
import Todos from './Todo/todo.js';
import Header from './Components/header.js';
import {
  getUserFromLocalStorage,
  putUserInLocalStorage
} from './local-storage-utils.js';
import PrivateRoute from './Components/private-route.js';

export default class App extends React.Component {
  state = {
    user: getUserFromLocalStorage()
  };

  handleUserChange = (user) => {
    this.setState({ user });

    putUserInLocalStorage(user);
  };

  handleUserLogout = () => {
    this.handleUserChange();
  };

  render() {
    return (
      <div>
        <Router>
          <Header handleUserLogout={this.handleUserLogout} />
          <Switch>
            <Route
              path="/"
              exact
              render={(routerProps) => <Home {...routerProps} />}
            />
            <Route
              path="/login"
              exact
              render={(routerProps) => (
                <Login
                  handleUserChange={this.handleUserChange}
                  {...routerProps}
                />
              )}
            />
            <Route
              path="/signup"
              exact
              render={(routerProps) => (
                <Signup
                  handleUserChange={this.handleUserChange}
                  {...routerProps}
                />
              )}
            />
            <PrivateRoute
              path="/todos"
              exact
              token={this.state.user && this.state.user.token}
              render={(routerProps) => (
                <Todos user={this.state.user} {...routerProps} />
              )}
            />
          </Switch>
        </Router>
        <footer></footer>
      </div>
    );
  }
}
