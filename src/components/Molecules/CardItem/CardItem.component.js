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
 * Component that renders a Card Item.
 */
const CardItem = props => {
  const { url, title, imgSrc, imgAlt, blurb, large, hasAudio } = props;
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
        <h2 className={`${!large && styles.title}`}>
          <a className={styles.link} href={url}>
            {title}
          </a>
        </h2>
        <span property="dc:title" content={title} />
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
  url: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
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
  large: false,
  hasAudio: false
};

export default CardItem;
