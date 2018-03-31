/**
 * @file CtaMessage.test.js
 * Contains tests for CtaMessage.component.js.
 */

import React from 'react';
import renderer from 'react-test-renderer';

import CtaMessage from './CtaMessage.component';

describe('<CtaMessage />', () => {
  it('Matches the CTA Message Default snapshot', () => {
    const component = renderer
      .create(
        <CtaMessage
          data={{
            name: 'test_1',
            hash: '1234abcd'
          }}
        />
      )
      .toJSON();
    expect(component).toMatchSnapshot();
  });
});
