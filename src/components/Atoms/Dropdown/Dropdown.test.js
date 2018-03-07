/**
 * @file Dropdown.test.js
 * Contains tests for Button.js.
 */

import React from 'react';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import Dropdown from './Dropdown.component';

describe('<Dropdown />', () => {
  const wrapper = shallow(<Dropdown />);

  it('Creates a button.', () => {
    expect(wrapper.find('button')).not.toBeNull();
  });

  it('Renders correctly', () => {
    const component = renderer.create(<Dropdown />);
    expect(component.toJSON()).toMatchSnapshot();
  });
});
