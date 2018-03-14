/**
 * @file Icon.component.js
 * Exports an icon component.
 */

import React from 'react';
import PropTypes from 'prop-types';
import styles from './Icon.css';

/**
 * Component that renders a link, or a button with a click handler.
 */
const Icon = props => {
  const { svg, className, inline, title } = props;
  const icon = require(`./svg/${svg}.svg`); // eslint-disable-line
  return (
    <svg
      viewBox={icon.default.viewBox}
      className={inline ? styles.inlineSvg : className && className}
      fill="currentcolor"
      aria-hidden={props['aria-hidden'] === true ? props['aria-hidden'] : null}
    >
      {title && <title>{title}</title>}
      <use xlinkHref={`#${icon.default.id}`} />
    </svg>
  );
};

Icon.propTypes = {
  svg: PropTypes.oneOf(['heart', 'envelope', 'search', 'volume', 'pri', 'play'])
    .isRequired,
  className: PropTypes.string,
  inline: PropTypes.bool,
  title: PropTypes.string,
  'aria-hidden': PropTypes.bool
};

Icon.defaultProps = {
  className: null,
  inline: false,
  title: null,
  'aria-hidden': false
};

export default Icon;
