/**
 * @file LazyLoad.test.js
 * Contains tests for LazyLoad.component.js.
 */

import React from 'react';
import renderer from 'react-test-renderer';

import LazyLoad from './LazyLoad.component';

describe('<LazyLoad />', () => {
  it('Matches the LazyLoad snapshot', () => {
    const component = renderer
      .create(
        <LazyLoad>
          <span>Lazy Load Me</span>
        </LazyLoad>
      )
      .toJSON();
    expect(component).toMatchSnapshot();
  });
});
