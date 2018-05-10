/**
 * @file CardList.component.js
 * Exports a card list component.
 */

import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './CardList.css';

import Section from '../Content/Section.component';

const cx = classNames.bind(styles);

/**
 * Component that renders a Card List.
 */
const CardList = ({ name, id, children, url, logo, title }) => {
  const cardClasses = cx({
    list: true,
    [name]: styles[name]
  });

  const headerContent = (
    <React.Fragment>
      {logo && <img src={logo} alt="" className={styles.logo} />}
      {title}
    </React.Fragment>
  );

  return (
    <Section className={cardClasses}>
      <header id={id} className={styles.header}>
        {(url && (
          <a href={url} className={styles.logoLink}>
            {headerContent}
          </a>
        )) ||
          headerContent}
      </header>
      {children}
    </Section>
  );
};

CardList.propTypes = {
  name: PropTypes.string,
  id: PropTypes.string,
  children: PropTypes.node,
  url: PropTypes.string,
  logo: PropTypes.string,
  title: PropTypes.string
};

CardList.defaultProps = {
  name: null,
  id: null,
  children: [],
  url: null,
  logo: null,
  title: null
};

export default CardList;
