/**
 * @file Button.js
 * Creates button component.
 */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './Button.css';

function ifDropdown(dropdown, title, url, className) {
  if (dropdown === false) {
    return (
      <a href={url} className={styles[className]}>
        <span className="text-label">{title}</span>
      </a>
    );
  }

  return (
    <div className="btn-group">
      <a href={url} className={styles[className]}>
        <span className="oi oi-media-play" ariaHidden="true" />
        <span className="text-label">{title}</span>
      </a>
      <button
        type="button"
        className="btn btn-secondary dropdown-toggle dropdown-toggle-split"
        dataToggle="dropdown"
        ariaHaspopup="true"
        ariaExpanded="false"
      >
        <span className="sr-only">Toggle Dropdown</span>
      </button>
      <div className="dropdown-menu dropdown-menu-right">
        <a className="dropdown-item" href="{child.url}">
          {child.title}
        </a>
      </div>
    </div>
  );
}

class Button extends Component {
  render() {
    const { dropdown, title, url, className } = this.props;
    return ifDropdown(dropdown, title, url, className);
  }
}

Button.propTypes = {
  dropdown: PropTypes.bool.isRequired,
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired
};

export default Button;
