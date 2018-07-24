/**
 * @file Dropdown.component.js
 * Exports a dropdown component.
 */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Downshift from 'downshift';
import startCase from 'lodash/startCase';
import styles from './Dropdown.css';
import Button from '../../Atoms/Button/Button.component';
import Icon from '../../Atoms/Svg/Icons.component';

/**
 * Component that renders a Dropdown menu button.
 */
export default class Dropdown extends Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    children: PropTypes.node,
    onClick: PropTypes.func,
    url: PropTypes.string,
    color: PropTypes.oneOf(Button.colors),
    icon: PropTypes.string,
    className: PropTypes.string,
    iconClass: PropTypes.string,
    small: PropTypes.bool
  };

  static defaultProps = {
    children: [],
    color: Button.colors[0],
    url: null,
    onClick: () => {},
    icon: null,
    className: null,
    iconClass: null,
    small: false
  };

  render() {
    const {
      title,
      onClick,
      children,
      color,
      url,
      icon,
      className,
      iconClass,
      small
    } = this.props;

    return (
      <Downshift>
        {({ isOpen, getButtonProps }) => (
          <div className={`${styles.dropdownGrp} ${className && className}`}>
            <Button
              className={styles.btnGrp}
              href={url}
              color={color}
              onClick={onClick}
              small={small}
            >
              {icon ? (
                <Icon name={icon} inline className={iconClass} ariaHidden />
              ) : null}
              <span
                className={`${styles.textLabel} ${small &&
                  styles.textLabelMobile}`}
              >
                {title}
              </span>
            </Button>
            <Button
              {...getButtonProps()}
              className={`${styles[`btnDropdown${startCase(color)}`]} ${
                styles.btnHide
              }`}
              color={color}
              small={small}
              aria-label="Open Dropdown"
            />
            {isOpen ? <div className={styles.dropdown}>{children}</div> : null}
          </div>
        )}
      </Downshift>
    );
  }
}
