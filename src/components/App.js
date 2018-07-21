import React, { Component } from 'react';
import '../App.css';

import Form from './Form';
import List from './List';

class App extends Component {

  state = {
    inputValue: '',
    todos: [
      {value: 'Do this', done: false},
      {value: 'Do that', done: true}
    ]
  }

  handleChange = (e) => {
    this.setState({
      inputValue: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const newTodo = {
      value: this.state.inputValue,
      done: false
    };

    const todos = this.state.todos
    todos.push(newTodo);

    this.setState({ todos, inputValue: '' })

  }

  handleClick = (index) => {
    const todos = this.state.todos;
    todos[index].done = !todos[index].done;
    this.setState({ todos, inputValue: '' })
  }

  handleDelete = (index) => {
    const todos = this.state.todos
    todos.splice(index, 1)
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
          handleClick={this.handleClick}
          handleDelete={this.handleDelete}
          todos={this.state.todos}
        />
      </div>
    );
  }
}

export default App;
