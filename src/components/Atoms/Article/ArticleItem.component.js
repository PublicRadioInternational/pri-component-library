/**
 * @file ArticleItem.component.js
 * Exports a article item component.
 */

import React from 'react';
import PropTypes from 'prop-types';
import styles from './ArticleItem.css';

import Icon from '../../Atoms/Svg/Icons.component';

/**
 * Component that renders an Article Item.
 */
const ArticleItem = ({ title, url, programTitle, programUrl, hasAudio }) => (
  <article className={styles.articleItem} typeof="sioc:Item foaf:Document">
    <div className={styles.titleWrap}>
      <h4 className={styles.title}>
        <a className={styles.link} href={url}>
          {hasAudio && <Icon name="volume" className={styles.icon} />}
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

ArticleItem.propTypes = {
  url: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  programTitle: PropTypes.string,
  programUrl: PropTypes.string,
  hasAudio: PropTypes.bool
};

ArticleItem.defaultProps = {
  programTitle: null,
  programUrl: null,
  hasAudio: false
};

export default ArticleItem;
