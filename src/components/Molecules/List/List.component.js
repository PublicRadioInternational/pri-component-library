/**
 * @file List.component.js
 * Exports a simple list component.
 */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './List.css';

/**
 * Component that renders a list.
 */
export default class List extends Component {
  static propTypes = {
    listItems: PropTypes.arrayOf(PropTypes.object),
    className: PropTypes.string,
    ulClass: PropTypes.string,
    liClass: PropTypes.string,
    linkClass: PropTypes.string,
    role: PropTypes.string,
    ariaLabelledby: PropTypes.string,
    reveal: PropTypes.bool,
    classNameOpen: PropTypes.string
  };

  static defaultProps = {
    listItems: {},
    className: null,
    ulClass: null,
    liClass: null,
    linkClass: null,
    role: null,
    ariaLabelledby: null,
    reveal: false,
    classNameOpen: null
  };

  render() {
    const {
      listItems,
      className,
      role,
      ariaLabelledby,
      ulClass,
      liClass,
      linkClass,
      reveal,
      classNameOpen
    } = this.props;

    const items = listItems.map(item => (
      <li className={`${styles.listItem} ${liClass}`} key={item.name}>
        <a className={`${styles.listLink} ${linkClass}`} href={item.url}>
          {item.name}
        </a>
      </li>
    ));
    return (
      <div
        className={`${className} ${reveal === true ? classNameOpen : ''}`}
        role={role}
        aria-labelledby={ariaLabelledby}
      >
        <ul className={`${styles.list} ${ulClass}`}>{items}</ul>
      </div>
    );
  }
}
