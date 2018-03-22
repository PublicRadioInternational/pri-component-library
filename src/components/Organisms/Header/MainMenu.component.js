/**
 * @file MainMenu.component.js
 * Exports the main site menu.
 */

import React, { Component } from 'react';
import PropTypes from 'prop-types';

import styles from './MainMenu.css';

/**
 * Component that renders the main site menu.
 */
export default class MainMenu extends Component {
  static propTypes = {
    toggleOpen: PropTypes.func
  };

  static defaultProps = {
    toggleOpen: false
  };

  constructor() {
    super();
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.props.toggleOpen(true);
  }

  render() {
    return (
      <div className={styles.mainMenu}>
        <div className={styles.wrapper}>
          <div className={styles.header}>
            <button className="close-drawer" onClick={this.handleClick}>
              <span className="oi oi-chevron-left" aria-label="close menu" />{' '}
              Close
            </button>
            <div className="text">
              <h3>
                <span className="pri icon-pri" aria-label="PRI" />
              </h3>
              <p>
                Our mission is to serve audiences as a distinctive content
                source for information, insights and cultural experiences
                essential to living in our diverse, interconnected world.
              </p>
              <div className="btn-group">
                <a
                  href="https://www.pri.org/about-pri"
                  className="btn btn-danger"
                >
                  <span
                    className="oi oi-info"
                    title="info"
                    aria-hidden="true"
                  />{' '}
                  Our Story
                </a>
                <a
                  href="https://www.pri.org/priorg-contact"
                  className="btn btn-danger"
                >
                  <span className="oi oi-envelope-closed" aria-hidden="true" />{' '}
                  Contact Us
                </a>
                <a
                  href="https://www.pri.org/donate/index.html?utm_source=navigation&amp;utm_medium=website&amp;utm_campaign=donations"
                  className="btn btn-danger"
                >
                  <span className="oi oi-heart" aria-hidden="true" /> Donate
                </a>
              </div>
            </div>
          </div>
          <div className="drawer-nav">
            <div
              id="accordion"
              className="accordion drawer-nav__accordion"
              role="tablist"
              aria-multiselectable="true"
            >
              <div className="card drawer-nav__card news-programs">
                <div
                  className="drawer-nav__card-header"
                  role="tab"
                  id="headingOne"
                >
                  <h5 className="mb-0">
                    <a
                      className="collapsed"
                      data-toggle="collapse"
                      data-parent="#accordion"
                      href="#collapseNews"
                      aria-expanded="true"
                      aria-controls="collapseNews"
                    >
                      News Programs{' '}
                      <span
                        className="oi oi-chevron-bottom"
                        aria-hidden="true"
                      />
                    </a>
                  </h5>
                </div>
                <div
                  id="collapseNews"
                  className="collapse"
                  role="tabpanel"
                  aria-labelledby="headingOne"
                >
                  <div className="card-block">
                    <ul className="menu">
                      <li className="item">
                        <a href="https://www.pri.org/programs/america-abroad">
                          America Abroad
                        </a>
                      </li>
                      <li className="item">
                        <a href="https://www.pri.org/programs/it-happens">
                          As it Happens
                        </a>
                      </li>
                      <li className="item">
                        <a href="https://www.pri.org/programs/boston-calling">
                          Boston Calling
                        </a>
                      </li>
                      <li className="item">
                        <a href="https://www.pri.org/programs/day-6">Day 6</a>
                      </li>
                      <li className="item">
                        <a href="https://www.pri.org/programs/innovation-hub">
                          Innovation Hub
                        </a>
                      </li>
                      <li className="item">
                        <a href="https://www.pri.org/programs/living-earth">
                          Living on Earth
                        </a>
                      </li>
                      <li className="item">
                        <a href="https://www.pri.org/programs/the-world">
                          PRI{"'"}s The World
                        </a>
                      </li>
                      <li className="item">
                        <a href="https://www.pri.org/programs/takeaway">
                          The Takeaway
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="card drawer-nav__card music-variety-programs">
                <div
                  className="drawer-nav__card-header"
                  role="tab"
                  id="headingOne"
                >
                  <h5 className="mb-0">
                    <a
                      className="collapsed"
                      data-toggle="collapse"
                      data-parent="#accordion"
                      href="#collapseVariety"
                      aria-expanded="true"
                      aria-controls="collapseNews"
                    >
                      Music &amp; Variety Programs{' '}
                      <span
                        className="oi oi-chevron-bottom"
                        aria-hidden="true"
                      />
                    </a>
                  </h5>
                </div>
                <div
                  id="collapseVariety"
                  className="collapse"
                  role="tabpanel"
                  aria-labelledby="headingOne"
                >
                  <div className="card-block">
                    <ul className="menu">
                      <li className="item">
                        <a href="https://www.pri.org/programs/afropop-worldwide">
                          Afropop Worldwide
                        </a>
                      </li>
                      <li className="item">
                        <a href="https://www.pri.org/programs/echoes">Echoes</a>
                      </li>
                      <li className="item">
                        <a href="https://www.pri.org/programs/jazz-after-hours">
                          Jazz After Hours
                        </a>
                      </li>
                      <li className="item">
                        <a href="https://www.pri.org/programs/live-wire">
                          Live Wire
                        </a>
                      </li>
                      <li className="item">
                        <a href="https://www.pri.org/programs/on-story">
                          On Story
                        </a>
                      </li>
                      <li className="item">
                        <a href="https://www.pri.org/programs/out-open">
                          Out in the Open
                        </a>
                      </li>
                      <li className="item">
                        <a href="https://www.pri.org/programs/pittsburgh-symphony-orchestra">
                          Pittsburgh Symphony Orchestra
                        </a>
                      </li>
                      <li className="item">
                        <a href="https://www.pri.org/programs/q-cbc">
                          q from the CBC
                        </a>
                      </li>
                      <li className="item">
                        <a href="https://www.pri.org/programs/selected-shorts">
                          Selected Shorts
                        </a>
                      </li>
                      <li className="item">
                        <a href="https://www.pri.org/programs/studio-360">
                          Studio 360
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="card drawer-nav__card podcasts">
                <div
                  className="drawer-nav__card-header"
                  role="tab"
                  id="headingOne"
                >
                  <h5 className="mb-0">
                    <a
                      className="collapsed"
                      data-toggle="collapse"
                      data-parent="#accordion"
                      href="#collapsePodcasts"
                      aria-expanded="true"
                      aria-controls="collapsePodcasts"
                    >
                      Podcasts{' '}
                      <span
                        className="oi oi-chevron-bottom"
                        aria-hidden="true"
                      />
                    </a>
                  </h5>
                </div>
                <div
                  id="collapsePodcasts"
                  className="collapse"
                  role="tabpanel"
                  aria-labelledby="headingOne"
                >
                  <div className="card-block">
                    <ul className="menu">
                      <li className="item">
                        <a href="https://www.pri.org/programs/lbjs-war">
                          LBJ{"'"}s War
                        </a>
                      </li>
                      <li className="item">
                        <a href="https://www.pri.org/programs/otherhood">
                          Otherhood
                        </a>
                      </li>
                      <li className="item">
                        <a href="https://www.pri.org/programs/podcast-playlist">
                          Podcast Playlist
                        </a>
                      </li>
                      <li className="item">
                        <a href="https://www.pri.org/programs/science-happiness">
                          Science of Happiness
                        </a>
                      </li>
                      <li className="item">
                        <a href="https://www.pri.org/programs/world-words">
                          The World in Words
                        </a>
                      </li>
                      <li className="item">
                        <a href="https://www.pri.org/programs/things-go-boom">
                          Things That Go Boom
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="card drawer-nav__card listen">
                <div
                  className="drawer-nav__card-header"
                  role="tab"
                  id="headingOne"
                >
                  <h5 className="mb-0">
                    <a
                      className="collapsed"
                      data-toggle="collapse"
                      data-parent="#accordion"
                      href="#collapseListen"
                      aria-expanded="true"
                      aria-controls="collapseListen"
                    >
                      Listen{' '}
                      <span
                        className="oi oi-chevron-bottom"
                        aria-hidden="true"
                      />
                    </a>
                  </h5>
                </div>
                <div
                  id="collapseListen"
                  className="collapse"
                  role="tabpanel"
                  aria-labelledby="headingOne"
                >
                  <div className="card-block">
                    <ul className="menu">
                      <li className="item">
                        <a href="https://www.pri.org/listen">Live Stream</a>
                      </li>
                      <li className="item">
                        <a href="https://www.pri.org/podcasts-program">
                          Podcasts by Program
                        </a>
                      </li>
                      <li className="item">
                        <a href="https://www.pri.org/ways-listen">
                          Ways to Listen
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="card drawer-nav__card features">
                <div
                  className="drawer-nav__card-header"
                  role="tab"
                  id="headingTwo"
                >
                  <h5 className="mb-0">
                    <a
                      className="collapsed"
                      data-toggle="collapse"
                      data-parent="#accordion"
                      href="#collapseFeatures"
                      aria-expanded="false"
                      aria-controls="collapseFeatures"
                    >
                      Features{' '}
                      <span
                        className="oi oi-chevron-bottom"
                        aria-hidden="true"
                      />
                    </a>
                  </h5>
                </div>
                <div
                  id="collapseFeatures"
                  className="collapse"
                  role="tabpanel"
                  aria-labelledby="headingTwo"
                >
                  <div className="card-block">
                    <ul className="menu">
                      <li className="item">
                        <a href="https://www.pri.org/verticals/across-womens-lives">
                          Across Women{"'"}s Lives
                        </a>
                      </li>
                      <li className="item">
                        <a href="https://www.pri.org/verticals/global-nation">
                          Global Nation
                        </a>
                      </li>
                      <li className="item">
                        <a href="https://www.pri.org/verticals/global-security">
                          Global Security
                        </a>
                      </li>
                      <li className="item">
                        <a href="https://www.pri.org/verticals/livable-planet">
                          Livable Planet
                        </a>
                      </li>
                      <li className="item">
                        <a href="https://www.pri.org/programs/globalpost">
                          GlobalPost
                        </a>
                      </li>
                      <li className="item">
                        <a href="https://www.pri.org/collections/global-hit">
                          Global Hit
                        </a>
                      </li>
                      <li className="item">
                        <a href="https://www.pri.org/collections/global-satire">
                          Global Satire
                        </a>
                      </li>
                      <li className="item">
                        <a href="https://www.pri.org/music-heard-on-air">
                          Music Heard on Air
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="card drawer-nav__card categories">
                <div
                  className="drawer-nav__card-header"
                  role="tab"
                  id="headingTwo"
                >
                  <h5 className="mb-0">
                    <a
                      className="collapsed"
                      data-toggle="collapse"
                      data-parent="#accordion"
                      href="#collapseCategories"
                      aria-expanded="false"
                      aria-controls="collapseCategories"
                    >
                      Categories{' '}
                      <span
                        className="oi oi-chevron-bottom"
                        aria-hidden="true"
                      />
                    </a>
                  </h5>
                </div>
                <div
                  id="collapseCategories"
                  className="collapse"
                  role="tabpanel"
                  aria-labelledby="headingTwo"
                >
                  <div className="card-block">
                    <ul className="menu">
                      <li className="item">
                        <a href="https://www.pri.org/sections/arts-culture-media">
                          Arts &amp; Entertainment
                        </a>
                      </li>
                      <li className="item">
                        <a href="https://www.pri.org/sections/conflict-justice">
                          Conflict &amp; Justice
                        </a>
                      </li>
                      <li className="item">
                        <a href="https://www.pri.org/sections/culture">
                          Culture &amp; Society
                        </a>
                      </li>
                      <li className="item">
                        <a href="https://www.pri.org/sections/development-education">
                          Development &amp; Education
                        </a>
                      </li>
                      <li className="item">
                        <a href="https://www.pri.org/sections/health-medicine">
                          Health &amp; Medicine
                        </a>
                      </li>
                      <li className="item">
                        <a href="https://www.pri.org/sections/history">
                          History
                        </a>
                      </li>
                      <li className="item">
                        <a href="https://www.pri.org/verticals/global-nation">
                          Immigration
                        </a>
                      </li>
                      <li className="item">
                        <a href="https://www.pri.org/sections/business-economics-and-jobs">
                          Money
                        </a>
                      </li>
                      <li className="item">
                        <a href="https://www.pri.org/sections/politics">
                          Politics
                        </a>
                      </li>
                      <li className="item">
                        <a href="https://www.pri.org/sections/science-tech-environment">
                          Science &amp; Environment
                        </a>
                      </li>
                      <li className="item">
                        <a href="https://www.pri.org/sections/technology">
                          Technology
                        </a>
                      </li>
                      <li className="item">
                        <a href="https://www.pri.org/verticals/across-womens-lives">
                          Women &amp; Girls
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="card drawer-nav__card about">
                <div
                  className="drawer-nav__card-header"
                  role="tab"
                  id="headingThree"
                >
                  <h5 className="mb-0">
                    <a
                      className="collapsed"
                      data-toggle="collapse"
                      data-parent="#accordion"
                      href="#collapseAbout"
                      aria-expanded="false"
                      aria-controls="collapseAbout"
                    >
                      About PRI{' '}
                      <span
                        className="oi oi-chevron-bottom"
                        aria-hidden="true"
                      />
                    </a>
                  </h5>
                </div>
                <div
                  id="collapseAbout"
                  className="collapse"
                  role="tabpanel"
                  aria-labelledby="headingThree"
                >
                  <div className="card-block">
                    <ul className="menu">
                      <li className="item">
                        <a href="https://www.pri.org/about-pri">About Us</a>
                      </li>
                      <li className="item">
                        <a href="https://www.pri.org/financials">
                          Annual Report
                        </a>
                      </li>
                      <li className="item">
                        <a href="https://www.pri.org/priorg-contact">
                          Contact Us
                        </a>
                      </li>
                      <li className="item">
                        <a href="https://www.pri.org/financials">Financials</a>
                      </li>
                      <li className="item">
                        <a href="https://www.pri.org/team">
                          Meet the PRI.org team
                        </a>
                      </li>
                      <li className="item">
                        <a href="https://www.pri.org/work-us">Work with Us</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="card drawer-nav__card giving">
                <div
                  className="drawer-nav__card-header"
                  role="tab"
                  id="headingThree"
                >
                  <h5 className="mb-0">
                    <a
                      className="collapsed"
                      data-toggle="collapse"
                      data-parent="#accordion"
                      href="#collapseGiving"
                      aria-expanded="false"
                      aria-controls="collapseGiving"
                    >
                      Giving{' '}
                      <span
                        className="oi oi-chevron-bottom"
                        aria-hidden="true"
                      />
                    </a>
                  </h5>
                </div>
                <div
                  id="collapseGiving"
                  className="collapse"
                  role="tabpanel"
                  aria-labelledby="headingThree"
                >
                  <div className="card-block">
                    <ul className="menu">
                      <li className="item">
                        <a href="https://www.pri.org/donate/index.html?utm_source=navigation&amp;utm_medium=website&amp;utm_campaign=donations">
                          Donate
                        </a>
                      </li>
                      <li className="item">
                        <a href="/">Donor Benefits</a>
                      </li>
                      <li className="item">
                        <a href="/">Annual Report</a>
                      </li>
                      <li className="item">
                        <a href="/">Donation FAQs</a>
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
        <div className="antiSelect" />
        <div className="label" />
      </div>
    );
  }
}
