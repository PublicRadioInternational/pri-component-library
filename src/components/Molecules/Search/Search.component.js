/**
 * @file Search.component.js
 * Exports a search form component.
 */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';

import styles from './Search.css';

import Icon from '../../Atoms/Svg/Icons.component';

const cx = classNames.bind(styles);

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
      searchFieldValue: event.target.value
    }));
  };

  /**
   * Handles search form submit.
   *
   * @param {object} event - Event object from action.
   */
  handleFormSubmit = event => {
    const { searchFieldValue } = this.state;
    const { baseUrl } = this.props;
    const actionStr = `${baseUrl}/search/google/${encodeURIComponent(
      searchFieldValue
    )}`;

    event.target.setAttribute('action', actionStr);
  };

  render() {
    const { searchFieldValue } = this.state;
    const searchClasses = cx({
      search: true,
      hasValue: searchFieldValue
    });
    return (
      <div className={searchClasses}>
        <form
          className={styles.searchForm}
          method="POST"
          onSubmit={this.handleFormSubmit}
        >
          <label htmlFor="search__field" className={styles.searchLabel}>
            Search
          </label>
          <input
            type="text"
            className={styles.searchInput}
            onChange={this.handleFieldUpdate}
            id="search__field"
          />
          <button type="submit" className={styles.searchBtn}>
            <Icon name="search" className={styles.searchIcon} />
          </button>
        </form>
      </div>
    );
  }
}
