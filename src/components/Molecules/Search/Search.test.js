/**
 * @file Search.test.js
 * Contains tests for Search.component.js.
 */

import React from 'react';
import renderer from 'react-test-renderer';
import { mount } from 'enzyme';
import Search from './Search.component';

describe('<Search />', () => {
  it('Handles input onChange events', () => {
    const wrapper = mount(<Search />);
    const input = wrapper.find('input[type="text"]');
    input.instance().value = 'test';
    input.simulate('change');
    expect(wrapper.state('searchFieldValue')).toBe('test');
  });

  it('Handles form submit events', () => {
    window.location.assign = jest.fn();
    const wrapper = mount(<Search />);
    const button = wrapper.find('form');
    button.simulate('submit');
    expect(window.location.assign).toHaveBeenCalledTimes(1);
  });

  it('Matches the snapshot', () => {
    const component = renderer.create(<Search baseUrl="http://google.com" />);
    expect(component.toJSON()).toMatchSnapshot();
  });
});
