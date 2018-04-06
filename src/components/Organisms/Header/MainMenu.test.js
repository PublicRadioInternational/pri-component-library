/**
 * @file MainMenu.test.js
 * Contains tests for MainMenu.component.js.
 */

import React from 'react';
import renderer from 'react-test-renderer';
import { mount } from 'enzyme';

import MainMenu from './MainMenu.component';

describe('<MainMenu />', () => {
  it('Handles menu close events', () => {
    const toggleOpen = jest.fn();
    const wrapper = mount(<MainMenu toggleOpen={toggleOpen} />);
    wrapper.find('.closeMenu').simulate('click');
    expect(toggleOpen).toHaveBeenCalledTimes(1);
  });

  it('Matches the Main Menu snapshot', () => {
    const component = renderer.create(<MainMenu />).toJSON();
    expect(component).toMatchSnapshot();
  });
});
