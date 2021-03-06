/**
 * @file CardList.component.js
 * Exports a card list component.
 */

import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './CardList.css';

const cx = classNames.bind(styles);

/**
 * Component that renders a Card List.
 */
const CardList = ({ name, id, children, url, title }) => {
  const cardClasses = cx({
    list: true,
    [name]: styles[name]
  });

  const headerContent = <React.Fragment>{title}</React.Fragment>;

  return (
    <section id={id} className={cardClasses}>
      {title && (
        <header className={styles.header}>
          {(url && <a href={url}>{headerContent}</a>) || headerContent}
        </header>
      )}
      {children}
    </section>
  );
};

CardList.propTypes = {
  name: PropTypes.string,
  id: PropTypes.string,
  children: PropTypes.node,
  url: PropTypes.string,
  title: PropTypes.string
};

CardList.defaultProps = {
  name: null,
  id: null,
  children: [],
  url: null,
  title: null
};

export default CardList;
