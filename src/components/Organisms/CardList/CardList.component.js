/**
 * @file CardList.component.js
 * Exports a card list component.
 */

import React from 'react';
import PropTypes from 'prop-types';
import styles from './CardList.css';

import Section from '../Content/Section.component';

/**
 * Component that renders a Card List.
 */
const CardList = ({ category, children, url, src, categoryDescription }) => (
  <Section className={`${styles.list} ${styles[category]}`}>
    <header className={styles.header}>
      <a href={url} className={styles.logoLink}>
        {src && <img src={src} alt="" className={styles.logo} />}
        <span>{categoryDescription}</span>
      </a>
    </header>
    {children}
  </Section>
);

CardList.propTypes = {
  category: PropTypes.string,
  children: PropTypes.node,
  url: PropTypes.string,
  src: PropTypes.string,
  categoryDescription: PropTypes.string
};

CardList.defaultProps = {
  category: 'world',
  children: [],
  url: null,
  src: null,
  categoryDescription: null
};

export default CardList;
