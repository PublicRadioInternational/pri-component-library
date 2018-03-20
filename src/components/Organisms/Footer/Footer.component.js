/**
 * @file Footer.component.js
 * Exports the site footer.
 */

import React from 'react';
import styles from './Footer.css';

import Menu from '../../Molecules/Menu/Menu.component';

/**
 * Component that renders the footer.
 */
const Footer = () => (
  <footer className={styles.siteFooter}>
    <section className={styles.sponsors}>
      <a href="/">
        <img
          height="48"
          width="466"
          alt="Public Radio International"
          title="Public Radio International"
          typeof="foaf:Image"
          src="https://media.pri.org/s3fs-public/styles/large/public/different-voice.png"
        />
      </a>
      <p>Major funding provided by:</p>
      <a
        href="http://www.gatesfoundation.org/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          height="52"
          width="149"
          alt="Bill &amp;amp; Melinda Gates Foundation"
          title="Bill &amp;amp; Melinda Gates Foundation"
          typeof="foaf:Image"
          src="https://cdn1.pri.org/sites/all/themes/pri/images/logo-gates-color.jpg"
        />
      </a>
      <a
        href="https://www.macfound.org/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          height="52"
          width="149"
          alt="MacArthur Foundation"
          title="MacArthur Foundation"
          typeof="foaf:Image"
          src="https://media.pri.org/s3fs-public/logo-macarthur-color.jpg"
        />
      </a>
      <p>A Partner of OZY Media News</p>
    </section>

    <Menu />
  </footer>
);

export default Footer;
