/**
 * @file Dropdown.component.js
 * Exports a dropdown component.
 */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './Dropdown.css';
import Button from '../Button/Button.component';

/**
 * Component that renders a Dropdown menu button.
 */
export default class Dropdown extends Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    children: PropTypes.arrayOf(PropTypes.object),
    onClick: PropTypes.func,
    color: PropTypes.oneOf(['Orange', 'White'])
  };

  static defaultProps = {
    children: [],
    color: 'White',
    onClick: () => {}
  };

  /**
   * Constructs this class and sets up default state.
   *
   * @param {object} props - Property values for this component.
   */
  constructor(props) {
    super(props);
    this.state = { isOpen: false };
  }

  /**
   * Toggles open state.
   */
  handleToggle() {
    this.setState(prevState => ({
      isOpen: !prevState.isOpen
    }));
  }

  render() {
    const { title, onClick, children, color } = this.props;
    const { isOpen } = this.state;

    return (
      <div className={styles.dropdownGrp}>
        <Button
          group
          ariaHaspopup
          title={title}
          color={color}
          onClick={() => onClick()}
        />
        <Button
          isHidden
          dropdown
          ariaHaspopup
          color={color}
          ariaExpanded={false}
          title={`Toggle ${title} Dropdown`}
          onClick={() => this.handleToggle()}
        />
        <div className={styles.dropdown} data-open={isOpen}>
          {children}
        </div>
      </div>
    );
  }
}
