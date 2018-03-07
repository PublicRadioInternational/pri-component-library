/**
 * @file Dropdown.component.js
 * Creates dropdown component.
 */

import React from 'react';
import PropTypes from 'prop-types';
import styles from './Dropdown.css';

const Dropdown = ({ item, className }) => (
  <div className="dropdown">
    <button
      type="button"
      className={styles[className]}
      dataToggle="dropdown"
      ariaHaspopup="true"
      ariaExpanded="false"
    >
      <span className="sr-only">Toggle Dropdown</span>
    </button>
    <div className="dropdown-menu dropdown-menu-right">
      <a className="dropdown-item" href="{item.url}">
        {item.title}
      </a>
    </div>
  </div>
);

Dropdown.propTypes = {
  className: PropTypes.string.isRequired,
  item: PropTypes.arrayOf.isRequired
};

export default Dropdown;
