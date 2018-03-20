/**
 * @file Home.component.js
 * Exports the homepage.
 */

import React from 'react';
import styles from './Home.css';

import Header from '../../Organisms/Header/Header.component';
import Footer from '../../Organisms/Footer/Footer.component';

/**
 * Component that renders the homepage.
 */
const Home = () => (
  <div className={styles.outerWrap}>
    <Header />
    <div className={styles.drawerBg} />
    <Footer />
  </div>
);

export default Home;
