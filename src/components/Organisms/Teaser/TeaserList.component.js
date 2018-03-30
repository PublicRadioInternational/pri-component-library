/**
 * @file TeaserList.component.js
 * Exports a article list component.
 */

import React from 'react';
import PropTypes from 'prop-types';
import styles from './TeaserList.css';

import ButtonLink from '../../Atoms/Button/ButtonLink.component';
import Section from '../Content/Section.component';

/**
 * Component that renders an Article List.
 */
const TeaserList = ({ title, moreTitle, moreUrl, children }) => (
  <Section className={styles.section}>
    <header className={styles.header}>{title}</header>
    {children}
    {moreTitle && (
      <footer className={styles.footer}>
        <ButtonLink url={moreUrl} color="Blue">
          {moreTitle}
        </ButtonLink>
      </footer>
    )}
  </Section>
);

TeaserList.propTypes = {
  title: PropTypes.string.isRequired,
  moreTitle: PropTypes.string,
  moreUrl: PropTypes.string,
  children: PropTypes.node
};

TeaserList.defaultProps = {
  moreTitle: null,
  moreUrl: null,
  children: []
};

export default TeaserList;
