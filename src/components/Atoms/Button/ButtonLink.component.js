/**
 * @file ButtonLink.component.js
 * Exports a button link component.
 */

import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './Button.css';

const cx = classNames.bind(styles);

/**
 * Component that renders a link button with a click handler.
 */
const ButtonLink = props => {
  const { url, onClick, className, children, color, small } = props;
  // Generate a class name based on the color.
  const buttonClass = cx({
    [`btn${color}`]: !small,
    [className]: className && className,
    [`btnMobile${color}`]: small
  });

  return (
    <a href={url} className={buttonClass} onClick={onClick}>
      {children}
    </a>
  );
};

ButtonLink.propTypes = {
  url: PropTypes.string,
  onClick: PropTypes.func,
  children: PropTypes.node,
  color: PropTypes.oneOf(['Orange', 'White', 'Blue']),
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
