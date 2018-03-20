/**
 * @file Menu.test.js
 * Contains tests for Menu.component.js.
 */

import React from 'react';
import renderer from 'react-test-renderer';

import Menu from './Menu.component';

describe('<Menu />', () => {
  it('Matches the Menu snapshot', () => {
    const component = renderer.create(<Menu />).toJSON();
    expect(component).toMatchSnapshot();
  });
});
