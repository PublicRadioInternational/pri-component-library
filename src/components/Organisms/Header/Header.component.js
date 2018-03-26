/**
 * @file Header.component.js
 * Exports the site header.
 */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './Header.css';
import Icon from '../../Atoms/Svg/Icons.component';
import PriLogo from '../../Atoms/Svg/PriLogo.component';
import Dropdown from '../../Molecules/Dropdown/Dropdown.component';
import DropdownItem from '../../Atoms/DropdownItem/DropdownItem.component';
import Search from '../../Molecules/Search/Search.component';
import MainMenu from './MainMenu.component';

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
    const { baseUrl } = this.props;
    return (
      <header className={styles.siteHeader}>
        <button
          className={`${styles.bg} ${this.state.isMenuOpen && styles.bgOpen}`}
          onClick={this.toggleOpen}
        />
        <div
          className={`${styles.mainMenu} ${this.state.isMenuOpen &&
            styles.mainMenuOpen}`}
        >
          <MainMenu toggleOpen={this.toggleOpen} />
        </div>
        <div>
          <button className={styles.menuBtn} onClick={this.toggleOpen}>
            <Icon name="menu" className={styles.menuIcon} />
          </button>
          <a href="/" className={styles.logo}>
            <PriLogo title="PRI" className={styles.siteLogo} />
          </a>
        </div>

        <div className={styles.buttons}>
          <Dropdown
            url={`${baseUrl}/listen`}
            title="Listen"
            className={styles.button}
            iconClass={styles.mobileSmallIcon}
            small
            icon="play"
          >
            <DropdownItem url={`${baseUrl}/listen`}>Live Stream</DropdownItem>
            <DropdownItem url={`${baseUrl}/podcasts-program`}>
              Podcasts by Program
            </DropdownItem>
            <DropdownItem url={`${baseUrl}/ways-listen`}>
              Ways to Listen
            </DropdownItem>
            <DropdownItem isHr />
            <DropdownItem url={`${baseUrl}/shows`}>
              All Programs & Podcasts
            </DropdownItem>
          </Dropdown>

          <Dropdown
            url={`${baseUrl}/newsletters`}
            title="Newsletters"
            className={`${styles.button} ${styles.newsletterBtn}`}
            iconClass={styles.mobileSmallIcon}
            small
            icon="envelope"
          >
            <DropdownItem heading="Daily Newsletters" />
            <DropdownItem url={`${baseUrl}/get-scan-your-inbox-each-weekday`}>
              The Scan
            </DropdownItem>
            <DropdownItem isHr />
            <DropdownItem heading="Weekly Newsletters" />
            <DropdownItem
              url={`${baseUrl}/subscribe-across-womens-lives-weekly-newsletter`}
            >
              Across Women{"'"}s Lives
            </DropdownItem>
            <DropdownItem url={`${baseUrl}/subscribe-global-nation-newsletter`}>
              Global Nation
            </DropdownItem>
            <DropdownItem url={`${baseUrl}/subscribe-safemode-weekly-digest`}>
              Global Security
            </DropdownItem>
            <DropdownItem isHr />
            <DropdownItem url={`${baseUrl}/user/me/newsletters`}>
              Manage My Newsletters
            </DropdownItem>
          </Dropdown>

          <Dropdown
            url={`${baseUrl}search/node`}
            title="Search"
            className={styles.button}
            iconClass={styles.mobileSmallIcon}
            small
            icon="search"
          >
            <DropdownItem>
              <Search baseUrl={baseUrl} />
            </DropdownItem>
          </Dropdown>

          <Dropdown
            url="https://interactive-dev.pri.org/staging/prototypes/homepage/iteration-2.html#"
            title="Donate"
            color="Orange"
            className={styles.button}
            iconClass={styles.mobileSmallIcon}
            small
            icon="heart"
          >
            <DropdownItem
              url={`${baseUrl}/donate/index.html?utm_source=navigation&utm_medium=website&utm_campaign=donations`}
            >
              Give Now
            </DropdownItem>
            <DropdownItem url="https://interactive-dev.pri.org/staging/prototypes/homepage/iteration-2.html#">
              Donor Benefits
            </DropdownItem>
            <DropdownItem url="https://interactive-dev.pri.org/staging/prototypes/homepage/iteration-2.html#">
              Annual Report
            </DropdownItem>
            <DropdownItem url="https://interactive-dev.pri.org/staging/prototypes/homepage/iteration-2.html#">
              Donation FAQ
            </DropdownItem>
          </Dropdown>
        </div>
      </header>
    );
  }
}

Header.propTypes = {
  baseUrl: PropTypes.string
};

Header.defaultProps = {
  baseUrl: 'https://www.pri.org'
};
