/**
 * @file DropdownItem.test.js
 * Contains tests for DropdownItem.component.js.
 */

import React from 'react';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';

import DropdownItem from './DropdownItem.component';

describe('<DropdownItem />', () => {
  it('Handles Link click events', () => {
    const onClick = jest.fn();
    const itemWrapper = shallow(
      <DropdownItem url="https://google.com" onClick={onClick}>
        Google
      </DropdownItem>
    );
    itemWrapper.find('a').simulate('click');
    expect(onClick).toHaveBeenCalledTimes(1);
  });

  it('Matches the Link snapshot', () => {
    const onClick = jest.fn();
    const component = renderer.create(
      <DropdownItem url="https://google.com" onClick={onClick}>
        Google
      </DropdownItem>
    );
    expect(component.toJSON()).toMatchSnapshot();
  });
});
