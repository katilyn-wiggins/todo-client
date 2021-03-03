import React, { Component } from 'react';
import { getTodo, createTodo, completeTodo } from '../Api-Utils/apiutils.js';
import '../App.css';

export default class todo extends Component {
  state = {
    todos: [],
    todo: ''
  };

  componentDidMount = async () => {
    await this.fetchNewTodos();
  };

  fetchNewTodos = async () => {
    const todos = await getTodo(this.props.user.token);

    this.setState({ todos });
  };

  handleSubmit = async (e) => {
    e.preventDefault();

    await createTodo(this.state.todo, this.props.user.token);

    await this.fetchNewTodos();

    this.setState({ todo: '' });
  };

  handleNewTodo = (e) => this.setState({ todo: e.target.value });

  handleCompleteTodo = async (todoId) => {
    await completeTodo(todoId, this.props.user.token);

    this.fetchNewTodos();
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>Add a to-do</label>
          <input value={this.state.todo} onChange={this.handleNewTodo} />
          <button>Add</button>
        </form>

        {!this.state.todos.length && <p>You're all caught up!</p>}

        {this.state.todos.map((todo) => (
          <p
            key={`${todo.todo}-${todo.id}`}
            onClick={() => this.handleCompleteTodo(todo.id)}
            className={`todos ${todo.completed ? 'completed' : ''}`}
          >
            {todo.todo}
          </p>
        ))}
      </div>
    );
  }
}
