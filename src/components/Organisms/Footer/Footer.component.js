/**
 * @file Footer.component.js
 * Exports the site footer.
 */

import React from 'react';
import PropTypes from 'prop-types';
import styles from './Footer.css';

import List from '../../Molecules/List/List.component';

/**
 * Component that renders the footer.
 */
const Footer = ({ baseUrl }) => (
  <footer className={styles.siteFooter}>
    <section className={styles.sponsors}>
      <a href="/">
        <img
          className={styles.menuImg}
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

    <section className={styles.footerBtm}>
      <List
        listItems={[
          { name: 'About PRI', url: `${baseUrl}/about-pri` },
          { name: 'Contact Us', url: `${baseUrl}/priorg-contact` },
          { name: 'Donate', url: `${baseUrl}/team` },
          {
            name: 'Meet the PRI.org Team',
            url: `${baseUrl}/donate/general?utm_source=footerNav&utm_medium=website&utm_campaign=donations`
          },
          { name: 'Privacy policy', url: `${baseUrl}/privacy` },
          { name: 'Terms of use', url: `${baseUrl}/terms` }
        ]}
      />

      <p>&copy; 2018 Public Radio International</p>
    </section>
  </footer>
);

Footer.propTypes = {
  baseUrl: PropTypes.string
};

Footer.defaultProps = {
  baseUrl: 'https://www.pri.org'
};

export default Footer;
