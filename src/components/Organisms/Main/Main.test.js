/**
 * @file Main.test.js
 * Contains tests for Main.component.js.
 */

import React from 'react';
import renderer from 'react-test-renderer';

import Main from './Main.component';
import Layout from './Layout.component';

describe('<Main />', () => {
  it('Matches the Main content area snapshot', () => {
    const component = renderer.create(<Main />).toJSON();
    expect(component).toMatchSnapshot();
  });
});

describe('<Layout />', () => {
  it('Matches the Layout content area snapshot', () => {
    const component = renderer.create(<Layout />).toJSON();
    expect(component).toMatchSnapshot();
  });
});
