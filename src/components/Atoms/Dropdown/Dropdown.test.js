/**
 * @file Dropdown.test.js
 * Contains tests for Dropdown.component.js.
 */

import React from 'react';
import renderer from 'react-test-renderer';
import { mount } from 'enzyme';
import Dropdown from './Dropdown.component';

describe('<Dropdown />', () => {
  it('Handles link click events', () => {
    const onClick = jest.fn();
    const wrapper = mount(
      <Dropdown url="https://google.com" title="Listen" onClick={onClick} />
    );
    wrapper.find('a.btnWhite .btnGrp').simulate('click');
    expect(onClick).toHaveBeenCalledTimes(1);
  });

  it('Can be opened and closed', () => {
    const wrapper = mount(
      <Dropdown url="https://google.com" title="Listen">
        <span>One</span>
        <span>Two</span>
      </Dropdown>
    );
    expect(wrapper.find('.dropdown')).toHaveLength(0);
    wrapper.find('button.btnDropdownWhite').simulate('click');
    expect(wrapper.find('.dropdown')).toHaveLength(1);
  });

  it('Matches the snapshot', () => {
    const onClick = jest.fn();
    const component = renderer.create(
      <Dropdown url="https://google.com" title="Listen" onClick={onClick} />
    );
    expect(component.toJSON()).toMatchSnapshot();
  });
});
