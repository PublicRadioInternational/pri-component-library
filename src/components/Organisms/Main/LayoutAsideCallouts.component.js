/**
 * @file LayoutMain.component.js
 * Exports a main content section.
 */

import React from 'react';
import PropTypes from 'prop-types';
import styles from './Main.css';

import Aside from '../Content/Aside.component';

/**
 * Component that renders the main content area.
 */
const LayoutAsideCallouts = ({ children }) => (
  <Aside className={styles.callouts}>{children}</Aside>
);

LayoutAsideCallouts.propTypes = {
  children: PropTypes.node
};

LayoutAsideCallouts.defaultProps = {
  children: []
};

export default LayoutAsideCallouts;
