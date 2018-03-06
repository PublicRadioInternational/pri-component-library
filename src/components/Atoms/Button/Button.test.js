/**
 * @file Button.test.js
 * Contains tests for Button.js.
 */

import React from 'react';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import Button from './Button.component';

describe('<Button />', () => {
  const wrapper = shallow(<Button />);

  it('Creates a button.', () => {
    expect(wrapper.find('button')).not.toBeNull();
  });

  it('Renders correctly', () => {
    const component = renderer.create(<Button />);
    expect(component.toJSON()).toMatchSnapshot();
  });
});
