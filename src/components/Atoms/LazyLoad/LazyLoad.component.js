/**
 * @file LazyLoad.component.js
 * Exports a lazy load component.
 */

import 'intersection-observer'; // optional polyfill
import Observer from '@researchgate/react-intersection-observer';
import React, { Component } from 'react';
import PropTypes from 'prop-types';

/**
 * Component that renders a Card Item.
 */
export default class LazyLoad extends Component {
  static propTypes = {
    children: PropTypes.node.isRequired
  };

  loadImage = item => {
    if (item.isIntersecting) {
      const element = item.target;
      const { src } = element.dataset;
      element.src = src;
      element.addEventListener('load', () => {
        element.removeAttribute('data-src');
      });
    }
  };

  render() {
    const { children } = this.props;
    return (
      <Observer onChange={this.loadImage} onlyOnce rootMargin="0% 0% 25%">
        {children}
      </Observer>
    );
  }
}
