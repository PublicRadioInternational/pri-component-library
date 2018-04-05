/**
 * @file Sticky.component.js
 * Exports a Sticky component (sticks to window on scroll).
 */

import React from 'react';
import PropTypes from 'prop-types';
import styles from './StickyItem.css';

/**
 * Component that renders a Sticky Element.
 */
const StickyItem = ({ children }) => (
  <div className={`${styles.sticky}`}>{children}</div>
);

StickyItem.propTypes = {
  children: PropTypes.node
};

StickyItem.defaultProps = {
  children: []
};

export default StickyItem;
