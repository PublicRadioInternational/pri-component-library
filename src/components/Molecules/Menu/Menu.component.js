/**
 * @file Menu.component.js
 * Exports a menu component.
 */

import React from 'react';
import PropTypes from 'prop-types';
import styles from './Menu.css';

/**
 * Component that renders a menu.
 */
const Menu = ({ menuItems }) => {
  const listItems = menuItems.map(listItem => (
    <li className={styles.menuItem} key={listItem.name}>
      <a className={styles.menuLink} href={listItem.url}>
        {listItem.name}
      </a>
    </li>
  ));

  return <ul className={styles.menu}>{listItems}</ul>;
};

Menu.propTypes = {
  menuItems: PropTypes.arrayOf(PropTypes.object)
};

Menu.defaultProps = {
  menuItems: {}
};

export default Menu;
