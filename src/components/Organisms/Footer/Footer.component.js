/**
 * @file Footer.component.js
 * Exports the site footer.
 */

import React from 'react';
import PropTypes from 'prop-types';
import styles from './Footer.css';

import PriLogo from '../../Atoms/Svg/PriLogo.component';
import List from '../../Molecules/List/List.component';

import carnegieSponsorImg from './images/carnegie.jpg';
import fordSponsorImg from './images/ford.jpg';
import macarthurSponsorImg from './images/macarthur.jpg';

/**
 * Component that renders the footer.
 */
const Footer = ({ links }) => (
  <footer className={styles.siteFooter}>
    <section className={styles.sponsors}>
      <a href="/">
        <PriLogo fillColor="#aaa" title="PRI" className="disableHover" />
      </a>
      <p>Major funding provided by:</p>
      <a
        className={styles.sponsor}
        href="https://www.carnegie.org/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          height="52"
          width="149"
          alt="Carnegie Corporation of New York"
          title="Carnegie Corporation of New York"
          typeof="foaf:Image"
          src={carnegieSponsorImg}
        />
      </a>
      <a
        className={styles.sponsor}
        href="https://www.fordfoundation.org/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          height="52"
          width="149"
          alt="Ford Foundation"
          title="Ford Foundation"
          typeof="foaf:Image"
          src={fordSponsorImg}
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
      {links && <List listItems={links} />}

      <p>&copy; {new Date().getFullYear()} Public Radio International</p>
    </section>
  </footer>
);

Footer.propTypes = {
  links: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      url: PropTypes.string
    })
  )
};

Footer.defaultProps = {
  links: null
};

export default Footer;
