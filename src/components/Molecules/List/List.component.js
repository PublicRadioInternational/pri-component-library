/**
 * @file List.component.js
 * Exports a simple list component.
 */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './List.css';

const cx = classNames.bind(styles);

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

    const listWrapClasses = cx({
      [className]: className && className,
      [classNameOpen]: reveal === true
    });

    const items = listItems.map(item => (
      <li className={`${styles.listItem} ${liClass}`} key={item.name}>
        <a className={`${styles.listLink} ${linkClass}`} href={item.url}>
          {item.name}
        </a>
      </li>
    ));
    return (
      <div
        className={listWrapClasses}
        role={role}
        aria-labelledby={ariaLabelledby}
      >
        <ul className={`${styles.list} ${ulClass}`}>{items}</ul>
      </div>
    );
  }
}
