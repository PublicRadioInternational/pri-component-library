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
    <Footer />
  </div>
);

export default Home;
