/**
 * @file TextBlock.test.js
 * Contains tests for TextBlock.component.js.
 */

import React from 'react';
import renderer from 'react-test-renderer';

import TextBlock from './TextBlock.component';

describe('<TextBlock />', () => {
  it('Matches the Text Block snapshot', () => {
    const component = renderer
      .create(
        <TextBlock
          title="About"
          body="By giving voice to our dynamic world, we inspire connection, action and hope."
          button="About Us"
          url="/about"
          icon="info"
        />
      )
      .toJSON();
    expect(component).toMatchSnapshot();
  });
});
