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
 * Renders it's children, linked to a given url.
 */
const LinkedItem = ({ url, children, className }) => {
  if (url) {
    return (
      <a className={className} href={url}>
        {children}
      </a>
    );
  }

  return children || null;
};

LinkedItem.propTypes = {
  url: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.node.isRequired
};

LinkedItem.defaultProps = {
  url: null,
  className: null
};

/**
 * Renders blurb content in a paragraph or a div, if freeform is true.
 */
const BlurbContent = ({ freeform, children, className }) => {
  if (freeform) {
    return <div className={className}>{children}</div>;
  }

  return <p className={className}>{children}</p>;
};

BlurbContent.propTypes = {
  freeform: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
  className: PropTypes.string
};

BlurbContent.defaultProps = {
  className: null
};

/**
 * Component that renders a Card Item.
 */
const CardItem = ({
  url,
  title,
  imgSrc,
  imgAlt,
  blurb,
  large,
  hasAudio,
  freeform
}) => {
  const largeClasses = element =>
    cx({
      [element]: true,
      [`${element}Lg`]: large
    });

  const freeformClasses = element =>
    cx({
      [element]: freeform
    });

  return (
    <article
      className={largeClasses('cardItem')}
      typeof="sioc:Item foaf:Document"
    >
      <div className={largeClasses('titleWrap')}>
        {title && (
          <h2
            className={`${!large ? styles.title : ''} ${freeformClasses(
              'freeformTitle'
            )}`}
          >
            <LinkedItem
              url={url}
              className={`${styles.link} ${freeformClasses('freeformLink')}`}
            >
              {title}
            </LinkedItem>
          </h2>
        )}
        {title && <span property="dc:title" content={title} />}
        <span property="sioc:num_replies" content="0" datatype="xsd:integer" />
      </div>
      {imgSrc && (
        <figure className={largeClasses('image')}>
          <LinkedItem url={url}>
            <img
              typeof="foaf:Image"
              src={imgSrc}
              alt={imgAlt}
              className={largeClasses('img')}
            />
          </LinkedItem>
        </figure>
      )}
      <BlurbContent freeform={freeform} className={largeClasses('blurb')}>
        {blurb}
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
      </BlurbContent>
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
  hasAudio: PropTypes.bool,
  freeform: PropTypes.bool
};

CardItem.defaultProps = {
  imgSrc: null,
  imgAlt: null,
  blurb: null,
  url: null,
  title: null,
  large: false,
  hasAudio: false,
  freeform: false
};

export default CardItem;
