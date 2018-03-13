/**
 * @file Dropdown.component.js
 * Exports a dropdown component.
 */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Downshift from 'downshift';
import styles from './Dropdown.css';
import Button from '../../Atoms/Button/Button.component';

/**
 * Component that renders a Dropdown menu button.
 */
export default class Dropdown extends Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    children: PropTypes.node,
    onClick: PropTypes.func,
    url: PropTypes.string,
    color: PropTypes.oneOf(['Orange', 'White']),
    icon: PropTypes.string,
    className: PropTypes.string
  };

  static defaultProps = {
    children: [],
    color: 'White',
    url: null,
    onClick: () => {},
    icon: null,
    className: null
  };

  render() {
    const {
      title,
      onClick,
      children,
      color,
      url,
      icon,
      className
    } = this.props;

    return (
      <Downshift>
        {({ isOpen, getButtonProps }) => (
          <div className={`${styles.dropdownGrp} ${className}`}>
            <Button
              className={styles.btnGrp}
              url={url}
              color={color}
              onClick={onClick}
              icon={icon}
            >
              {title}
            </Button>
            <Button
              {...getButtonProps()}
              className={styles[`btnDropdown${color}`]}
              color={color}
            />
            {isOpen ? <div className={styles.dropdown}>{children}</div> : null}
          </div>
        )}
      </Downshift>
    );
  }
}
