/**
 * @file Dropdown.test.js
 * Contains tests for Dropdown.component.js.
 */

import React from 'react';
import renderer from 'react-test-renderer';
import { mount } from 'enzyme';
import Dropdown from './Dropdown.component';

describe('<Dropdown />', () => {
  const onClick = jest.fn();

  const dropdown = () => (
    <Dropdown url="https://google.com" title="Listen" onClick={onClick} />
  );

  const wrapper = mount(dropdown());
  it('Handles link click events', () => {
    wrapper.find('a.btnGrpWhite').simulate('click');
    expect(onClick).toHaveBeenCalledTimes(1);
  });

  it('Can be opened and closed', () => {
    wrapper.find('button.btnDropdownWhite').simulate('click');
    expect(wrapper.state().isOpen).toBe(true);
  });

  it('Matches the snapshot', () => {
    const component = renderer.create(dropdown());
    expect(component.toJSON()).toMatchSnapshot();
  });
});
