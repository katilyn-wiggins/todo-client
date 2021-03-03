import React, { Component } from 'react';

export default class todo extends Component {
  state = {
    user: this.props.user
  };

  // handleNewTodo = async (e) => {
  //   e.preventDefault();

  //   const user = await createTodo(this.state.email, this.state.password);
  //   console.log(user);

  //   this.props.handleUserChange(user);

  //   this.props.history.push('/todos');
  //   console.log('submit was pushed');
  // };

  render() {
    return (
      <div>
        {JSON.stringify(this.props.user)}
        <form onSubmit={this.handleNewTodo}>
          <label>Add a to-do</label>
          <input value={this.setState.todo}></input>
          <button>Add</button>
        </form>
      </div>
    );
  }
}
