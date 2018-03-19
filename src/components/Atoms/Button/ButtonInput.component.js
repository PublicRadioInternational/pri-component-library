/**
 * @file ButtonInput.component.js
 * Exports an input button component.
 */

import React from 'react';
import PropTypes from 'prop-types';
import styles from './Button.css';
import Icon from '../Svg/Icons.component';

/**
 * Component that renders an input button with a click handler.
 */
const ButtonInput = props => {
  const { onClick, className, value, color, icon, small } = props;
  // Generate a class name based on the color.
  const buttonClass = `btn${color}`;
  const buttonMobileClass = `btnMobile${color}`;

  return (
    <div className={styles.inputWrap}>
      {icon ? (
        <Icon name={icon} inline ariaHidden className="inputIcon" />
      ) : null}
      <input
        className={`${
          small ? styles[buttonMobileClass] : styles[buttonClass]
        } ${className && className} ${styles.inputBtn} ${icon &&
          styles.inputWithIcon}`}
        type="submit"
        onClick={onClick}
        value={value}
      />
    </div>
  );
};

ButtonInput.propTypes = {
  onClick: PropTypes.func,
  value: PropTypes.string,
  color: PropTypes.oneOf(['Orange', 'White']),
  className: PropTypes.string,
  icon: PropTypes.string,
  small: PropTypes.bool
};

ButtonInput.defaultProps = {
  color: 'White',
  className: null,
  value: null,
  onClick: () => {},
  icon: null,
  small: false
};

export default ButtonInput;
