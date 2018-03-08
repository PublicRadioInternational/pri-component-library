/**
 * @file Button.component.js
 * Creates button component.
 */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './Button.css';
import globalStyles from '../../00_global/global.css';

function ifHidden(hidden, title) {
  if (hidden) {
    return <span className={globalStyles.hidden}>{title}</span>;
  }
  return { title };
}

class Button extends Component {
  static propTypes = {
    isHidden: PropTypes.bool,
    title: PropTypes.string.isRequired,
    url: PropTypes.string,
    className: PropTypes.string.isRequired,
    ariaHaspopup: PropTypes.bool,
    ariaExpanded: PropTypes.bool,
    handleClick: PropTypes.func
  };

  static defaultProps = {
    isHidden: false,
    ariaHaspopup: false,
    ariaExpanded: false,
    url: false,
    handleClick: () => {},
  };

  render() {
    const {
      isHidden,
      title,
      url,
      className,
      ariaHaspopup,
      ariaExpanded,
      handleClick
    } = this.props;

    // If a URL is provided, this button is simply a link.
    if (url) {
      return (
        <a href={url} className={styles[className]} onClick={() => handleClick()}>
          <span className="text-label">{title}</span>
        </a>
      );
    }

    // No URL was specified, this button is not a link. Return a button with 
    return (
      <button
        type="button"
        className={styles[className]}
        aria-haspopup={ariaHaspopup}
        aria-expanded={ariaExpanded}
        onClick={() => handleToggle()}
      >
        {ifHidden(isHidden, title)}
      </button>
    );
  }
}

export default Button;
