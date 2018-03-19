/**
 * @file Search.component.js
 * Exports a search form component.
 */

import React from 'react';
import styles from './Search.css';
import ButtonInput from '../../Atoms/Button/ButtonInput.component';

/**
 * Component that renders a Search form.
 */
const Search = () => (
  <div className={styles.search}>
    <input
      type="text"
      className={styles.searchText}
      placeholder="Search for..."
    />
    <ButtonInput value="Go!" className={styles.searchBtn} />
  </div>
);

export default Search;
