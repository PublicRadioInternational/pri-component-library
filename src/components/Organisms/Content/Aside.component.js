/**
 * @file Aside.component.js
 * Exports an aside section (secondary, tertiary content).
 */

import React from 'react';
import PropTypes from 'prop-types';

/**
 * Component that renders an aside component.
 */
const Aside = ({ children, className }) => (
  <aside className={`className && ${className}`}>{children}</aside>
);

Aside.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string
};

Aside.defaultProps = {
  children: [],
  className: null
};

export default Aside;
