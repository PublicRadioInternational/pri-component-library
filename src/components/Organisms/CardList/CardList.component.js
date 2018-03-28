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
        <img src={src} alt={categoryDescription} className={styles.logo} />
        {categoryDescription}
      </a>
    </header>
    {children}
  </Section>
);

CardList.propTypes = {
  category: PropTypes.oneOf([
    'world',
    'america-abroad',
    'boston-calling',
    'global-post',
    'live-wire',
    'living-earth',
    'otherhood',
    'playdate',
    'science-happiness',
    'sci-fri',
    'studio',
    'takeaway',
    'things-go-boom',
    'undiscovered',
    'world-words',
    'across-womens-lives',
    'global-nation',
    'global-security',
    'livable-planet'
  ]),
  children: PropTypes.node,
  url: PropTypes.string,
  src: PropTypes.string,
  categoryDescription: PropTypes.string
};

CardList.defaultProps = {
  category: '',
  children: [],
  url: null,
  src: null,
  categoryDescription: null
};

export default CardList;
