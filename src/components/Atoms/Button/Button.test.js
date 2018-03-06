/**
 * @file Button.test.js
 * Contains tests for Button.js.
 */

import React from 'react';
import renderer from 'react-test-renderer';
import Button from './Button.component';

describe('<Button />', () => {
  it('Renders without crashing', () => {
    const component = renderer.create(<Button />);
    expect(component.toJSON()).toMatchSnapshot();
  });
});
