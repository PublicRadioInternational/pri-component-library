/**
 * @file DropdownItem.test.js
 * Contains tests for DropdownItem.component.js.
 */

import React from 'react';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';

import DropdownItem from './DropdownItem.component';

describe('<DropdownItem />', () => {
  const onClick = jest.fn();

  const item = () => (
    <DropdownItem title="Google" url="https://google.com" onClick={onClick} />
  );

  const itemWrapper = shallow(item());

  it('Handles Link click events', () => {
    itemWrapper.find('a').simulate('click');
    expect(onClick).toHaveBeenCalledTimes(1);
  });

  it('Matches the Link snapshot', () => {
    const component = renderer.create(item());
    expect(component.toJSON()).toMatchSnapshot();
  });
});
