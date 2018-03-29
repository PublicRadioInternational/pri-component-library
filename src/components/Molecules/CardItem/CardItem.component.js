/**
 * @file CardItem.component.js
 * Exports a card item component.
 */

import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './CardItem.css';

import Icon from '../../Atoms/Svg/Icons.component';

const cx = classNames.bind(styles);

/**
 * Takes an optional link and title, and returns a title structure.
 *
 * @param {string} title - Title string.
 * @param {string} link - Optional url to which {title} should link.
 * @param {string} className - Class that should be applied to title wrapper.
 *
 * @returns {object|null}
 *   Depending on whether or not a link, or a title is provided, this method
 *   will return a title, a linked title.
 */
const CardTitle = (title, link = null, className = '') => {
  // If both a link and a title exist, return a linked title.
  if (link && title) {
    return (
      <a className={className} href={link}>
        {title}
      </a>
    );
  } else if (title) {
    // If there is just a title, return just the title.
    return title;
  }

  return null;
};

/**
 * Component that renders a Card Item.
 */
const CardItem = ({ url, title, imgSrc, imgAlt, blurb, large, hasAudio }) => {
  const largeClasses = element =>
    cx({
      [element]: true,
      [`${element}Lg`]: large
    });
  return (
    <article
      className={largeClasses('cardItem')}
      typeof="sioc:Item foaf:Document"
    >
      <div className={largeClasses('titleWrap')}>
        {title && (
          <h2 className={`${!large && styles.title}`}>
            {CardTitle(title, url, styles.link)}
          </h2>
        )}
        {title && <span property="dc:title" content={title} />}
        <span property="sioc:num_replies" content="0" datatype="xsd:integer" />
      </div>
      <figure className={largeClasses('image')}>
        <a href={url}>
          <img
            typeof="foaf:Image"
            src={imgSrc}
            alt={imgAlt}
            className={largeClasses('img')}
          />
        </a>
      </figure>
      <p className={largeClasses('blurb')}>
        {blurb}
        {hasAudio && (
          <a className={styles.iconLink} href={url}>
            <Icon name="volume" className={styles.icon} isRoundIcon />
          </a>
        )}
      </p>
    </article>
  );
};

CardItem.propTypes = {
  url: PropTypes.string,
  title: PropTypes.string,
  imgSrc: PropTypes.string,
  imgAlt: PropTypes.string,
  blurb: PropTypes.string,
  large: PropTypes.bool,
  hasAudio: PropTypes.bool
};

CardItem.defaultProps = {
  imgSrc: null,
  imgAlt: null,
  blurb: null,
  url: null,
  title: null,
  large: false,
  hasAudio: false
};

export default CardItem;
