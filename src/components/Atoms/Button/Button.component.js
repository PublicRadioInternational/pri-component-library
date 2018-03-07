/**
 * @file Button.component.js
 * Creates button component.
 */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './Button.css';
import globalStyles from '../../00_global/global.css';

function ifDropdown(dropdown, title) {
  if (dropdown) {
    return <span className={globalStyles.hidden}>{title}</span>;
  }
  return { title };
}

function createButton(
  button,
  dropdown,
  title,
  url,
  className,
  ariaHaspopup,
  ariaExpanded,
  toggleOpen,
  isToggleOn
) {
  if (button === false) {
    return (
      <a href={url} className={styles[className]}>
        <span className="text-label">{title}</span>
      </a>
    );
  }

  return (
    <button
      type="button"
      className={styles[className]}
      data-toggle={isToggleOn ? 'toggled' : null}
      aria-haspopup={ariaHaspopup}
      aria-expanded={ariaExpanded}
      onClick={toggleOpen}
    >
      {ifDropdown(dropdown, title)}
    </button>
  );
}

class Button extends Component {
  constructor() {
    super();
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    this.props.isToggleOn(true);
  }
  render() {
    const {
      button,
      dropdown,
      title,
      url,
      className,
      ariaHaspopup,
      ariaExpanded
    } = this.props;
    return createButton(
      button,
      dropdown,
      title,
      url,
      className,
      ariaHaspopup,
      ariaExpanded,
      this.handleClick,
      this.props.isToggleOn
    );
  }
}

Button.propTypes = {
  button: PropTypes.bool,
  dropdown: PropTypes.bool.isRequired,
  isToggleOn: PropTypes.bool.isRequired,
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
  ariaHaspopup: PropTypes.bool,
  ariaExpanded: PropTypes.bool
};

Button.defaultProps = {
  button: false,
  ariaHaspopup: false,
  ariaExpanded: false
};

export default Button;
