/**
 * @file Accordion.test.js
 * Contains tests for Accordion.component.js.
 */

import React from 'react';
import renderer from 'react-test-renderer';

import Accordion from './Accordion.component';

describe('<Accordion />', () => {
  it('Matches the List snapshot', () => {
    const component = renderer
      .create(
        <Accordion
          accordionTitle="Test"
          accordionList={[
            { name: 'Google', url: 'http://google.com' },
            { name: 'Yahoo', url: 'http://yahoo.com' }
          ]}
        />
      )
      .toJSON();
    expect(component).toMatchSnapshot();
  });
});
