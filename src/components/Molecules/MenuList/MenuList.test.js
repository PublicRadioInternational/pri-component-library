/**
 * @file MenuList.test.js
 * Contains tests for MenuList.component.js.
 */

import React from 'react';
import renderer from 'react-test-renderer';

import MenuList from './MenuList.component';

describe('<MenuList />', () => {
  it('Matches the Menu List snapshot', () => {
    const component = renderer.create(<MenuList />).toJSON();
    expect(component).toMatchSnapshot();
  });
});
