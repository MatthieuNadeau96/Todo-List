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
    // console.log('inputValue: ' + inputValue)
  }

  handleDelete = (index) => {
    const todos = this.state.todos
    todos.splice(index, 1)

    this.setState({ todos });
  }

  //// TODO: Button is being pressed but it's inside the handleClick div element

  render() {
    return (
      <div className="App">
        <Form
          handleSubmit={this.handleSubmit}
          handleChange={this.handleChange}
          value={this.state.inputValue}
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
