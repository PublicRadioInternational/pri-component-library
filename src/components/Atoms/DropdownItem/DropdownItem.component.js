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
    children: PropTypes.node,
    url: PropTypes.string,
    heading: PropTypes.string,
    onClick: PropTypes.func
  };

  static defaultProps = {
    children: [],
    url: null,
    heading: null,
    onClick: () => {}
  };

  render() {
    const { children, url, onClick, heading } = this.props;
    if (url) {
      return (
        <a className={styles.dropdownItem} href={url} onClick={onClick}>
          {children}
        </a>
      );
    } else if (heading) {
      return <h3 className={styles.dropdownHeading}>{heading}</h3>;
    }
    return <hr className={styles.dropdownHr} />;
  }
}
