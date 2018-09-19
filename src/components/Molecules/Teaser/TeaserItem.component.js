/**
 * @file TeaserItem.component.js
 * Exports a article item component.
 */

import React from 'react';
import PropTypes from 'prop-types';
import styles from './TeaserItem.css';

/**
 * Component that renders an Article Item.
 */
const TeaserItem = ({ title, url, programTitle, programUrl }) => (
  <article className={styles.teaserItem} typeof="sioc:Item foaf:Document">
    <div className={styles.titleWrap}>
      <h4 className={styles.title}>
        <a className={styles.link} href={url}>
          {title}
        </a>
      </h4>
      <span property="dc:title" content={title} />
    </div>
    {programTitle && (
      <p className={styles.program}>
        <a className={styles.link} href={programUrl}>
          {programTitle}
        </a>
      </p>
    )}
  </article>
);

TeaserItem.propTypes = {
  url: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  programTitle: PropTypes.string,
  programUrl: PropTypes.string
};

TeaserItem.defaultProps = {
  programTitle: null,
  programUrl: null
};

export default TeaserItem;
