/**
 * @file Button.component.js
 * Creates button component.
 */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './Button.css';
import globalStyles from '../../00_global/global.css';

function ifHidden(hidden, title) {
  if (hidden) {
    return <span className={globalStyles.hidden}>{title}</span>;
  }
  return { title };
}

class Button extends Component {
  constructor(props) {
    super(props);
    // This binding is necessary to make `this` work in the callback
    this.toggleChange = this.toggleChange.bind(this);
  }
  toggleChange() {
    this.props.toggled(!this.props.toggled);
  }
  render() {
    const {
      button,
      hidden,
      title,
      url,
      className,
      ariaHaspopup,
      ariaExpanded,
      toggled
    } = this.props;
    if (button === false) {
      return (
        <a href={url} className={styles[className]} onClick={this.toggleChange}>
          <span className="text-label">{title}</span>
        </a>
      );
    }

    return (
      <button
        type="button"
        className={styles[className]}
        data-toggle={toggled ? 'toggled' : null}
        aria-haspopup={ariaHaspopup}
        aria-expanded={ariaExpanded}
        onClick={this.toggleChange}
      >
        {ifHidden(hidden, title)}
      </button>
    );
  }
}

Button.propTypes = {
  button: PropTypes.bool,
  hidden: PropTypes.bool.isRequired,
  toggled: PropTypes.func,
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
  ariaHaspopup: PropTypes.bool,
  ariaExpanded: PropTypes.bool
};

Button.defaultProps = {
  button: false,
  ariaHaspopup: false,
  ariaExpanded: false,
  toggled: () => {}
};

export default Button;
