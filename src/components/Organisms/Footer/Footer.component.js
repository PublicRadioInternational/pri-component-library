/**
 * @file Footer.component.js
 * Exports the site footer.
 */

import React from 'react';
import PropTypes from 'prop-types';
import styles from './Footer.css';

import PriLogo from '../../Atoms/Svg/PriLogo.component';
import List from '../../Molecules/List/List.component';

/**
 * Component that renders the footer.
 */
const Footer = ({ links }) => (
  <footer className={styles.siteFooter}>
    <section className={styles.sponsors}>
      <a href="/">
        <PriLogo
          width="250"
          height="47"
          fillColor="#aaa"
          title="PRI"
          className="disableHover"
        />
      </a>
      <p>
        The World is a public radio program that crosses borders and time zones
        to bring home the stories that matter.
      </p>
      <p>
        <i>Produced by:</i>
      </p>
      <a
        className={styles.sponsor}
        href="https://www.prx.org/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          height="25"
          width="84"
          alt="PRX"
          title="PRX"
          typeof="foaf:Image"
          src="https://media.pri.org/s3fs-public/images/2020/04/logo-prx.png"
        />
      </a>
      <a
        className={styles.sponsor}
        href="https://www.wgbh.org/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          height="25"
          width="84"
          alt="WGBH"
          title="WGBH"
          typeof="foaf:Image"
          src="https://media.pri.org/s3fs-public/images/2020/04/logo-wgbh.png"
        />
      </a>
      <p>
        <em>Major funding provided by:</em>
      </p>
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
          src="https://media.pri.org/s3fs-public/styles/original_image/public/images/2018/09/carnegie.jpg"
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
          src="https://media.pri.org/s3fs-public/logo-macarthur-color.jpg"
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
          src="https://media.pri.org/s3fs-public/styles/original_image/public/images/2018/09/ford.jpg"
        />
      </a>
      <a
        className={styles.sponsor}
        href="https://cpb.org/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          height="52"
          width="149"
          alt="Corporation for Public Broadcasting"
          title="Corporation for Public Broadcasting"
          typeof="foaf:Image"
          src="https://media.pri.org/s3fs-public/images/2020/01/cpb-logo.png"
        />
      </a>
    </section>

    <section className={styles.footerBtm}>
      {links && <List listItems={links} />}

      <p>&copy; {new Date().getFullYear()} The World from PRX</p>
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
