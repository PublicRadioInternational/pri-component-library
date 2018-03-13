/**
 * @file Button.test.js
 * Contains tests for Button.component.js.
 */

import React from 'react';
import renderer from 'react-test-renderer';

import Icon from './Icon.component';

describe('<Icon />', () => {
  it('Matches the Icon snapshot', () => {
    const component = renderer.create(<Icon svg="heart" />).toJSON();
    expect(component).toMatchSnapshot();
  });
});
