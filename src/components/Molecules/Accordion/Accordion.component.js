/**
 * @file Accordion.component.js
 * Exports an accordion component.
 */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './Accordion.css';

import Icon from '../../Atoms/Svg/Icons.component';
import List from '../../Molecules/List/List.component';

/**
 * Component that renders an accordion.
 */
export default class Accordion extends Component {
  static propTypes = {
    accordionList: PropTypes.arrayOf(PropTypes.object),
    color: PropTypes.oneOf(['Blue', 'Orange', 'Yellow', 'Green']),
    accordionTitle: PropTypes.string.isRequired
  };

  static defaultProps = {
    accordionList: {},
    color: 'Blue'
  };

  constructor(props) {
    super(props);
    this.reveal = this.reveal.bind(this);
  }

  state = { revealed: false };

  reveal = e => {
    e.preventDefault();
    this.setState(prevState => ({
      revealed: !prevState.revealed
    }));
  };

  render() {
    const { accordionList, color, accordionTitle } = this.props;
    // Generate a class name based on the color.
    const accordionItemColor = `accordionItem${color}`;
    const accordionTopLinkColor = `accordionTopLink${color}`;
    const accordionContentMenuLinkColor = `accordionContentMenuLink${color}`;

    return (
      <div className={`${styles.accordionItem} ${styles[accordionItemColor]}`}>
        <div className={styles.accordionTop} role="tab">
          <h5 className={styles.accordionTopHeading}>
            <a
              className={`${styles.accordionTopLink} ${
                styles[accordionTopLinkColor]
              } ${
                this.state.revealed === true ? styles.accordionTopLinkOpen : ''
              }`}
              date-toggle={styles.accordionContent}
              date-parent="#accordion"
              href="#collapseNews"
              aria-expanded="true"
              aria-controls="collapseNews"
              onClick={this.reveal}
              id="newsPrograms"
            >
              {accordionTitle}
              <Icon
                name="left"
                ariaHidden
                className={`${styles.iconDown} ${
                  this.state.revealed === true ? styles.iconUp : ''
                }`}
                viewBox="-2 -2 28 28"
              />
            </a>
          </h5>
        </div>
        <List
          className={styles.accordionContent}
          reveal={this.state.revealed}
          role="tabpanel"
          ariaLabelledby="newsPrograms"
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
