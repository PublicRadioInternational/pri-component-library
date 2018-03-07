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
    this.setState(prevState => ({
      toggled: !prevState.toggled
    }));
  }
  render() {
    return (
      <div className={styles.btnGroup}>
        <Button
          hidden={false}
          title={this.props.btnTitle}
          url="#"
          className="btnGrpOrange"
          ariaHaspopup
          ariaExpanded={false}
        />
        <Button
          button
          hidden
          title="Toggle Dropdown"
          url="#"
          className="btnDropdownOrange"
          ariaHaspopup
          ariaExpanded={false}
          toggled={this.handleToggleChange}
        />
        <div
          className={styles.dropdown}
          data-toggled={this.state.toggled ? 'toggled' : null}
        >
          {this.props.items.map(item => (
            <a className={styles.dropdownItem} href={item.url} key={item.id}>
              {item.title}
            </a>
          ))}
        </div>
      </div>
    );
  }
}

Dropdown.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
  btnTitle: PropTypes.string.isRequired
};

export default Dropdown;
