/**
 * @file Dropdown.test.js
 * Contains tests for Button.js.
 */

import React from 'react';
import renderer from 'react-test-renderer';
import { Dropdown, DropdownItem } from './Dropdown.component';

describe('<Dropdown />', () => {
  it('Matches the snapshot', () => {
    const component = renderer.create(
      <Dropdown title="Listen" onClick={() => {}}>
        <DropdownItem title="Google" url="https://google.com" />
        <DropdownItem title="Custom Action" onClick={() => {}} />
      </Dropdown>
    );
    expect(component.toJSON()).toMatchSnapshot();
  });
});
