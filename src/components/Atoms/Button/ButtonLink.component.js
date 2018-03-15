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
const ButtonLink = props => {
  const { url, onClick, className, children, color, icon, small } = props;
  // Generate a class name based on the color.
  const buttonClass = `btn${color}`;
  const buttonMobileClass = `btnMobile${color}`;

  // If a URL is provided, this button is simply a link.
  return (
    <a
      href={url}
      className={`${
        small ? styles[buttonMobileClass] : styles[buttonClass]
      } ${className && className}`}
      onClick={onClick}
    >
      {icon && <Icon svg={icon} inline aria-hidden />}
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
  icon: PropTypes.string,
  small: PropTypes.bool
};

ButtonLink.defaultProps = {
  url: null,
  color: 'White',
  className: null,
  children: null,
  onClick: () => {},
  icon: null,
  small: false
};

export default ButtonLink;
