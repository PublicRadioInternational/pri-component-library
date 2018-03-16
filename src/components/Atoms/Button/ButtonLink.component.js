/**
 * @file ButtonLink.component.js
 * Exports a button link component.
 */

import React from 'react';
import PropTypes from 'prop-types';
import styles from './Button.css';

/**
 * Component that renders a link button with a click handler.
 */
const ButtonLink = props => {
  const { url, onClick, className, children, color, small } = props;
  // Generate a class name based on the color.
  const buttonClass = `btn${color}`;
  const buttonMobileClass = `btnMobile${color}`;

  return (
    <a
      href={url}
      className={`${
        small ? styles[buttonMobileClass] : styles[buttonClass]
      } ${className && className}`}
      onClick={onClick}
    >
      <span
        className={`${styles.textLabel} ${small && styles.textLabelMobile}`}
      >
        {children}
      </span>
    </a>
  );
};

ButtonLink.propTypes = {
  url: PropTypes.string,
  onClick: PropTypes.func,
  children: PropTypes.node,
  color: PropTypes.oneOf(['Orange', 'White']),
  className: PropTypes.string,
  small: PropTypes.bool
};

ButtonLink.defaultProps = {
  url: null,
  color: 'White',
  className: null,
  children: null,
  onClick: () => {},
  small: false
};

export default ButtonLink;
