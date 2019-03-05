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
    const wrapper = mount(<Search />);
    const form = wrapper.find('form');
    const input = wrapper.find('input[type="text"]');
    input.instance().value = 'test';
    input.simulate('change');
    form.simulate('submit');
    expect(form.getDOMNode().getAttribute('action')).toBe(
      'https://www.pri.org/search/google/test'
    );
  });

  it('Matches the snapshot', () => {
    const component = renderer.create(<Search baseUrl="http://google.com" />);
    expect(component.toJSON()).toMatchSnapshot();
  });
});
