/**
 * @file DropdownItem.test.js
 * Contains tests for DropdownItem.component.js.
 */

import React from 'react';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';

import DropdownItem from './DropdownItem.component';

describe('<DropdownItem />', () => {
  it('Handles Dropdown click events', () => {
    const onClick = jest.fn();
    const itemWrapper = shallow(
      <DropdownItem url="https://google.com" onClick={onClick}>
        Google
      </DropdownItem>
    );
    itemWrapper.find('a').simulate('click');
    expect(onClick).toHaveBeenCalledTimes(1);
    expect(itemWrapper).toMatchSnapshot();
  });

  it('Matches the Dropdown Item Link snapshot', () => {
    const component = renderer.create(
      <DropdownItem url="https://google.com">Google</DropdownItem>
    );
    expect(component.toJSON()).toMatchSnapshot();
  });

  it('Matches the Dropdown Item Heading snapshot', () => {
    const component = renderer.create(<DropdownItem heading="Google" />);
    expect(component.toJSON()).toMatchSnapshot();
  });

  it('Matches the Dropdown Item HR snapshot', () => {
    const component = renderer.create(<DropdownItem isHr />);
    expect(component.toJSON()).toMatchSnapshot();
  });

  it('Matches the Dropdown Item any children snapshot', () => {
    const component = renderer.create(<DropdownItem />);
    expect(component.toJSON()).toMatchSnapshot();
  });
});
