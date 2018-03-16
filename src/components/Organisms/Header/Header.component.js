/**
 * @file Header.component.js
 * Exports the site header.
 */

import React from 'react';
import styles from './Header.css';
import Icon from '../../Atoms/Icon/Icon.component';
import Dropdown from '../../Molecules/Dropdown/Dropdown.component';
import DropdownItem from '../../Atoms/DropdownItem/DropdownItem.component';
// SVGs
import pri from '../../Atoms/Icon/svg/pri.svg';
import play from '../../Atoms/Icon/svg/play.svg';
import envelope from '../../Atoms/Icon/svg/envelope.svg';
import search from '../../Atoms/Icon/svg/search.svg';
import heart from '../../Atoms/Icon/svg/heart.svg';

/**
 * Component that renders a link, or a button with a click handler.
 */
const Header = () => (
  <header className={styles.siteHeader}>
    <a href="/" className={styles.logo}>
      <Icon svg={pri} title="PRI" />
    </a>

    <div className={styles.buttons}>
      <Dropdown
        url="https://www.pri.org/listen"
        title="Listen"
        svg={play}
        className={`${styles.button}`}
        small
      >
        <DropdownItem url="https://www.pri.org/listen">
          Live Stream
        </DropdownItem>
        <DropdownItem url="https://www.pri.org/podcasts-program">
          Podcasts by Program
        </DropdownItem>
        <DropdownItem url="https://www.pri.org/ways-listen">
          Ways to Listen
        </DropdownItem>
        <DropdownItem />
        <DropdownItem url="https://www.pri.org/shows">
          All Programs & Podcasts
        </DropdownItem>
      </Dropdown>

      <Dropdown
        url="https://www.pri.org/newsletters"
        title="Newsletters"
        svg={envelope}
        className={styles.button}
        small
      >
        <DropdownItem heading="Daily Newsletters" />
        <DropdownItem url="https://www.pri.org/get-scan-your-inbox-each-weekday">
          The Scan
        </DropdownItem>
        <DropdownItem />
        <DropdownItem heading="Weekly Newsletters" />
        <DropdownItem url="https://www.pri.org/subscribe-across-womens-lives-weekly-newsletter">
          Across Women{"'"}s Lives
        </DropdownItem>
        <DropdownItem url="https://www.pri.org/subscribe-global-nation-newsletter">
          Global Nation
        </DropdownItem>
        <DropdownItem url="https://www.pri.org/subscribe-safemode-weekly-digest">
          Global Security
        </DropdownItem>
        <DropdownItem />
        <DropdownItem url="https://www.pri.org/user/me/newsletters">
          Manage My Newsletters
        </DropdownItem>
      </Dropdown>

      <Dropdown
        url="https://interactive-dev.pri.org/staging/prototypes/homepage/iteration-2.html#"
        title="Search"
        svg={search}
        className={styles.button}
        small
      >
        <DropdownItem>Search</DropdownItem>
      </Dropdown>

      <Dropdown
        url="https://interactive-dev.pri.org/staging/prototypes/homepage/iteration-2.html#"
        title="Donate"
        color="Orange"
        svg={heart}
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
        <DropdownItem />
        <DropdownItem url="https://interactive-dev.pri.org/staging/prototypes/homepage/iteration-2.html#">
          Manage My Donations
        </DropdownItem>
      </Dropdown>
    </div>
  </header>
);

export default Header;
