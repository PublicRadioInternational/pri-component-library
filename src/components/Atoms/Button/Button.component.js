/**
 * @file Button.component.js
 * Exports a classic button component.
 */

import React from 'react';
import PropTypes from 'prop-types';
import styles from './Button.css';
import Icon from '../Icon/Icon.component';

/**
 * Component that renders a link, or a button with a click handler.
 */
const Button = props => {
  const { url, onClick, className, children, color, icon, small } = props;
  // Generate a class name based on the color.
  const buttonClass = `btn${color}`;
  const buttonMobileClass = `btnMobile${color}`;

  // If a URL is provided, this button is simply a link.
  if (url) {
    return (
      <a
        href={url}
        className={`${
          small ? styles[buttonMobileClass] : styles[buttonClass]
        } ${className && className}`}
        onClick={onClick}
      >
        {icon && <Icon svg={icon} inline />}
        <span
          className={`${styles.textLabel} ${small && styles.textLabelMobile}`}
        >
          {children}
        </span>
      </a>
    );
  }

  // No URL was specified, this button is not a link. Return a button instead.
  return (
    <button
      type="button"
      className={`${
        small ? styles[buttonMobileClass] : styles[buttonClass]
      } ${className && className}`}
      onClick={onClick}
      aria-expanded={props['aria-expanded']}
      aria-label={props['aria-label']}
      aria-haspopup={props['aria-haspopup']}
    >
      {icon ? <Icon svg={icon} inline /> : null}
      {children}
    </button>
  );
};

Button.propTypes = {
  url: PropTypes.string,
  onClick: PropTypes.func,
  children: PropTypes.node,
  color: PropTypes.oneOf(['Orange', 'White']),
  className: PropTypes.string,
  'aria-expanded': PropTypes.bool,
  'aria-label': PropTypes.string,
  'aria-haspopup': PropTypes.bool,
  icon: PropTypes.string,
  small: PropTypes.bool
};

Button.defaultProps = {
  url: null,
  color: 'White',
  className: null,
  children: null,
  onClick: () => {},
  'aria-expanded': false,
  'aria-label': null,
  'aria-haspopup': false,
  icon: null,
  small: false
};

export default Button;
