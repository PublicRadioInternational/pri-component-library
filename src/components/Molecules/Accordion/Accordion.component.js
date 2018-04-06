/**
 * @file Accordion.component.js
 * Exports an accordion component.
 */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './Accordion.css';

import Icon from '../../Atoms/Svg/Icons.component';
import List from '../../Molecules/List/List.component';

const cx = classNames.bind(styles);

/**
 * Component that renders an accordion.
 */
export default class Accordion extends Component {
  static propTypes = {
    accordionList: PropTypes.arrayOf(PropTypes.object),
    color: PropTypes.oneOf(['Blue', 'Orange', 'Yellow', 'Green']),
    accordionTitle: PropTypes.string.isRequired,
    listId: PropTypes.string
  };

  static defaultProps = {
    accordionList: {},
    color: 'Blue',
    listId: null
  };

  state = { revealed: false };

  reveal = e => {
    e.preventDefault();
    this.setState(prevState => ({
      revealed: !prevState.revealed
    }));
  };

  render() {
    const { accordionList, color, accordionTitle, listId } = this.props;
    // Generate a class name based on the color.
    const accordionItemColor = `accordionItem${color}`;
    const accordionTopLinkColor = `accordionTopLink${color}`;
    const accordionContentMenuLinkColor = `accordionContentMenuLink${color}`;
    const accordionTopLinkClasses = cx({
      accordionTopLink: true,
      [accordionTopLinkColor]: color,
      accordionTopLinkOpen: this.state.revealed === true
    });
    const iconClasses = cx({
      iconDown: true,
      iconUp: this.state.revealed === true
    });

    return (
      <div className={`${styles.accordionItem} ${styles[accordionItemColor]}`}>
        <div className={styles.accordionTop} role="tab">
          <h5 className={styles.accordionTopHeading}>
            <a
              className={accordionTopLinkClasses}
              date-toggle={styles.accordionContent}
              date-parent="#accordion"
              href={`#${listId}`}
              aria-expanded="true"
              aria-controls={listId}
              onClick={this.reveal}
            >
              {accordionTitle}
              <Icon
                name="left"
                ariaHidden
                className={iconClasses}
                viewBox="-2 -2 28 28"
              />
            </a>
          </h5>
        </div>
        <List
          id={listId}
          className={styles.accordionContent}
          reveal={this.state.revealed}
          role="tabpanel"
          ariaLabelledby={accordionTitle}
          ulClass={styles.accordionContentMenu}
          classNameOpen={styles.accordionContentOpen}
          liClass={styles.accordionContentMenuItem}
          linkClass={`${styles.accordionContentMenuLink} ${
            styles[accordionContentMenuLinkColor]
          }`}
          listItems={accordionList}
        />
      </div>
    );
  }
}
