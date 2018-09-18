/**
 * @file Hero.component.js
 * Exports a Hero component.
 */

import React from 'react';
import PropTypes from 'prop-types';
import styles from './Hero.css';

import LazyLoad from '../../Atoms/LazyLoad/LazyLoad.component';

const Hero = ({
  title,
  summary,
  category,
  categoryUrl,
  imgSrc,
  imgAlt,
  url
}) => (
  <article typeof="sioc:Item foaf:Document" className={styles.hero}>
    <figure className={styles.figure}>
      <LazyLoad>
        <img className={styles.img} data-src={imgSrc} alt={imgAlt} />
      </LazyLoad>
    </figure>
    <div className={styles.text}>
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
  url: PropTypes.string.isRequired
};

Hero.defaultProps = {
  categoryUrl: null
};

export default Hero;
