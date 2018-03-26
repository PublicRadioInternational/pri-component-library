/**
 * @file LayoutMain.component.js
 * Exports a secondary content section.
 */

import React from 'react';
import PropTypes from 'prop-types';
import styles from './Main.css';

import Section from '../Content/Section.component';

/**
 * Component that renders the main content area.
 */
const LayoutSection2 = ({ children }) => (
  <Section className={styles.mainList2}>{children}</Section>
);

LayoutSection2.propTypes = {
  children: PropTypes.node
};

LayoutSection2.defaultProps = {
  children: []
};

export default LayoutSection2;
