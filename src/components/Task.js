import React, { Component } from 'react';

class Task extends Component {

  render() {
    return (
      <div
        onClick={() => this.props.handleClick(this.props.index)}
        className="Task">
        <span style={{textDecoration: this.props.todo.done ? 'line-through' : 'none'}}>{this.props.todo.value}</span>
        {this.props.todo.done ? <button onClick={() => this.props.handleDelete(this.props.index)}>X</button> : null}
      </div>
    );
  }

}

export default Task;
