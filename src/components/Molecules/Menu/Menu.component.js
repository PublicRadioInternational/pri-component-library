/**
 * @file Menu.component.js
 * Exports a menu component.
 */

import React from 'react';
import styles from './Menu.css';

/**
 * Component that renders a menu.
 */
const Menu = () => {
  const menuItems = [];
  const listItems = menuItems.map(listItem => (
    <li className={styles.menuItem}>
      <a className={styles.menuLink} href={listItem.url}>
        {listItem.name}
      </a>
    </li>
  ));
  return <ul className={styles.menu}>{listItems}</ul>;
};

export default Menu;
