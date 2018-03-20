/**
 * @file Button.test.js
 * Contains tests for Button.component.js.
 */

import React from 'react';
import renderer from 'react-test-renderer';

import Home from './Home.component';

describe('<Home />', () => {
  it('Matches the Header snapshot', () => {
    const component = renderer.create(<Home />).toJSON();
    expect(component).toMatchSnapshot();
  });
});
