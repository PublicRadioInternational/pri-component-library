/**
 * @file Dropdown.component.js
 * Exports a dropdown component.
 */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Downshift from 'downshift';
import styles from './Dropdown.css';
import Button from '../Button/Button.component';

/**
 * Component that renders a Dropdown menu button.
 */
export default class Dropdown extends Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    children: PropTypes.oneOfType([
      PropTypes.arrayOf(PropTypes.node),
      PropTypes.node
    ]),
    onClick: PropTypes.func,
    url: PropTypes.string,
    color: PropTypes.oneOf(['Orange', 'White'])
  };

  static defaultProps = {
    children: [],
    color: 'White',
    url: null,
    onClick: () => {}
  };

  render() {
    const { title, onClick, children, color, url } = this.props;

    return (
      <Downshift>
        {({ isOpen, getButtonProps }) => (
          <div className={styles.dropdownGrp}>
            <Button
              className={styles.btnGrp}
              url={url}
              color={color}
              onClick={onClick}
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
