/**
 * @file Dropdown.component.js
 * Exports a dropdown component.
 */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Downshift from 'downshift';
import styles from './Dropdown.css';
import ButtonLink from '../../Atoms/Button/ButtonLink.component';
import Button from '../../Atoms/Button/Button.component';
import Icon from '../../Atoms/Icon/Icon.component';

/**
 * Component that renders a Dropdown menu button.
 */
export default class Dropdown extends Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    children: PropTypes.node,
    onClick: PropTypes.func,
    url: PropTypes.string,
    color: PropTypes.oneOf(['Orange', 'White']),
    svg: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
    className: PropTypes.string,
    small: PropTypes.bool
  };

  static defaultProps = {
    children: [],
    color: 'White',
    url: null,
    onClick: () => {},
    svg: null,
    className: null,
    small: false
  };

  render() {
    const {
      title,
      onClick,
      children,
      color,
      url,
      svg,
      className,
      small
    } = this.props;

    return (
      <Downshift>
        {({ isOpen, getButtonProps }) => (
          <div className={`${styles.dropdownGrp} ${className && className}`}>
            <ButtonLink
              className={styles.btnGrp}
              url={url}
              color={color}
              onClick={onClick}
              small={small}
            >
              {svg ? <Icon svg={svg} inline aria-hidden /> : null}
              <span
                className={`${styles.textLabel} ${small &&
                  styles.textLabelMobile}`}
              >
                {title}
              </span>
            </ButtonLink>
            <Button
              {...getButtonProps()}
              className={`${styles[`btnDropdown${color}`]} ${styles.btnHide}`}
              color={color}
              small={small}
            />
            {isOpen ? <div className={styles.dropdown}>{children}</div> : null}
          </div>
        )}
      </Downshift>
    );
  }
}
