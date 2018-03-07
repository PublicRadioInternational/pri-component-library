/**
 * @file Dropdown.test.js
 * Contains tests for Button.js.
 */

import React from 'react';
import renderer from 'react-test-renderer';
import Dropdown from './Dropdown.component';

describe('<Dropdown />', () => {
  const btnTitle = 'Listen';
  const items = [
    {
      id: 1,
      url: 'http://google.com',
      title: 'Google.com'
    },
    {
      id: 2,
      url: '/',
      title: 'Local url'
    }
  ];

  it('Renders correctly', () => {
    const component = renderer.create(
      <Dropdown btnTitle={btnTitle} items={items} />
    );
    expect(component.toJSON()).toMatchSnapshot();
  });
});
