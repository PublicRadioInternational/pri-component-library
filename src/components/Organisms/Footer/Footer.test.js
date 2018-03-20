/**
 * @file Footer.test.js
 * Contains tests for Footer.component.js.
 */

import React from 'react';
import renderer from 'react-test-renderer';

import Footer from './Footer.component';

describe('<Footer />', () => {
  it('Matches the Header snapshot', () => {
    const component = renderer.create(<Footer />).toJSON();
    expect(component).toMatchSnapshot();
  });
});
