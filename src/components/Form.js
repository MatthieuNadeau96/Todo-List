import React, { Component } from 'react';

class Form extends Component {

  render() {
    return (
      <div>
        <form onSubmit={(evt) => this.props.handleSubmit(evt)} className="Form">
          <input
            onChange={(e) => this.props.handleChange(e)}
            value={this.props.inputValue}
            placeholder="What do you need to do?"
          />
        </form>
      </div>
    );
  }

}

export default Form;
