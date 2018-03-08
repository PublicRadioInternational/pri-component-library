/**
 * @file Button.component.js
 * Creates button component.
 */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './Button.css';
import globalStyles from '../../00_global/global.css';

/**
 * Component that renders a link, or a button with a click handler.
 */
export default class Button extends Component {
  static propTypes = {
    isHidden: PropTypes.bool,
    title: PropTypes.string.isRequired,
    url: PropTypes.string,
    ariaHaspopup: PropTypes.bool,
    ariaExpanded: PropTypes.bool,
    onClick: PropTypes.func,
    group: PropTypes.bool,
    dropdown: PropTypes.bool,
    color: PropTypes.oneOf(['Orange', 'White'])
  };

  static defaultProps = {
    isHidden: false,
    ariaHaspopup: false,
    ariaExpanded: false,
    url: null,
    color: 'White',
    group: false,
    dropdown: false,
    onClick: () => {}
  };

  render() {
    const {
      isHidden,
      title,
      url,
      color,
      ariaHaspopup,
      ariaExpanded,
      onClick,
      group,
      dropdown
    } = this.props;

    // Generate a class name based on the group, dropdown, and color values.
    const className = `btn${group ? 'Grp' : ''}${
      dropdown ? 'Dropdown' : ''
    }${color}`;

    // If a URL is provided, this button is simply a link.
    if (url) {
      return (
        <a href={url} className={styles[className]} onClick={() => onClick()}>
          <span className="text-label">{title}</span>
        </a>
      );
    }

    // No URL was specified, this button is not a link. Return a button instead.
    return (
      <button
        type="button"
        className={styles[className]}
        aria-haspopup={ariaHaspopup}
        aria-expanded={ariaExpanded}
        onClick={() => onClick()}
      >
        <span className={isHidden ? globalStyles.hidden : null}>{title}</span>
      </button>
    );
  }
}
