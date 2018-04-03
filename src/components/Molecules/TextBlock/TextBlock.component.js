/**
 * @file TextBlock.component.js
 * Exports a Text block component.
 */

import React from 'react';
import PropTypes from 'prop-types';
import styles from './TextBlock.css';

import ButtonLink from '../../Atoms/Button/ButtonLink.component';
import Icon from '../../Atoms/Svg/Icons.component';

/**
 * Component that renders a Text Block.
 */
const TextBlock = ({ title, body, button, url, color }) => (
  <div className={styles.textBlock}>
    <h2 className={styles.header}>{title}</h2>
    <p className={styles.body}>{body}</p>
    {button && (
      <ButtonLink className={styles.btn} url={url} color={color}>
        <Icon name="info" inline className={styles.btnIcon} />
        <span className={styles.textLabel}>{button}</span>
      </ButtonLink>
    )}
  </div>
);

TextBlock.propTypes = {
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  button: PropTypes.string,
  url: PropTypes.string,
  color: PropTypes.string
};

TextBlock.defaultProps = {
  button: null,
  url: null,
  color: null
};

export default TextBlock;
