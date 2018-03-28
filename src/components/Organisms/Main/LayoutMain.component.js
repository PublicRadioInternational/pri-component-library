/**
 * @file LayoutMain.component.js
 * Exports a main content section.
 */

import React from 'react';
import PropTypes from 'prop-types';
import styles from './Main.css';

import Main from './Main.component';

/**
 * Component that renders the main content area.
 */
const LayoutMain = ({ children }) => (
  <Main className={styles.mainContainer}>{children}</Main>
);

LayoutMain.propTypes = {
  children: PropTypes.node
};

LayoutMain.defaultProps = {
  children: []
};

export default LayoutMain;
