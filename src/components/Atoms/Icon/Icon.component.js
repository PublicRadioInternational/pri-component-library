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
  const { svg, className, inline } = props;
  const icon = require(`./svg/${svg}.svg`); // eslint-disable-line
  return (
    <svg
      viewBox={icon.default.viewBox}
      className={inline ? styles.inlineSvg : className}
      fill="currentcolor"
    >
      <use xlinkHref={`#${icon.default.id}`} />
    </svg>
  );
};

Icon.propTypes = {
  // Worth automatically creating these from the files in ./svg sometime?
  svg: PropTypes.oneOf(['heart', 'envelope', 'search', 'volume', 'pri', 'play'])
    .isRequired,
  className: PropTypes.string,
  inline: PropTypes.bool
};

Icon.defaultProps = {
  className: null,
  inline: false
};

export default Icon;
