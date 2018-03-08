/**
 * @file Dropdown.test.js
 * Contains tests for Dropdown.component.js.
 */

import React from 'react';
import renderer from 'react-test-renderer';
import Dropdown from './Dropdown.component';
import DropdownItem from '../DropdownItem/DropdownItem.component';

describe('<Dropdown />', () => {
  const dropdown = () => (
    <Dropdown url="https://google.com" title="Listen" onClick={() => {}}>
      <DropdownItem title="Google" url="https://google.com" />
      <DropdownItem title="Custom Action" onClick={() => {}} />
    </Dropdown>
  );

  it('Matches the snapshot', () => {
    const component = renderer.create(dropdown());
    expect(component.toJSON()).toMatchSnapshot();
  });
});
