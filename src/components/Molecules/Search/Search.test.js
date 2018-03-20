/**
 * @file Search.test.js
 * Contains tests for Search.component.js.
 */

import React from 'react';
import renderer from 'react-test-renderer';
import { mount } from 'enzyme';
import Search from './Search.component';

describe('<Search />', () => {
  // it('Handles form submit events', () => {
  //   const onSubmit = jest.fn();
  //   const wrapper = mount(<Search />);
  //   wrapper.simulate('click');
  //   expect(onSubmit).toHaveBeenCalledTimes(1);
  // });

  it('Handles input onChange events', () => {
    const wrapper = mount(<Search />);
    const input = wrapper.find('input[type="text"]');
    input.instance().value = 'test';
    input.simulate('change');
    expect(wrapper.state('searchFieldValue')).toBe('test');
  });

  it('Matches the snapshot', () => {
    const component = renderer.create(<Search baseUrl="http://google.com" />);
    expect(component.toJSON()).toMatchSnapshot();
  });
});
