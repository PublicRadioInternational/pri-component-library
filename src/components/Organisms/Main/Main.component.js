/**
 * @file Main.component.js
 * Exports the site header.
 */

import React from 'react';
import styles from './Main.css';

import Aside from '../Content/Aside.component';
import Section from '../Content/Section.component';

/**
 * Component that renders the main content area.
 */
const Main = () => (
  <main className={styles.mainContainer}>
    <Section className={styles.mainList}>
      <p>Main List</p>
    </Section>
    <Aside className={styles.latestContent}>
      <p>Latest Content</p>
    </Aside>
    <Aside className={styles.callouts}>
      <p>Callouts</p>
    </Aside>
    <Section className={styles.mainList2}>
      <p>Main List Two</p>
    </Section>
  </main>
);

export default Main;
