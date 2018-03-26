/**
 * @file List.component.js
 * Exports a simple list component.
 */

import React from 'react';
import PropTypes from 'prop-types';
import styles from './List.css';

/**
 * Component that renders a list.
 */
const List = ({ listItems }) => {
  const items = listItems.map(item => (
    <li className={styles.listItem} key={item.name}>
      <a className={styles.listLink} href={item.url}>
        {item.name}
      </a>
    </li>
  ));

  return <ul className={styles.list}>{items}</ul>;
};

List.propTypes = {
  listItems: PropTypes.arrayOf(PropTypes.object)
};

List.defaultProps = {
  listItems: {}
};

export default List;
