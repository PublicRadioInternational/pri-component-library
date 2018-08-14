/**
 * @file Button.component.js
 * Exports a classic button component.
 */

import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import startCase from 'lodash/startCase';
import styles from './Button.css';

console.log('Styles: %o', styles);

const cx = classNames.bind(styles);

/**
 * Component that renders a button with a click handler.
 */
const Button = props => {
  const {
    children,
    className: classNameProp,
    color,
    component,
    disabled,
    small,
    type,
    ...other
  } = props;
  // Generate a class name based on the color.
  const className = cx(
    {
      [`btn${startCase(color)}`]: !small,
      [`btnMobile${startCase(color)}`]: small
    },
    classNameProp
  );

  const buttonProps = {};

  let ComponentProp = component;

  if (ComponentProp === 'button' && other.href) {
    ComponentProp = 'a';
  }

  if (ComponentProp === 'button' || ComponentProp === 'input') {
    buttonProps.type = type;
    buttonProps.disabled = disabled;
  } else {
    buttonProps.role = 'button';
  }

  return (
    <ComponentProp className={className} {...buttonProps} {...other}>
      {children}
    </ComponentProp>
  );
};

Button.colors = ['white', 'orange', 'dark', 'blue'];

Button.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  color: PropTypes.oneOf(Button.colors),
  /**
   * The component used for the root node.
   * Either a string to use a DOM element or a component.
   */
  component: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.func,
    PropTypes.object
  ]),
  disabled: PropTypes.bool,
  small: PropTypes.bool,
  type: PropTypes.string
};

Button.defaultProps = {
  children: null,
  className: null,
  color: Button.colors[0],
  component: 'button',
  disabled: false,
  small: false,
  type: 'button'
};

export default Button;
