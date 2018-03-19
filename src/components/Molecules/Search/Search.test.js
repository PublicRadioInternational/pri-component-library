/**
 * @file Dropdown.test.js
 * Contains tests for Dropdown.component.js.
 */

import React from 'react';
import renderer from 'react-test-renderer';
import Search from './Search.component';

describe('<Search />', () => {
  it('Matches the snapshot', () => {
    const component = renderer.create(<Search />);
    expect(component.toJSON()).toMatchSnapshot();
  });
});
