/**
 * @file MainMenu.component.js
 * Exports the main site menu.
 */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';

import styles from './MainMenu.css';

import ButtonLink from '../../Atoms/Button/ButtonLink.component';
import Icon from '../../Atoms/Svg/Icons.component';
import Accordion from '../../Molecules/Accordion/Accordion.component';
import Search from '../../Molecules/Search/Search.component';

const cx = classNames.bind(styles);

/**
 * Component that renders the main site menu.
 */
export default class MainMenu extends Component {
  static propTypes = {
    baseUrl: PropTypes.string,
    menus: PropTypes.shape({
      drawerMainNav: PropTypes.arrayOf(PropTypes.object),
      drawerSocailNav: PropTypes.arrayOf(PropTypes.object),
      drawerTopNav: PropTypes.arrayOf(PropTypes.object)
    })
  };

  static defaultProps = {
    baseUrl: 'https://www.pri.org/',
    menus: {}
  };

  render() {
    const {
      baseUrl,
      menus: { drawerTopNav, drawerMainNav, drawerSocialNav }
    } = this.props;
    const mainNavColors = ['Blue', 'Yellow', 'Green', 'Orange'];
    const iconViewBox = {
      facebook: '0 0 32 32',
      twitter: '0 0 32 32',
      rss: '3 3 20 20'
    };

    const topNavButtons =
      drawerTopNav &&
      drawerTopNav.map(({ name, url }) => (
        <ButtonLink
          color="Orange"
          className={styles.btnGroupBtn}
          url={url}
          key={name}
        >
          {name}
        </ButtonLink>
      ));

    const mainNavAccorcions =
      drawerMainNav &&
      drawerMainNav.map(({ name, children }, i) => (
        <Accordion
          accordionTitle={name}
          listId={name}
          color={mainNavColors[i % 4]}
          accordionList={children}
          key={name}
        />
      ));

    const socialNavItems =
      drawerSocialNav &&
      drawerSocialNav.map(({ name, url, icon, title }) => {
        const linkClasses = cx({
          socialMenuLink: true,
          [icon]: true
        });

        return (
          <li key={name}>
            <a className={linkClasses} href={url} title={title}>
              <span className={styles.socialMenuIcon}>
                <Icon
                  name={icon}
                  title={name}
                  fillColor="currentcolor"
                  className={styles.socialMenuSvg}
                  viewBox={iconViewBox[icon] || Icon.defaultProps.viewBox}
                />
              </span>
            </a>
          </li>
        );
      });

    return (
      <div className={styles.wrapper}>
        <Search baseUrl={baseUrl} />

        {topNavButtons && (
          <div className={styles.menuTopNav}>
            <div className={styles.btnGroup}>{topNavButtons}</div>
          </div>
        )}

        {mainNavAccorcions && (
          <div
            className={styles.menuMainNav}
            role="tablist"
            aria-multiselectable="true"
          >
            {mainNavAccorcions}
          </div>
        )}

        {socialNavItems && (
          <div className={styles.menuSocialNav}>
            <ul className={styles.socialMenu}>{socialNavItems}</ul>
          </div>
        )}
      </div>
    );
  }
}
