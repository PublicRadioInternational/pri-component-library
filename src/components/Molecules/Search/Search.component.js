/**
 * @file Search.component.js
 * Exports a search form component.
 */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './Search.css';
import ButtonInput from '../../Atoms/Button/ButtonInput.component';

/**
 * Component that renders a Search form.
 */
export default class Search extends Component {
  static propTypes = {
    baseUrl: PropTypes.string
  };

  static defaultProps = {
    baseUrl: 'https://www.pri.org'
  };

  constructor(props) {
    super(props);
    this.state = {
      searchFieldValue: null
    };
    this.handleFieldUpdate = this.handleFieldUpdate.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
  }

  /**
   * Handles field update actions.
   *
   * @param {object} event - Event object from action.
   */
  handleFieldUpdate = event => {
    event.persist();
    this.setState(() => ({
      searchFieldValue: event.target.value || null
    }));
  };

  /**
   * Handles search form submit.
   *
   * @param {object} event - Event object from action.
   */
  handleFormSubmit = event => {
    event.preventDefault();
    const { searchFieldValue } = this.state;
    const { baseUrl } = this.props;

    // TODO: Once the search page is built out in the new frontend, this should
    // be adjusted such that it uses the correct routing methods.
    window.location.href = `${baseUrl}/search/node?search_api_views_fulltext=${searchFieldValue}`;
  };

  render() {
    return (
      <form className={styles.search} onSubmit={this.handleFormSubmit}>
        <input
          type="text"
          className={styles.searchText}
          placeholder="Search for..."
          onChange={this.handleFieldUpdate}
        />
        <ButtonInput value="Go!" className={styles.searchBtn} />
      </form>
    );
  }
}
