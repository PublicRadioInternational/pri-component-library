/**
 * @file BlockList.component.js
 * Exports a block list component.
 */

import React from 'react';
import PropTypes from 'prop-types';
import styles from './BlockList.css';

/**
 * Component that renders a Block List.
 */
const BlockList = ({ title, children }) => (
  <div className={styles.blockList}>
    {title && <h2 className={styles.title}>{title}</h2>}
    <div className={styles.list}>{children}</div>
  </div>
);

BlockList.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node
};

BlockList.defaultProps = {
  title: null,
  children: []
};

export default BlockList;
