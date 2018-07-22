import React, { Component } from 'react';
import '../App.css';

import Form from './Form';
import List from './List';

class App extends Component {

  state = {
    inputValue: '',
    todos: []
  }

  handleChange = (e) => {
    this.setState({ inputValue: e.target.value });
  }

  handleSubmit = (evt) => {
    evt.preventDefault();
    const inputValue = this.state.inputValue;
    if (inputValue === '' || inputValue === ' ') {
      return
    }

    const newTodo = {
      value: this.state.inputValue,
      done: false
    };

    const todos = this.state.todos
    todos.push(newTodo);
    this.setState({ inputValue: '', todos});
  }

  handleDelete = (index) => {
    const todos = this.state.todos
    todos.splice(index, 1)

    this.setState({ todos });
  }

  render() {
    return (
      <div className="App">
        <Form
          handleChange={this.handleChange}
          inputValue={this.state.inputValue}
          handleSubmit={this.handleSubmit}
        />
        <List
          handleDelete={this.handleDelete}
          todos={this.state.todos}
        />
      </div>
    );
  }
}

export default App;
