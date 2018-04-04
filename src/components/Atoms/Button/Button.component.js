/**
 * @file Button.component.js
 * Exports a classic button component.
 */

import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './Button.css';

const cx = classNames.bind(styles);

/**
 * Component that renders a button with a click handler.
 */
const Button = props => {
  const { onClick, className, children, color, small } = props;
  // Generate a class name based on the color.
  const buttonClass = cx({
    [`btn${color}`]: !small,
    [className]: className,
    [`btnMobile${color}`]: small
  });

  return (
    <button
      type="button"
      className={buttonClass}
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
  color: PropTypes.oneOf(['Orange', 'White', 'Dark', 'Blue']),
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
