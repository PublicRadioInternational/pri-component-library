/**
 * @file TeaserList.component.js
 * Exports a article list component.
 */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './TeaserList.css';

import ButtonLink from '../../Atoms/Button/ButtonLink.component';
import Section from '../Content/Section.component';

/**
 * Component that renders an Article List.
 */
export default class TeaserList extends Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    moreTitle: PropTypes.string,
    moreUrl: PropTypes.string,
    children: PropTypes.node
  };

  static defaultProps = {
    moreTitle: null,
    moreUrl: null,
    children: []
  };

  constructor(props) {
    super(props);

    // Will store reference to content element.
    this.contentElement = null;

    // Callback to set reference to content element.
    this.setContentElement = element => {
      this.contentElement = element;
    };
  }

  componentDidMount() {
    // This component has mounted, but children have not.
    // Use timeout to delay updating content scollTop till next render frame.
    setTimeout(() => {
      /* istanbul ignore next: this will always be 0 in tests */
      this.contentElement.scrollTop = 0;
    }, 0);
  }

  render() {
    const { title, moreTitle, moreUrl, children } = this.props;

    return (
      <Section className={styles.section}>
        <header className={styles.header}>{title}</header>
        <div ref={this.setContentElement} className={styles.content}>
          {children}
        </div>
        {moreTitle && (
          <footer className={styles.footer}>
            <ButtonLink url={moreUrl} color="Blue">
              {moreTitle}
            </ButtonLink>
          </footer>
        )}
      </Section>
    );
  }
}
