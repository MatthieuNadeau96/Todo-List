import React, { Component } from 'react';

class Form extends Component {

  render() {
    return (
      <div>
        <form className="Form" onSubmit={(evt) => this.props.handleSubmit(evt)}>
          <input
            onChange={(e) => this.props.handleChange(e)}
            value={this.props.inputValue}
          />
        </form>
      </div>
    );
  }

}

export default Form;
