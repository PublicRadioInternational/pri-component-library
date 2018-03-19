/**
 * @file Button.test.js
 * Contains tests for Button.component.js.
 */

import React from 'react';
import renderer from 'react-test-renderer';

import Icon from './Icons.component';

describe('<Icon />', () => {
  it('Matches the Icon snapshot', () => {
    const component = renderer.create(<Icon name="heart" />).toJSON();
    expect(component).toMatchSnapshot();
  });
});
