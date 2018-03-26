/**
 * @file LayoutMain.component.js
 * Exports a main list content section.
 */

import React from 'react';
import PropTypes from 'prop-types';
import styles from './Main.css';

import Section from '../Content/Section.component';

/**
 * Component that renders the main content area.
 */
const LayoutSection = ({ children }) => (
  <Section className={styles.mainList}>{children}</Section>
);

LayoutSection.propTypes = {
  children: PropTypes.node
};

LayoutSection.defaultProps = {
  children: []
};

export default LayoutSection;
