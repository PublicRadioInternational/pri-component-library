/**
 * @file CtaPrompt.test.js
 * Contains tests for CtaPrompt.component.js.
 */

import React from 'react';
import renderer from 'react-test-renderer';
import CtaPrompt from './CtaPrompt.component';

describe('<CtaPrompt />', () => {
  it('Matches the CTA Prompt Default snapshot', () => {
    const component = renderer.create(<CtaPrompt />).toJSON();
    expect(component).toMatchSnapshot();
  });
});
