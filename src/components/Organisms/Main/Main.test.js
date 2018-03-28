/**
 * @file Main.test.js
 * Contains tests for Main.component.js.
 */

import React from 'react';
import renderer from 'react-test-renderer';

import Main from './Main.component';

describe('<Main />', () => {
  it('Matches the Main content area snapshot', () => {
    const component = renderer.create(<Main />).toJSON();
    expect(component).toMatchSnapshot();
  });
});
