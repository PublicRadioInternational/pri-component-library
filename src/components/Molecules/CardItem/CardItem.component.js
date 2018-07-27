/**
 * @file CardItem.component.js
 * Exports a card item component.
 */

import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './CardItem.css';

import Icon from '../../Atoms/Svg/Icons.component';
import LazyLoad from '../../Atoms/LazyLoad/LazyLoad.component';

const cx = classNames.bind(styles);

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
}) => (
  <article
    className={cx({
      cardItem: true,
      normal: !large && !freeform,
      large,
      freeform
    })}
    typeof="sioc:Item foaf:Document"
  >
    {imgSrc &&
      !freeform && (
        <figure className={cx('image')}>
          <a href={url}>
            <LazyLoad>
              <img
                typeof="foaf:Image"
                data-src={imgSrc}
                alt={imgAlt}
                className={cx('img')}
              />
            </LazyLoad>
          </a>
        </figure>
      )}
    {title && (
      <div className={`${styles.titleWrap}`}>
        <h2 className={`${styles.title}`}>
          <a href={url} className={`${styles.link}`}>
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
            {title}
          </a>
        </h2>
        {title && <span property="dc:title" content={title} />}
        <span property="sioc:num_replies" content="0" datatype="xsd:integer" />
      </div>
    )}
    {blurb && (
      <BlurbContent freeform={freeform} className={cx('blurb')}>
        {/* eslint-disable-next-line */}
        <span dangerouslySetInnerHTML={{ __html: blurb }} />
      </BlurbContent>
    )}
  </article>
);

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
