/**
 * @file Main.component.js
 * Exports the site header.
 */

import React from 'react';
import styles from './Main.css';

/**
 * Component that renders the main content area.
 */
const Main = () => (
  <main className={styles.mainContainer}>
    <div className={styles.mainList}>
      <p>Main List</p>
    </div>
    <div className={styles.latestContent}>
      <p>Latest Content</p>
    </div>
    <div className={styles.callouts}>
      <p>Callouts</p>
    </div>
    <div className={styles.mainList2}>
      <p>Main List Two</p>
    </div>
  </main>
);

export default Main;
