/**
 * @file Header.component.js
 * Exports the site header.
 */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './Header.css';
import Icon from '../../Atoms/Svg/Icons.component';
import PriLogo from '../../Atoms/Svg/PriLogo.component';
import MainMenu from './MainMenu.component';
import ButtonLink from '../../Atoms/Button/ButtonLink.component';

const cx = classNames.bind(styles);

/**
 * Component that renders the header.
 */
export default class Header extends Component {
  state = { isMenuOpen: false };

  toggleOpen = () => {
    this.setState(prevState => ({
      isMenuOpen: !prevState.isMenuOpen
    }));
  };

  render() {
    const { baseUrl, menus } = this.props;
    const { headerNav } = menus;
    const drawerClasses = cx({
      drawer: true,
      drawerOpen: this.state.isMenuOpen
    });
    const bgClasses = cx({
      drawerBg: true,
      drawerBgOpen: this.state.isMenuOpen
    });

    const headerNavButtons =
      headerNav &&
      headerNav.map(({ name, url, icon, color }) => {
        const buttonClasses = cx({
          button: true,
          buttonHasIcon: icon
        });
        return (
          <ButtonLink
            className={buttonClasses}
            color={color}
            url={url}
            key={name}
          >
            {icon && <Icon name={icon} className={styles.buttonIcon} />} {name}
          </ButtonLink>
        );
      });

    return (
      <header className={styles.siteHeader}>
        <button
          className={bgClasses}
          onClick={this.toggleOpen}
          aria-label="Close Overlay"
        />
        <div className={drawerClasses}>
          <button className={styles.drawerClose} onClick={this.toggleOpen}>
            <Icon name="left" viewBox="0 0 21 25" ariaHidden />
            Close
          </button>

          <MainMenu menus={menus} baseUrl={baseUrl} />
        </div>

        <div className={`${styles.menuToggle}`}>
          <button
            className={styles.menuBtn}
            onClick={this.toggleOpen}
            aria-label="Open Menu"
          >
            <Icon name="menu" className={styles.menuIcon} viewBox="5 5 15 14" />
          </button>
        </div>

        <div className={styles.branding}>
          <a href="/" className={styles.logo}>
            <PriLogo title="PRI" className={styles.siteLogo} />
          </a>
        </div>

        <div className={styles.buttons}>{headerNavButtons}</div>
      </header>
    );
  }
}

Header.propTypes = {
  baseUrl: PropTypes.string,
  menus: PropTypes.shape({
    headerNav: PropTypes.arrayOf(PropTypes.object),
    drawerMainNav: PropTypes.arrayOf(PropTypes.object),
    drawerSocailNav: PropTypes.arrayOf(PropTypes.object),
    drawerTopNav: PropTypes.arrayOf(PropTypes.object)
  })
};

Header.defaultProps = {
  baseUrl: 'https://www.pri.org',
  menus: {}
};
