/**
 * @file CardItem.component.js
 * Exports a card item component.
 */

import React from 'react';
import PropTypes from 'prop-types';
import styles from './CardItem.css';

import Icon from '../../Atoms/Svg/Icons.component';

/**
 * Component that renders a Card Item.
 */
const CardItem = ({ url, title, imgSrc, imgAlt, blurb, large, audio }) => (
  <article
    className={`${styles.cardItem} ${large ? styles.cardItemLg : undefined}`}
    typeof="sioc:Item foaf:Document"
  >
    <div
      className={`${styles.titleWrap} ${
        large ? styles.titleWrapLg : undefined
      }`}
    >
      <h2 className={`${!large ? styles.title : undefined}`}>
        <a className={styles.link} href={url}>
          {title}
        </a>
      </h2>
      <span property="dc:title" content={title} />
      <span property="sioc:num_replies" content="0" datatype="xsd:integer" />
    </div>
    <figure className={`${styles.image} ${large ? styles.imageLg : undefined}`}>
      <a href={url}>
        <img
          typeof="foaf:Image"
          src={imgSrc}
          alt={imgAlt}
          className={`${styles.img} ${large ? styles.imgLg : undefined}`}
        />
      </a>
    </figure>
    <p className={`${styles.blurb} ${large ? styles.blurbLg : undefined}`}>
      {blurb}
      {audio && (
        <a className={styles.iconLink} href={url}>
          <Icon name="volume" className={styles.icon} />
        </a>
      )}
    </p>
  </article>
);

CardItem.propTypes = {
  url: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  imgSrc: PropTypes.string,
  imgAlt: PropTypes.string,
  blurb: PropTypes.string,
  large: PropTypes.bool,
  audio: PropTypes.bool
};

CardItem.defaultProps = {
  imgSrc: null,
  imgAlt: null,
  blurb: null,
  large: false,
  audio: false
};

export default CardItem;
