/**
 * @file ButtonInput.component.js
 * Exports an input button component.
 */

import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './Button.css';
import Icon from '../Svg/Icons.component';

const cx = classNames.bind(styles);

/**
 * Component that renders an input button with a click handler.
 */
const ButtonInput = props => {
  const { onClick, className, value, color, icon, small } = props;
  // Generate a class name based on the color.
  const buttonClass = cx({
    inputBtn: true,
    [`btn${color}`]: !small,
    [className]: className && className,
    [`btnMobile${color}`]: small,
    inputWithIcon: icon
  });

  return (
    <div className={styles.inputWrap}>
      {icon ? (
        <Icon name={icon} inline ariaHidden className={styles.inputIcon} />
      ) : null}
      <input
        className={buttonClass}
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
