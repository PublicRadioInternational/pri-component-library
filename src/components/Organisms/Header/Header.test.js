/**
 * @file Button.test.js
 * Contains tests for Button.component.js.
 */

import React from 'react';
import renderer from 'react-test-renderer';

import Header from './Header.component';

describe('<Header />', () => {
  it('Matches the Header snapshot', () => {
    const component = renderer.create(<Header />).toJSON();
    expect(component).toMatchSnapshot();
  });
});
