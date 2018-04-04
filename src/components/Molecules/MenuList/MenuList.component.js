/**
 * @file MenuList.component.js
 * Exports a menu list component.
 */

import React from 'react';
import PropTypes from 'prop-types';
import styles from './MenuList.css';

import List from '../../Molecules/List/List.component';

/**
 * Component that renders a Card List.
 */
const MenuList = ({ menuListItems, label }) => (
  <List
    title={label}
    className={styles.menuList}
    titleClass={styles.menuListtitle}
    liClass={styles.menuListItem}
    linkClass={styles.menuListLink}
    listItems={menuListItems}
  />
);

MenuList.propTypes = {
  menuListItems: PropTypes.arrayOf(PropTypes.object),
  label: PropTypes.string
};

MenuList.defaultProps = {
  menuListItems: [],
  label: null
};

export default MenuList;
