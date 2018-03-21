/**
 * @file Aside.test.js
 * Contains tests for Aside.component.js.
 */

import React from 'react';
import renderer from 'react-test-renderer';

import Aside from './Aside.component';

describe('<Aside />', () => {
  it('Matches the Aside snapshot', () => {
    const component = renderer.create(<Aside />).toJSON();
    expect(component).toMatchSnapshot();
  });
});
