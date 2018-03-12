/**
 * @file DropdownItem.test.js
 * Exports a dropdown item component.
 */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './DropdownItem.css';

/**
 * Component that renders a dropdown menu item.
 */
export default class DropdownItem extends Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
    url: PropTypes.string,
    onClick: PropTypes.func
  };

  static defaultProps = {
    url: null,
    onClick: () => {}
  };

  render() {
    const { children, url, onClick } = this.props;
    return (
      <a className={styles.dropdownItem} href={url} onClick={onClick}>
        {children}
      </a>
    );
  }
}
