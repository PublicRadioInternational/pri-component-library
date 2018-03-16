/**
 * @file Button.component.js
 * Exports a classic button component.
 */

import React from 'react';
import PropTypes from 'prop-types';
import styles from './Button.css';

/**
 * Component that renders a button with a click handler.
 */
const Button = props => {
  const { onClick, className, children, color, small } = props;
  // Generate a class name based on the color.
  const buttonClass = `btn${color}`;
  const buttonMobileClass = `btnMobile${color}`;

  return (
    <button
      type="button"
      className={`${
        small ? styles[buttonMobileClass] : styles[buttonClass]
      } ${className && className}`}
      onClick={onClick}
      aria-expanded={
        props['aria-expanded'] === true ? props['aria-expanded'] : null
      }
      aria-label={props['aria-label']}
      aria-haspopup={
        props['aria-haspopup'] === true ? props['aria-haspopup'] : null
      }
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  onClick: PropTypes.func,
  children: PropTypes.node,
  color: PropTypes.oneOf(['Orange', 'White']),
  className: PropTypes.string,
  'aria-expanded': PropTypes.bool,
  'aria-label': PropTypes.string,
  'aria-haspopup': PropTypes.bool,
  small: PropTypes.bool
};

Button.defaultProps = {
  color: 'White',
  className: null,
  children: null,
  onClick: () => {},
  'aria-expanded': false,
  'aria-label': null,
  'aria-haspopup': false,
  small: false
};

export default Button;
