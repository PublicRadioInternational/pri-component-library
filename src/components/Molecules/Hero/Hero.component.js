/**
 * @file Hero.component.js
 * Exports a Hero component.
 */

import React from 'react';
import PropTypes from 'prop-types';

import Icon from '../../Atoms/Svg/Icons.component';

const Hero = ({ title, summary, hasAudio, category, imgSrc, imgAlt, url }) => {
  const audioIcon = () => {
    if (hasAudio) {
      return (
        <a href={url}>
          <Icon name="volume" />
        </a>
      );
    }

    return '';
  };

  return (
    <article typeof="sioc:Item foaf:Document">
      <figure>
        <img src={imgSrc} alt={imgAlt} />
      </figure>
      <div>
        {audioIcon()}
        <h1>{title}</h1>
        <p>{summary}</p>
        <strong>{category}</strong>
      </div>
    </article>
  );
};

Hero.propTypes = {
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  imgSrc: PropTypes.string.isRequired,
  imgAlt: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  hasAudio: PropTypes.bool
};

Hero.defaultProps = {
  hasAudio: false
};

export default Hero;
