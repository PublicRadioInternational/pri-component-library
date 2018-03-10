/**
 * @file Button.component.js
 * Exports a classic button component.
 */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './Button.css';

/**
 * Component that renders a link, or a button with a click handler.
 */
export default class Button extends Component {
  static propTypes = {
    url: PropTypes.string,
    onClick: PropTypes.func,
    children: PropTypes.oneOfType([
      PropTypes.arrayOf(PropTypes.node),
      PropTypes.node
    ]),
    color: PropTypes.string,
    className: PropTypes.string
  };

  static defaultProps = {
    url: null,
    color: 'White',
    children: null,
    className: '',
    onClick: () => {}
  };

  render() {
    const { url, onClick, className, children, color } = this.props;

    // Generate a class name based on the color.
    const buttonClass = `btn${color}`;
    // If a URL is provided, this button is simply a link.
    if (url) {
      return (
        <a
          href={url}
          className={`${styles[buttonClass]} ${className}`}
          onClick={onClick}
        >
          <span className="text-label">{children}</span>
        </a>
      );
    }

    // No URL was specified, this button is not a link. Return a button instead.
    return (
      <button
        type="button"
        className={`${styles[buttonClass]} ${className}`}
        onClick={onClick}
      >
        {children}
      </button>
    );
  }
}
