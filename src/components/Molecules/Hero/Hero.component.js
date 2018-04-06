/**
 * @file Hero.component.js
 * Exports a Hero component.
 */

import React from 'react';
import PropTypes from 'prop-types';
import styles from './Hero.css';

import Icon from '../../Atoms/Svg/Icons.component';

const Hero = ({
  title,
  summary,
  hasAudio,
  category,
  categoryUrl,
  imgSrc,
  imgAlt,
  url
}) => (
  <article typeof="sioc:Item foaf:Document" className={styles.hero}>
    <figure className={styles.figure}>
      <img className={styles.img} src={imgSrc} alt={imgAlt} />
    </figure>
    <div className={styles.text}>
      {hasAudio && (
        <a className={styles.iconLink} href={url}>
          <Icon
            name="volume"
            className={styles.icon}
            isRoundIcon
            ariaLabel="Audio"
          />
        </a>
      )}
      <h2>
        <a className={styles.title} href={url}>
          {title}
        </a>
      </h2>
      <p className={styles.summary}>{summary}</p>
      <a className={styles.category} href={categoryUrl || url}>
        {category}
      </a>
    </div>
  </article>
);

Hero.propTypes = {
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  categoryUrl: PropTypes.string,
  imgSrc: PropTypes.string.isRequired,
  imgAlt: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  hasAudio: PropTypes.bool
};

Hero.defaultProps = {
  hasAudio: false,
  categoryUrl: false
};

export default Hero;
