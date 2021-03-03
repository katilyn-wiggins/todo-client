import React, { Component } from 'react';
import { loginUser } from '../Api-Utils/apiutils.js';

export default class login extends Component {
  state = {
    email: '',
    password: ''
  };

  handleEmailChange = (e) => this.setState({ email: e.target.value });
  handlePasswordChange = (e) => this.setState({ password: e.target.value });

  handleSubmit = async (e) => {
    e.preventDefault();

    const user = await loginUser(this.state.email, this.state.password);
    console.log(user);

    this.props.handleUserChange(user);

    this.props.history.push('/todos');
    console.log('submit was pushed');
  };
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>E-mail</label>
          <input
            value={this.state.email}
            onChange={this.handleEmailChange}
            type="email"
            placeholder="e-mail"
          ></input>
          <label>Password</label>
          <input
            value={this.state.password}
            onChange={this.handlePasswordChange}
            type="password"
            placeholder="password"
          ></input>
          <button>Sign Up</button>
        </form>
      </div>
    );
  }
}
