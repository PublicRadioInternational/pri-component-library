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

/**
 * Component that renders the main site menu.
 */
export default class MainMenu extends Component {
  static propTypes = {
    toggleOpen: PropTypes.func,
    baseUrl: PropTypes.string
  };

  static defaultProps = {
    toggleOpen: false,
    baseUrl: 'https://www.pri.org/'
  };

  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.props.toggleOpen(true);
  }

  render() {
    const { baseUrl } = this.props;
    return (
      <div className={styles.wrapper}>
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
                color="Orange"
                className={styles.btnHeaderLeft}
                url={`${baseUrl}about-pri`}
              >
                <Icon name="info" inline ariaHidden />
                Our Story
              </ButtonLink>
              <ButtonLink
                color="Orange"
                className={styles.btnHeaderMiddle}
                url={`${baseUrl}priorg-contact`}
              >
                <Icon name="envelope" inline ariaHidden />
                Contact Us
              </ButtonLink>
              <ButtonLink
                color="Orange"
                className={styles.btnHeaderRight}
                url={`${baseUrl}donate/index.html?utm_source=navigation&amp;utm_medium=website&amp;utm_campaign=donations`}
              >
                <Icon name="heart" inline ariaHidden />
                Donate
              </ButtonLink>
            </div>
          </div>
        </div>
        <div>
          <div
            id="accordion"
            className={styles.accordion}
            role="tablist"
            aria-multiselectable="true"
          >
            <div
              className={`${styles.accordionItem} ${styles.accordionItemBlue}`}
            >
              <div className={styles.accordionTop} role="tab" id="headingOne">
                <h5 className={styles.accordionTopHeading}>
                  <a
                    className={styles.accordionTopLink}
                    date-toggle={styles.accordionContent}
                    date-parent="#accordion"
                    href="#collapseNews"
                    aria-expanded="true"
                    aria-controls="collapseNews"
                  >
                    News Programs
                    <Icon name="left" ariaHidden className={styles.iconDown} />
                  </a>
                </h5>
              </div>
              <div
                id="collapseNews"
                className={styles.accordionContent}
                role="tabpanel"
                aria-labelledby="headingOne"
              >
                <ul className={styles.accordionContentMenu}>
                  <li className={styles.accordionContentMenuItem}>
                    <a
                      className={styles.accordionContentMenuLink}
                      href="https://www.pri.org/programs/america-abroad"
                    >
                      America Abroad
                    </a>
                  </li>
                  <li className={styles.accordionContentMenuItem}>
                    <a
                      className={styles.accordionContentMenuLink}
                      href="https://www.pri.org/programs/it-happens"
                    >
                      As it Happens
                    </a>
                  </li>
                  <li className={styles.accordionContentMenuItem}>
                    <a
                      className={styles.accordionContentMenuLink}
                      href="https://www.pri.org/programs/boston-calling"
                    >
                      Boston Calling
                    </a>
                  </li>
                  <li className={styles.accordionContentMenuItem}>
                    <a
                      className={styles.accordionContentMenuLink}
                      href="https://www.pri.org/programs/day-6"
                    >
                      Day 6
                    </a>
                  </li>
                  <li className={styles.accordionContentMenuItem}>
                    <a
                      className={styles.accordionContentMenuLink}
                      href="https://www.pri.org/programs/innovation-hub"
                    >
                      Innovation Hub
                    </a>
                  </li>
                  <li className={styles.accordionContentMenuItem}>
                    <a
                      className={styles.accordionContentMenuLink}
                      href="https://www.pri.org/programs/living-earth"
                    >
                      Living on Earth
                    </a>
                  </li>
                  <li className={styles.accordionContentMenuItem}>
                    <a
                      className={styles.accordionContentMenuLink}
                      href="https://www.pri.org/programs/the-world"
                    >
                      PRI{"'"}s The World
                    </a>
                  </li>
                  <li className={styles.accordionContentMenuItem}>
                    <a href="https://www.pri.org/programs/takeaway">
                      The Takeaway
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div
              className={`${styles.accordionItem} ${
                styles.accordionItemYellow
              }`}
            >
              <div className={styles.accordionTop} role="tab" id="headingOne">
                <h5 className={styles.accordionTopHeading}>
                  <a
                    className={styles.accordionTopLink}
                    date-toggle={styles.accordionContent}
                    date-parent="#accordion"
                    href="#collapseVariety"
                    aria-expanded="true"
                    aria-controls="collapseNews"
                  >
                    Music &amp; Variety Programs
                    <Icon name="left" ariaHidden className={styles.iconDown} />
                  </a>
                </h5>
              </div>
              <div
                id="collapseVariety"
                className={styles.accordionContent}
                role="tabpanel"
                aria-labelledby="headingOne"
              >
                <div className="card-block">
                  <ul className={styles.accordionContentMenu}>
                    <li className={styles.accordionContentMenuItem}>
                      <a
                        className={styles.accordionContentMenuLink}
                        href="https://www.pri.org/programs/afropop-worldwide"
                      >
                        Afropop Worldwide
                      </a>
                    </li>
                    <li className={styles.accordionContentMenuItem}>
                      <a
                        className={styles.accordionContentMenuLink}
                        href="https://www.pri.org/programs/echoes"
                      >
                        Echoes
                      </a>
                    </li>
                    <li className={styles.accordionContentMenuItem}>
                      <a
                        className={styles.accordionContentMenuLink}
                        href="https://www.pri.org/programs/jazz-after-hours"
                      >
                        Jazz After Hours
                      </a>
                    </li>
                    <li className={styles.accordionContentMenuItem}>
                      <a
                        className={styles.accordionContentMenuLink}
                        href="https://www.pri.org/programs/live-wire"
                      >
                        Live Wire
                      </a>
                    </li>
                    <li className={styles.accordionContentMenuItem}>
                      <a
                        className={styles.accordionContentMenuLink}
                        href="https://www.pri.org/programs/on-story"
                      >
                        On Story
                      </a>
                    </li>
                    <li className={styles.accordionContentMenuItem}>
                      <a
                        className={styles.accordionContentMenuLink}
                        href="https://www.pri.org/programs/out-open"
                      >
                        Out in the Open
                      </a>
                    </li>
                    <li className={styles.accordionContentMenuItem}>
                      <a
                        className={styles.accordionContentMenuLink}
                        href="https://www.pri.org/programs/pittsburgh-symphony-orchestra"
                      >
                        Pittsburgh Symphony Orchestra
                      </a>
                    </li>
                    <li className={styles.accordionContentMenuItem}>
                      <a
                        className={styles.accordionContentMenuLink}
                        href="https://www.pri.org/programs/q-cbc"
                      >
                        q from the CBC
                      </a>
                    </li>
                    <li className={styles.accordionContentMenuItem}>
                      <a
                        className={styles.accordionContentMenuLink}
                        href="https://www.pri.org/programs/selected-shorts"
                      >
                        Selected Shorts
                      </a>
                    </li>
                    <li className={styles.accordionContentMenuItem}>
                      <a
                        className={styles.accordionContentMenuLink}
                        href="https://www.pri.org/programs/studio-360"
                      >
                        Studio 360
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div
              className={`${styles.accordionItem} ${styles.accordionItemGreen}`}
            >
              <div className={styles.accordionTop} role="tab" id="headingOne">
                <h5 className={styles.accordionTopHeading}>
                  <a
                    className={styles.accordionTopLink}
                    date-toggle={styles.accordionContent}
                    date-parent="#accordion"
                    href="#collapsePodcasts"
                    aria-expanded="true"
                    aria-controls="collapsePodcasts"
                  >
                    Podcasts
                    <Icon name="left" ariaHidden className={styles.iconDown} />
                  </a>
                </h5>
              </div>
              <div
                id="collapsePodcasts"
                className={styles.accordionContent}
                role="tabpanel"
                aria-labelledby="headingOne"
              >
                <div className="card-block">
                  <ul className={styles.accordionContentMenu}>
                    <li className={styles.accordionContentMenuItem}>
                      <a
                        className={styles.accordionContentMenuLink}
                        href="https://www.pri.org/programs/lbjs-war"
                      >
                        LBJ{"'"}s War
                      </a>
                    </li>
                    <li className={styles.accordionContentMenuItem}>
                      <a
                        className={styles.accordionContentMenuLink}
                        href="https://www.pri.org/programs/otherhood"
                      >
                        Otherhood
                      </a>
                    </li>
                    <li className={styles.accordionContentMenuItem}>
                      <a
                        className={styles.accordionContentMenuLink}
                        href="https://www.pri.org/programs/podcast-playlist"
                      >
                        Podcast Playlist
                      </a>
                    </li>
                    <li className={styles.accordionContentMenuItem}>
                      <a
                        className={styles.accordionContentMenuLink}
                        href="https://www.pri.org/programs/science-happiness"
                      >
                        Science of Happiness
                      </a>
                    </li>
                    <li className={styles.accordionContentMenuItem}>
                      <a
                        className={styles.accordionContentMenuLink}
                        href="https://www.pri.org/programs/world-words"
                      >
                        The World in Words
                      </a>
                    </li>
                    <li className={styles.accordionContentMenuItem}>
                      <a
                        className={styles.accordionContentMenuLink}
                        href="https://www.pri.org/programs/things-go-boom"
                      >
                        Things That Go Boom
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div
              className={`${styles.accordionItem} ${
                styles.accordionItemOrange
              }`}
            >
              <div className={styles.accordionTop} role="tab" id="headingOne">
                <h5 className={styles.accordionTopHeading}>
                  <a
                    className={styles.accordionTopLink}
                    date-toggle={styles.accordionContent}
                    date-parent="#accordion"
                    href="#collapseListen"
                    aria-expanded="true"
                    aria-controls="collapseListen"
                  >
                    Listen
                    <Icon name="left" ariaHidden className={styles.iconDown} />
                  </a>
                </h5>
              </div>
              <div
                id="collapseListen"
                className={styles.accordionContent}
                role="tabpanel"
                aria-labelledby="headingOne"
              >
                <div className="card-block">
                  <ul className={styles.accordionContentMenu}>
                    <li className={styles.accordionContentMenuItem}>
                      <a
                        className={styles.accordionContentMenuLink}
                        href="https://www.pri.org/listen"
                      >
                        Live Stream
                      </a>
                    </li>
                    <li className={styles.accordionContentMenuItem}>
                      <a
                        className={styles.accordionContentMenuLink}
                        href="https://www.pri.org/podcasts-program"
                      >
                        Podcasts by Program
                      </a>
                    </li>
                    <li className={styles.accordionContentMenuItem}>
                      <a
                        className={styles.accordionContentMenuLink}
                        href="https://www.pri.org/ways-listen"
                      >
                        Ways to Listen
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div
              className={`${styles.accordionItem} ${styles.accordionItemBlue}`}
            >
              <div className={styles.accordionTop} role="tab" id="headingTwo">
                <h5 className={styles.accordionTopHeading}>
                  <a
                    className={styles.accordionTopLink}
                    date-toggle={styles.accordionContent}
                    date-parent="#accordion"
                    href="#collapseFeatures"
                    aria-expanded="false"
                    aria-controls="collapseFeatures"
                  >
                    Features
                    <Icon name="left" ariaHidden className={styles.iconDown} />
                  </a>
                </h5>
              </div>
              <div
                id="collapseFeatures"
                className={styles.accordionContent}
                role="tabpanel"
                aria-labelledby="headingTwo"
              >
                <div className="card-block">
                  <ul className={styles.accordionContentMenu}>
                    <li className={styles.accordionContentMenuItem}>
                      <a
                        className={styles.accordionContentMenuLink}
                        href="https://www.pri.org/verticals/across-womens-lives"
                      >
                        Across Women{"'"}s Lives
                      </a>
                    </li>
                    <li className={styles.accordionContentMenuItem}>
                      <a
                        className={styles.accordionContentMenuLink}
                        href="https://www.pri.org/verticals/global-nation"
                      >
                        Global Nation
                      </a>
                    </li>
                    <li className={styles.accordionContentMenuItem}>
                      <a
                        className={styles.accordionContentMenuLink}
                        href="https://www.pri.org/verticals/global-security"
                      >
                        Global Security
                      </a>
                    </li>
                    <li className={styles.accordionContentMenuItem}>
                      <a
                        className={styles.accordionContentMenuLink}
                        href="https://www.pri.org/verticals/livable-planet"
                      >
                        Livable Planet
                      </a>
                    </li>
                    <li className={styles.accordionContentMenuItem}>
                      <a
                        className={styles.accordionContentMenuLink}
                        href="https://www.pri.org/programs/globalpost"
                      >
                        GlobalPost
                      </a>
                    </li>
                    <li className={styles.accordionContentMenuItem}>
                      <a
                        className={styles.accordionContentMenuLink}
                        href="https://www.pri.org/collections/global-hit"
                      >
                        Global Hit
                      </a>
                    </li>
                    <li className={styles.accordionContentMenuItem}>
                      <a
                        className={styles.accordionContentMenuLink}
                        href="https://www.pri.org/collections/global-satire"
                      >
                        Global Satire
                      </a>
                    </li>
                    <li className={styles.accordionContentMenuItem}>
                      <a
                        className={styles.accordionContentMenuLink}
                        href="https://www.pri.org/music-heard-on-air"
                      >
                        Music Heard on Air
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div
              className={`${styles.accordionItem} ${
                styles.accordionItemYellow
              }`}
            >
              <div className={styles.accordionTop} role="tab" id="headingTwo">
                <h5 className={styles.accordionTopHeading}>
                  <a
                    className={styles.accordionTopLink}
                    date-toggle={styles.accordionContent}
                    date-parent="#accordion"
                    href="#collapseCategories"
                    aria-expanded="false"
                    aria-controls="collapseCategories"
                  >
                    Categories
                    <Icon name="left" ariaHidden className={styles.iconDown} />
                  </a>
                </h5>
              </div>
              <div
                id="collapseCategories"
                className={styles.accordionContent}
                role="tabpanel"
                aria-labelledby="headingTwo"
              >
                <div className="card-block">
                  <ul className={styles.accordionContentMenu}>
                    <li className={styles.accordionContentMenuItem}>
                      <a
                        className={styles.accordionContentMenuLink}
                        href="https://www.pri.org/sections/arts-culture-media"
                      >
                        Arts &amp; Entertainment
                      </a>
                    </li>
                    <li className={styles.accordionContentMenuItem}>
                      <a
                        className={styles.accordionContentMenuLink}
                        href="https://www.pri.org/sections/conflict-justice"
                      >
                        Conflict &amp; Justice
                      </a>
                    </li>
                    <li className={styles.accordionContentMenuItem}>
                      <a
                        className={styles.accordionContentMenuLink}
                        href="https://www.pri.org/sections/culture"
                      >
                        Culture &amp; Society
                      </a>
                    </li>
                    <li className={styles.accordionContentMenuItem}>
                      <a
                        className={styles.accordionContentMenuLink}
                        href="https://www.pri.org/sections/development-education"
                      >
                        Development &amp; Education
                      </a>
                    </li>
                    <li className={styles.accordionContentMenuItem}>
                      <a
                        className={styles.accordionContentMenuLink}
                        href="https://www.pri.org/sections/health-medicine"
                      >
                        Health &amp; Medicine
                      </a>
                    </li>
                    <li className={styles.accordionContentMenuItem}>
                      <a
                        className={styles.accordionContentMenuLink}
                        href="https://www.pri.org/sections/history"
                      >
                        History
                      </a>
                    </li>
                    <li className={styles.accordionContentMenuItem}>
                      <a
                        className={styles.accordionContentMenuLink}
                        href="https://www.pri.org/verticals/global-nation"
                      >
                        Immigration
                      </a>
                    </li>
                    <li className={styles.accordionContentMenuItem}>
                      <a
                        className={styles.accordionContentMenuLink}
                        href="https://www.pri.org/sections/business-economics-and-jobs"
                      >
                        Money
                      </a>
                    </li>
                    <li className={styles.accordionContentMenuItem}>
                      <a
                        className={styles.accordionContentMenuLink}
                        href="https://www.pri.org/sections/politics"
                      >
                        Politics
                      </a>
                    </li>
                    <li className={styles.accordionContentMenuItem}>
                      <a
                        className={styles.accordionContentMenuLink}
                        href="https://www.pri.org/sections/science-tech-environment"
                      >
                        Science &amp; Environment
                      </a>
                    </li>
                    <li className={styles.accordionContentMenuItem}>
                      <a
                        className={styles.accordionContentMenuLink}
                        href="https://www.pri.org/sections/technology"
                      >
                        Technology
                      </a>
                    </li>
                    <li className={styles.accordionContentMenuItem}>
                      <a
                        className={styles.accordionContentMenuLink}
                        href="https://www.pri.org/verticals/across-womens-lives"
                      >
                        Women &amp; Girls
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div
              className={`${styles.accordionItem} ${styles.accordionItemGreen}`}
            >
              <div className={styles.accordionTop} role="tab" id="headingThree">
                <h5 className={styles.accordionTopHeading}>
                  <a
                    className={styles.accordionTopLink}
                    date-toggle={styles.accordionContent}
                    date-parent="#accordion"
                    href="#collapseAbout"
                    aria-expanded="false"
                    aria-controls="collapseAbout"
                  >
                    About PRI
                    <Icon name="left" ariaHidden className={styles.iconDown} />
                  </a>
                </h5>
              </div>
              <div
                id="collapseAbout"
                className={styles.accordionContent}
                role="tabpanel"
                aria-labelledby="headingThree"
              >
                <div className="card-block">
                  <ul className={styles.accordionContentMenu}>
                    <li className={styles.accordionContentMenuItem}>
                      <a
                        className={styles.accordionContentMenuLink}
                        href="https://www.pri.org/about-pri"
                      >
                        About Us
                      </a>
                    </li>
                    <li className={styles.accordionContentMenuItem}>
                      <a
                        className={styles.accordionContentMenuLink}
                        href="https://www.pri.org/financials"
                      >
                        Annual Report
                      </a>
                    </li>
                    <li className={styles.accordionContentMenuItem}>
                      <a
                        className={styles.accordionContentMenuLink}
                        href="https://www.pri.org/priorg-contact"
                      >
                        Contact Us
                      </a>
                    </li>
                    <li className={styles.accordionContentMenuItem}>
                      <a
                        className={styles.accordionContentMenuLink}
                        href="https://www.pri.org/financials"
                      >
                        Financials
                      </a>
                    </li>
                    <li className={styles.accordionContentMenuItem}>
                      <a
                        className={styles.accordionContentMenuLink}
                        href="https://www.pri.org/team"
                      >
                        Meet the PRI.org team
                      </a>
                    </li>
                    <li className={styles.accordionContentMenuItem}>
                      <a
                        className={styles.accordionContentMenuLink}
                        href="https://www.pri.org/work-us"
                      >
                        Work with Us
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div
              className={`${styles.accordionItem} ${
                styles.accordionItemOrange
              }`}
            >
              <div className={styles.accordionTop} role="tab" id="headingThree">
                <h5 className={styles.accordionTopHeading}>
                  <a
                    className={styles.accordionTopLink}
                    date-toggle={styles.accordionContent}
                    date-parent="#accordion"
                    href="#collapseGiving"
                    aria-expanded="false"
                    aria-controls="collapseGiving"
                  >
                    Giving
                    <Icon name="left" ariaHidden className={styles.iconDown} />
                  </a>
                </h5>
              </div>
              <div
                id="collapseGiving"
                className={styles.accordionContent}
                role="tabpanel"
                aria-labelledby="headingThree"
              >
                <div className="card-block">
                  <ul className={styles.accordionContentMenu}>
                    <li className={styles.accordionContentMenuItem}>
                      <a
                        className={styles.accordionContentMenuLink}
                        href="https://www.pri.org/donate/index.html?utm_source=navigation&amp;utm_medium=website&amp;utm_campaign=donations"
                      >
                        Donate
                      </a>
                    </li>
                    <li className={styles.accordionContentMenuItem}>
                      <a className={styles.accordionContentMenuLink} href="/">
                        Donor Benefits
                      </a>
                    </li>
                    <li className={styles.accordionContentMenuItem}>
                      <a className={styles.accordionContentMenuLink} href="/">
                        Annual Report
                      </a>
                    </li>
                    <li className={styles.accordionContentMenuItem}>
                      <a className={styles.accordionContentMenuLink} href="/">
                        Donation FAQs
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="drawer-footer">
          <ul className="social-menu">
            <li className="social-item facebook">
              <a
                href="https://www.facebook.com/publicradiointernational"
                title="Follow PRI on Facebook"
              >
                <i className="ss-icon ss-social">Facebook</i>
              </a>
            </li>
            <li className="social-item twitter">
              <a href="https://twitter.com/pri" title="Follow PRI on Twitter">
                <i className="ss-icon ss-social">Twitter</i>
              </a>
            </li>
            <li className="social-item newsletter">
              <a
                href="https://www.pri.org/newsletters"
                title="Subscribe to our Newsletters"
              >
                <i className="oi oi-envelope-open" aria-label="Newsletters" />
              </a>
            </li>
            <li className="social-item rss">
              <a
                href="https://www.pri.org/stories/feed/everything"
                title="PRI RSS Feed"
              >
                <i className="ss-icon ss-social">RSS</i>
              </a>
            </li>
            <li className="social-item login">
              <a href="https://www.pri.org/user/me" title="My Account">
                <i className="oi oi-person" aria-label="Login" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}
