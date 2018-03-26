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
const LayoutAsideLatest = ({ children }) => (
  <Aside className={styles.latestContent}>{children}</Aside>
);

LayoutAsideLatest.propTypes = {
  children: PropTypes.node
};

LayoutAsideLatest.defaultProps = {
  children: []
};

export default LayoutAsideLatest;
