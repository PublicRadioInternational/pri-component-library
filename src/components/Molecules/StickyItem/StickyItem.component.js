/**
 * @file Sticky.component.js
 * Exports a Sticky component (sticks to window on scroll).
 */

import Sticky from 'react-sticky-fill';
import React from 'react';
import PropTypes from 'prop-types';
import styles from './StickyItem.css';

global.window = {
  addEventListener: Sticky,
  removeEventListener: Sticky
};

/**
 * Component that renders a Sticky Element.
 */
const StickyItem = ({ children }) => (
  <Sticky className={`sticky ${styles.sticky}`}>{children}</Sticky>
);

StickyItem.propTypes = {
  children: PropTypes.node
};

StickyItem.defaultProps = {
  children: []
};

export default StickyItem;
