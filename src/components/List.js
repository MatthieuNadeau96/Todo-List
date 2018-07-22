import React, { Component } from 'react';

import Task from './Task';
import FlipMove from 'react-flip-move';

class List extends Component {

  render() {
    return (
      <div className="List">
        <FlipMove typeName={null} duration={150} easing="ease-out">
          {this.props.todos.map((todo, index) => {
            return (
              <Task
                key={index}
                todo={todo}
                index={index}
                handleDelete={this.props.handleDelete}
              />
            )
          })}
        </FlipMove>
      </div>
    );
  }

}

export default List;
