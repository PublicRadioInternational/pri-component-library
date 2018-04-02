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
 * @param {node} item - Renderable node.
 * @param {string} link - Optional url to which {item} should link.
 * @param {string} className - Class that should be applied to item wrapper.
 *
 * @returns {object|null}
 *   If a link path is provided, this method will return item wrapped in a link
 *   tag. If a link is not provided, it'll return the item carte blanc.
 */
const linkedItem = (item, link = null, className = '') => {
  // If both a link and an item exist, return the item wrapped by an anchor tag.
  if (link && item) {
    return (
      <a className={className} href={link}>
        {item}
      </a>
    );
  } else if (item) {
    // If there is just an, return just the item.
    return item;
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
          <h2 className={!large ? styles.title : ''}>
            {linkedItem(title, url, styles.link)}
          </h2>
        )}
        {title && <span property="dc:title" content={title} />}
        <span property="sioc:num_replies" content="0" datatype="xsd:integer" />
      </div>
      {imgSrc && (
        <figure className={largeClasses('image')}>
          {linkedItem(
            <img
              typeof="foaf:Image"
              src={imgSrc}
              alt={imgAlt}
              className={largeClasses('img')}
            />,
            url
          )}
        </figure>
      )}
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
  blurb: PropTypes.node,
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
