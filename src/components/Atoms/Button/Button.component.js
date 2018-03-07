/**
 * @file Button.component.js
 * Creates button component.
 */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './Button.css';
import { Dropdown } from '../Dropdown/Dropdown.component';

/**
 * Renders a classic button.
 */
class Button extends Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    dropdown: PropTypes.bool,
    className: PropTypes.oneOf(['btn', 'btnOrange'])
  };

  static defaultProps = {
    dropdown: false,
    className: 'btn'
  };

  /**
   * Renders the button element.
   *
   * @returns {object} Renderable JSX.
   */
  renderButton = () => {
    const { title, url, className } = this.props;
    return (
      <a href={url} className={styles[className]}>
        <span className="text-label">{title}</span>
      </a>
    );
  };

  /**
   * Renders the dropdown element.
   *
   * @returns {object} Renderable JSX.
   */
  renderDropDown = () => {
    const { title, url, className } = this.props;
    return (
      <div className="btn-group">
        <a href={url} className={styles[className]}>
          <span className="oi oi-media-play" ariaHidden="true" />
          <span className="text-label">{title}</span>
        </a>
        <Dropdown />
      </div>
    );
  };

  render() {
    const { dropdown } = this.props;
    if (dropdown) {
      return this.renderDropdown();
    }

    return this.renderButton();
  }
}

export default Button;
