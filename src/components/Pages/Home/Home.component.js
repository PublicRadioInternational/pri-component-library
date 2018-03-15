/**
 * @file Header.component.js
 * Exports the site header.
 */

import React from 'react';
import styles from './Home.css';
import Header from '../../Organisms/Header/Header.component';

/**
 * Component that renders a link, or a button with a click handler.
 */
const Home = () => (
  <div className={styles.outerWrap}>
    <Header />
    <div className={styles.drawerBg} />
  </div>
);

export default Home;
