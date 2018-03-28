/**
 * @file Section.test.js
 * Contains tests for Section.component.js.
 */

import React from 'react';
import renderer from 'react-test-renderer';

import Section from './Section.component';

describe('<Section />', () => {
  it('Matches the Section snapshot', () => {
    const component = renderer.create(<Section />).toJSON();
    expect(component).toMatchSnapshot();
  });
});
