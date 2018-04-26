/**
 * @file Footer.component.js
 * Exports the site footer.
 */

import React from 'react';
import PropTypes from 'prop-types';
import styles from './Footer.css';

import PriLogo from '../../Atoms/Svg/PriLogo.component';
import List from '../../Molecules/List/List.component';

import gatesSponsorImg from './images/gates.jpg';
import macarthurSponsorImg from './images/macarthur.jpg';

/**
 * Component that renders the footer.
 */
const Footer = ({ baseUrl }) => (
  <footer className={styles.siteFooter}>
    <section className={styles.sponsors}>
      <a href="/">
        <PriLogo fillColor="#aaa" title="PRI" className="disableHover" />
      </a>
      <p>Major funding provided by:</p>
      <a
        className={styles.sponsor}
        href="http://www.gatesfoundation.org/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          height="52"
          width="149"
          alt="Bill &amp; Melinda Gates Foundation"
          title="Bill &amp; Melinda Gates Foundation"
          typeof="foaf:Image"
          src={gatesSponsorImg}
        />
      </a>
      <a
        className={styles.sponsor}
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
          src={macarthurSponsorImg}
        />
      </a>
      <p>A Partner of OZY Media News</p>
    </section>

    <section className={styles.footerBtm}>
      <List
        listItems={[
          { name: 'About PRI', url: `${baseUrl}/about-pri` },
          { name: 'Contact Us', url: `${baseUrl}/priorg-contact` },
          {
            name: 'Donate',
            url: `${baseUrl}/donate/general?utm_source=footerNav&utm_medium=website&utm_campaign=donations`
          },
          { name: 'Meet the PRI.org Team', url: `${baseUrl}/team` },
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
