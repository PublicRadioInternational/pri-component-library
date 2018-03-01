import React, { Component } from 'react';
import './Button.css';

class Button extends Component {
  constructor(props) {
    super(props);
    this.state = { clicked: false };

    // This binding is necessary to make `this` work in the callback
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(prevState => ({
      clicked: !prevState.clicked
    }));
  }

  render() {
    const isClicked = this.state.clicked;
    return (
      <button className="button" onClick={this.handleClick}>
        {isClicked ? 'Toggled' : 'Untoggled'}
      </button>
    );
  }
}

export default Button;
