import React, { Component } from 'react';


class Task extends Component {

  render() {
    return (
      <div
        onClick={() => this.props.handleDelete(this.props.index)}
        className="Task">
        <span>
          {this.props.todo.value}
        </span>
      </div>
    );
  }
}

export default Task;
