/**
 * @file Section.component.js
 * Exports a section component.
 */

import React from 'react';
import PropTypes from 'prop-types';

/**
 * Component that renders a section component.
 */
const Section = ({ children, className }) => (
  <section className={`className && ${className}`}>{children}</section>
);

Section.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string
};

Section.defaultProps = {
  children: [],
  className: null
};

export default Section;
