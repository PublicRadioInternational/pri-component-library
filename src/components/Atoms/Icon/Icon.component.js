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
function Icon(props) {
  const { svg } = props;
  const icon = require(`./svg/${svg}.svg`); // eslint-disable-line
  return (
    <svg
      viewBox={icon.default.viewBox}
      className={styles.inlineSvg}
      fill="currentcolor"
    >
      <use xlinkHref={`#${icon.default.id}`} />
    </svg>
  );
}

Icon.propTypes = {
  svg: PropTypes.string.isRequired
};

export default Icon;
