/**
 * @file MainMenu.component.js
 * Exports the main site menu.
 */

import React, { Component } from 'react';
import PropTypes from 'prop-types';

import styles from './MainMenu.css';

import Icon from '../../Atoms/Svg/Icons.component';
import PriLogo from '../../Atoms/Svg/PriLogo.component';
import ButtonLink from '../../Atoms/Button/ButtonLink.component';
import Accordion from '../../Molecules/Accordion/Accordion.component';

/**
 * Component that renders the main site menu.
 */
export default class MainMenu extends Component {
  static propTypes = {
    toggleOpen: PropTypes.func,
    baseUrl: PropTypes.string
  };

  static defaultProps = {
    toggleOpen: () => {},
    baseUrl: 'https://www.pri.org/'
  };

  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.props.toggleOpen();
  }

  render() {
    const { baseUrl } = this.props;
    return (
      <div className={`${styles.wrapper}`}>
        <div className={styles.header}>
          <button className={styles.closeMenu} onClick={this.handleClick}>
            <Icon name="left" inline ariaHidden className={styles.inlineLink} />
            Close
          </button>
          <div className={styles.headerText}>
            <div className={styles.headerLogo}>
              <PriLogo
                fillColor="#fff"
                title="PRI"
                className={styles.maxWidth}
              />
            </div>
            <p>
              Our mission is to serve audiences as a distinctive content source
              for information, insights and cultural experiences essential to
              living in our diverse, interconnected world.
            </p>
            <div className={styles.btnGroup}>
              <ButtonLink
                color="orange"
                className={styles.btnHeaderLeft}
                url={`${baseUrl}about-pri`}
              >
                <Icon name="info" inline ariaHidden />
                Our Story
              </ButtonLink>
              <ButtonLink
                color="orange"
                className={styles.btnHeaderMiddle}
                url={`${baseUrl}priorg-contact`}
              >
                <Icon name="envelope" inline ariaHidden />
                Contact Us
              </ButtonLink>
              <ButtonLink
                color="orange"
                className={styles.btnHeaderRight}
                url={`${baseUrl}donate/index.html?utm_source=navigation&amp;utm_medium=website&amp;utm_campaign=donations`}
              >
                <Icon name="heart" inline ariaHidden />
                Donate
              </ButtonLink>
            </div>
          </div>
        </div>
        <div
          className={styles.accordionMenu}
          role="tablist"
          aria-multiselectable="true"
        >
          <Accordion
            color="Blue"
            accordionTitle="News Programs"
            listId="NewsMenu"
            accordionList={[
              {
                name: 'America Abroad',
                url: `${baseUrl}programs/america-abroad`
              },
              {
                name: 'As it Happens',
                url: `${baseUrl}programs/it-happens`
              },
              {
                name: 'Boston Calling',
                url: `${baseUrl}programs/boston-calling`
              },
              {
                name: 'Day 6',
                url: `${baseUrl}programs/day-6`
              },
              {
                name: 'Innovation Hub',
                url: `${baseUrl}programs/innovation-hub`
              },
              {
                name: 'Living on Earth',
                url: `${baseUrl}programs/living-earth`
              },
              {
                name: "PRI's The World",
                url: `${baseUrl}programs/the-world`
              },
              { name: 'The Takeaway', url: `${baseUrl}programs/takeaway` }
            ]}
          />
          <Accordion
            color="Yellow"
            accordionTitle="Music & Variety Programs"
            listId="MusicVarietyMenu"
            accordionList={[
              {
                name: 'Afropop Worldwide',
                url: `${baseUrl}programs/afropop-worldwide`
              },
              {
                name: 'Echoes',
                url: `${baseUrl}programs/echoes`
              },
              {
                name: 'Jazz After Hours',
                url: `${baseUrl}programs/jazz-after-hours`
              },
              {
                name: 'Live Wire',
                url: `${baseUrl}programs/live-wire`
              },
              {
                name: 'On Story',
                url: `${baseUrl}programs/on-story`
              },
              {
                name: 'Out in the Open',
                url: `${baseUrl}programs/out-open`
              },
              {
                name: 'Pittsburgh Symphony Orchestra',
                url: `${baseUrl}programs/pittsburgh-symphony-orchestra`
              },
              {
                name: 'q from the CBC',
                url: `${baseUrl}programs/selected-shorts`
              },
              { name: 'Studio 360', url: `${baseUrl}programs/studio-360` }
            ]}
          />
          <Accordion
            color="Green"
            accordionTitle="Podcasts"
            listId="PodcastsMenu"
            accordionList={[
              {
                name: "LBJ's War",
                url: `${baseUrl}programs/lbjs-war`
              },
              {
                name: 'Otherhood',
                url: `${baseUrl}programs/otherhood`
              },
              {
                name: 'Podcast Playlist',
                url: `${baseUrl}programs/podcast-playlist`
              },
              {
                name: 'The Science of Happiness',
                url: `${baseUrl}programs/science-happiness`
              },
              {
                name: 'The World in Words',
                url: `${baseUrl}programs/world-words`
              },
              {
                name: 'Things That Go Boom',
                url: `${baseUrl}programs/things-go-boom`
              }
            ]}
          />
          <Accordion
            color="Orange"
            accordionTitle="Listen"
            listId="ListenMenu"
            accordionList={[
              {
                name: 'Live Stream',
                url: `${baseUrl}listen`
              },
              {
                name: 'Podcasts by Program',
                url: `${baseUrl}podcasts-program`
              },
              {
                name: 'Ways to Listen',
                url: `${baseUrl}ways-listen`
              }
            ]}
          />
          <Accordion
            accordionTitle="Features"
            listId="FeaturesMenu"
            accordionList={[
              {
                name: "Across Women's Lives",
                url: `${baseUrl}verticals/across-womens-lives`
              },
              {
                name: 'Global Nation',
                url: `${baseUrl}verticals/global-nation`
              },
              {
                name: 'Global Security',
                url: `${baseUrl}verticals/global-security`
              },
              {
                name: 'Livable Planet',
                url: `${baseUrl}verticals/livable-planet`
              },
              {
                name: 'GlobalPost',
                url: `${baseUrl}programs/globalpost`
              },
              {
                name: 'Global Hit',
                url: `${baseUrl}collections/global-hit`
              },
              {
                name: 'Global Satire',
                url: `${baseUrl}collections/global-satire`
              },
              {
                name: 'Music Heard on Air',
                url: `${baseUrl}music-heard-on-air`
              }
            ]}
          />
          <Accordion
            color="Yellow"
            accordionTitle="Categories"
            listId="CategoriesMenu"
            accordionList={[
              {
                name: 'Arts & Entertainment',
                url: `${baseUrl}sections/arts-culture-media`
              },
              {
                name: 'Conflict & Justice',
                url: `${baseUrl}sections/conflict-justice`
              },
              {
                name: 'Culture & Society',
                url: `${baseUrl}sections/culture`
              },
              {
                name: 'Development & Education',
                url: `${baseUrl}sections/development-educatio`
              },
              {
                name: 'Health & Medicine',
                url: `${baseUrl}sections/health-medicine`
              },
              {
                name: 'History',
                url: `${baseUrl}sections/history`
              },
              {
                name: 'Immigration',
                url: `${baseUrl}verticals/global-nation`
              },
              {
                name: 'Money',
                url: `${baseUrl}sections/business-economics-and-jobs`
              },
              { name: 'Politics', url: `${baseUrl}sections/politics` },
              {
                name: 'Science & Environment',
                url: `${baseUrl}sections/science-tech-environment`
              },
              { name: 'Technology', url: `${baseUrl}sections/technology` },
              {
                name: 'Women & Girls',
                url: `${baseUrl}verticals/across-womens-lives`
              }
            ]}
          />
          <Accordion
            color="Green"
            accordionTitle="About PRI"
            listId="AboutMenu"
            accordionList={[
              {
                name: 'About Us',
                url: `${baseUrl}about-pri`
              },
              {
                name: 'Annual Report',
                url: `${baseUrl}financials`
              },
              {
                name: 'Contact Us',
                url: `${baseUrl}priorg-contact`
              },
              {
                name: 'Financials',
                url: `${baseUrl}financials`
              },
              {
                name: 'Meet the PRI.org team',
                url: `${baseUrl}team`
              },
              {
                name: 'Work with Us',
                url: `${baseUrl}work-us`
              }
            ]}
          />
          <Accordion
            color="Orange"
            accordionTitle="Giving"
            listId="GivingMenu"
            accordionList={[
              {
                name: 'Donate',
                url: `${baseUrl}donate/index.html?utm_source=navigation&amp;utm_medium=website&amp;utm_campaign=donations`
              }
            ]}
          />
        </div>
        <ul className={styles.socialMenu}>
          <li className={styles.socialMenuItem}>
            <a
              className={`${styles.socialMenuLink} ${styles.socialMenuLinkFB}`}
              href="https://www.facebook.com/publicradiointernational"
              title="Follow PRI on Facebook"
            >
              <Icon
                name="facebook"
                title="Facebook"
                fillColor="currentcolor"
                className={styles.socialMenuIcon}
              />
            </a>
          </li>
          <li className={styles.socialMenuItem}>
            <a
              className={`${styles.socialMenuLink} ${styles.socialMenuLinkTW}`}
              href="https://twitter.com/pri"
              title="Follow PRI on Twitter"
            >
              <Icon
                name="twitter"
                title="Twitter"
                fillColor="currentcolor"
                className={styles.socialMenuIcon}
              />
            </a>
          </li>
          <li className={styles.socialMenuItem}>
            <a
              className={`${styles.socialMenuLink} ${styles.socialMenuLinkEM}`}
              href="https://www.pri.org/newsletters"
              title="Subscribe to our Newsletters"
            >
              <Icon
                name="envelope"
                title="Subscribe to our Newsletters"
                fillColor="currentcolor"
                className={`${styles.socialMenuIcon} ${
                  styles.socialMenuIconFull
                }`}
              />
            </a>
          </li>
          <li className={styles.socialMenuItem}>
            <a
              className={`${styles.socialMenuLink} ${styles.socialMenuLinkRSS}`}
              href="https://www.pri.org/stories/feed/everything"
              title="PRI RSS Feed"
            >
              <Icon
                name="rss"
                title="RSS"
                fillColor="currentcolor"
                className={`${styles.socialMenuIcon} ${
                  styles.socialMenuIconRSS
                }`}
              />
            </a>
          </li>
          <li className={styles.socialMenuItem}>
            <a
              className={`${styles.socialMenuLink} ${
                styles.socialMenuLinkLogin
              }`}
              href="https://www.pri.org/user/me"
              title="My Account"
            >
              <Icon
                name="user"
                title="Login"
                aria-label="Login"
                fillColor="currentcolor"
                className={`${styles.socialMenuIcon} ${
                  styles.socialMenuIconFull
                } ${styles.socialMenuIconFullLg}`}
              />
            </a>
          </li>
        </ul>
      </div>
    );
  }
}
