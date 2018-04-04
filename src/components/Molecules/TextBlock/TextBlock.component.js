/**
 * @file TextBlock.component.js
 * Exports a Text block component.
 */

import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import buttonStyles from '../../Atoms/Button/Button.css';
import inputStyles from '../../Atoms/Form/Form.css';
import styles from './TextBlock.css';

import ButtonLink from '../../Atoms/Button/ButtonLink.component';
import Icon from '../../Atoms/Svg/Icons.component';

const cx = classNames.bind(styles);

/**
 * Component that renders a Text Block.
 */
const TextBlock = ({
  alt,
  title,
  body,
  children,
  button,
  url,
  color,
  icon
}) => {
  const altClasses = element =>
    cx({
      [element]: true,
      [`${element}Alt`]: alt
    });

  return (
    <div className={altClasses('textBlock')}>
      <h3 className={altClasses('header')}>{title}</h3>
      <p className={altClasses('body')}>{body}</p>
      <div className={`${buttonStyles.btnWrap} ${inputStyles.inputWrap}`}>
        {children}
      </div>
      {button && (
        <ButtonLink className={styles.btn} url={url} color={color}>
          <Icon name={icon} inline className={styles.btnIcon} />
          <span className={styles.textLabel}>{button}</span>
        </ButtonLink>
      )}
    </div>
  );
};

TextBlock.propTypes = {
  alt: PropTypes.bool,
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  children: PropTypes.node,
  button: PropTypes.string,
  url: PropTypes.string,
  color: PropTypes.string,
  icon: PropTypes.string
};

TextBlock.defaultProps = {
  alt: false,
  children: [],
  button: null,
  url: null,
  color: null,
  icon: null
};

export default TextBlock;
