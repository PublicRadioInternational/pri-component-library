/**
 * @file Card.component.js
 * Exports a card component.
 */

import React from 'react';
import PropTypes from 'prop-types';
import styles from './CardItem.css';

import Icon from '../../Atoms/Svg/Icons.component';

/**
 * Component that renders a Card.
 */
const CardItem = ({ url, title, imgSrc, imgAlt, blurb }) => (
  <article className={styles.cardItem} typeof="sioc:Item foaf:Document">
    <div className={styles.titleWrap}>
      <h2 className={styles.title}>
        <a className={styles.link} href={url}>
          {title}
        </a>
      </h2>
      <span property="dc:title" content={title} />
      <span property="sioc:num_replies" content="0" datatype="xsd:integer" />
    </div>
    <figure className={styles.image}>
      <a href={url}>
        <img typeof="foaf:Image" src={imgSrc} alt={imgAlt} />
      </a>
    </figure>
    <p className={styles.blurb}>
      {blurb}
      <a className={styles.iconLink} href={url}>
        <Icon name="volume" className={styles.icon} />
      </a>
    </p>
  </article>
);

CardItem.propTypes = {
  url: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  imgSrc: PropTypes.string,
  imgAlt: PropTypes.string,
  blurb: PropTypes.string
};

CardItem.defaultProps = {
  imgSrc: null,
  imgAlt: null,
  blurb: null
};

export default CardItem;
