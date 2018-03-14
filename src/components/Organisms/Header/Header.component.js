/**
 * @file Header.component.js
 * Exports the site header.
 */

import React from 'react';
// import PropTypes from 'prop-types';
import { action } from '@storybook/addon-actions';
import styles from './Header.css';
import Icon from '../../Atoms/Icon/Icon.component';
import Dropdown from '../../Molecules/Dropdown/Dropdown.component';
import DropdownItem from '../../Atoms/DropdownItem/DropdownItem.component';

/**
 * Component that renders a link, or a button with a click handler.
 */
function Header() {
  return (
    <header className={styles.siteHeader}>
      <a href="/" className={styles.logo}>
        <Icon svg="pri" />
      </a>

      <div className={styles.buttons}>
        <Dropdown
          url="https://www.pri.org/listen"
          title="Listen"
          onClick={action('drowndown-button-clicked')}
          icon="play"
          className={`${styles.button}`}
          small
        >
          <DropdownItem url="https://www.pri.org/listen">
            Live Stream
          </DropdownItem>
          <DropdownItem url="https://interactive-dev.pri.org/staging/prototypes/homepage/iteration-2.html#">
            Latest Episodes
          </DropdownItem>
          <DropdownItem url="https://www.pri.org/music-heard-on-air">
            Music Heard on the Air
          </DropdownItem>
          <DropdownItem url="https://www.pri.org/podcasts-program">
            Podcasts by Program
          </DropdownItem>
          <DropdownItem url="https://www.pri.org/ways-listen">
            Ways to Listen
          </DropdownItem>
          <DropdownItem url="https://www.pri.org/shows">
            All Programs & Podcasts
          </DropdownItem>
        </Dropdown>

        <Dropdown
          url="https://www.pri.org/newsletters"
          title="Newsletters"
          onClick={action('drowndown-button-clicked')}
          icon="envelope"
          className={styles.button}
          small
        >
          <DropdownItem url="https://www.pri.org/listen">
            Live Stream
          </DropdownItem>
          <DropdownItem url="https://www.pri.org/get-scan-your-inbox-each-weekday">
            The Scan
          </DropdownItem>
          <DropdownItem url="https://www.pri.org/subscribe-across-womens-lives-weekly-newsletter">
            Across Women{"'"}s Lives
          </DropdownItem>
          <DropdownItem url="https://www.pri.org/subscribe-global-nation-newsletter">
            Global Nation
          </DropdownItem>
          <DropdownItem url="https://www.pri.org/subscribe-safemode-weekly-digest">
            Global Security
          </DropdownItem>
          <DropdownItem url="https://www.pri.org/user/me/newsletters">
            Manage My Newsletters
          </DropdownItem>
        </Dropdown>

        <Dropdown
          url="https://interactive-dev.pri.org/staging/prototypes/homepage/iteration-2.html#"
          title="Search"
          onClick={action('drowndown-button-clicked')}
          icon="search"
          className={styles.button}
          small
        >
          <DropdownItem>Search</DropdownItem>
        </Dropdown>

        <Dropdown
          url="https://interactive-dev.pri.org/staging/prototypes/homepage/iteration-2.html#"
          title="Donate"
          color="Orange"
          onClick={action('drowndown-button-clicked')}
          icon="heart"
          className={styles.button}
          small
        >
          <DropdownItem url="https://www.pri.org/donate/index.html?utm_source=navigation&utm_medium=website&utm_campaign=donations">
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
          <DropdownItem url="https://interactive-dev.pri.org/staging/prototypes/homepage/iteration-2.html#">
            Manage My Donations
          </DropdownItem>
        </Dropdown>
      </div>
    </header>
  );
}

export default Header;
