/**
 * @file Sticky.component.js
 * Exports a Sticky component (sticks to window on scroll).
 */

import Stickyfill from 'stickyfilljs';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './Sticky.css';

/**
 * Component that renders a Sticky Element.
 */
export default class Sticky extends Component {
  static propTypes = {
    children: PropTypes.node
  };

  static defaultProps = {
    children: []
  };

  render() {
    const { children } = this.props;

    const elements = document.querySelectorAll('.sticky');
    Stickyfill.add(elements);

    return <div className={`sticky ${styles.sticky}`}>{children}</div>;
  }
}
