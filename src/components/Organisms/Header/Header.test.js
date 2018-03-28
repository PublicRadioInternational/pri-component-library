/**
 * @file Header.test.js
 * Contains tests for Header.component.js.
 */

import React from 'react';
import renderer from 'react-test-renderer';
import { mount } from 'enzyme';

import Header from './Header.component';

describe('<Header />', () => {
  it('Handles menu toggle events', () => {
    const wrapper = mount(<Header />);
    wrapper.find('.menuBtn').simulate('click');
    expect(wrapper.state().isMenuOpen).toEqual(true);
  });
  it('Matches the Header snapshot', () => {
    const component = renderer.create(<Header />).toJSON();
    expect(component).toMatchSnapshot();
  });
});
