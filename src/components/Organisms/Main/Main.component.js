/**
 * @file Main.component.js
 * Exports the site header.
 */

import React from 'react';
import PropTypes from 'prop-types';
import styles from './Main.css';

/**
 * Component that renders the main content area.
 */
const Main = ({ children }) => (
  <main className={styles.mainContainer}>{children}</main>
);

Main.propTypes = {
  children: PropTypes.node
};

Main.defaultProps = {
  children: []
};

export default Main;
