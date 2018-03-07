/**
 * @file Dropdown.component.js
 * Creates dropdown component.
 */

import React from 'react';
import PropTypes from 'prop-types';
import styles from './Dropdown.css';
import Button from '../Button/Button.component';

// const Dropdown = ({ items, btnTitle, isToggled }) => (
class Dropdown extends React.Component {
  constructor(props) {
    super(props);
    this.handleToggleChange = this.handleToggleChange.bind(this);
    this.state = { toggled: false };
  }
  handleToggleChange() {
    this.setState({ toggled: true });
  }
  render() {
    return (
      <div className={styles.btnGroup}>
        <Button
          dropdown={false}
          title={this.props.btnTitle}
          url="#"
          className="btnGrpOrange"
          ariaHaspopup
          ariaExpanded={false}
        />
        <Button
          button
          dropdown
          title="Toggle Dropdown"
          url="#"
          className="btnDropdownOrange"
          ariaHaspopup
          ariaExpanded={false}
          isToggleOn={this.state.toggled}
        />
        <div className={styles.dropdown} data-toggled={this.handleToggleChange}>
          {this.props.items.map(item => (
            <a className={styles.dropdownItem} href={item.url}>
              {item.title}
            </a>
          ))}
        </div>
      </div>
    );
  }
}

Dropdown.propTypes = {
  items: PropTypes.arrayOf.isRequired,
  btnTitle: PropTypes.string.isRequired
};

export default Dropdown;
