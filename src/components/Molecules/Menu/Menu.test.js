/**
 * @file Menu.test.js
 * Contains tests for Menu.component.js.
 */

import React from 'react';
import renderer from 'react-test-renderer';

import Menu from './Menu.component';

describe('<Menu />', () => {
  it('Matches the Menu snapshot', () => {
    const component = renderer
      .create(
        <Menu
          menuItems={[
            { name: 'Google', url: 'http://google.com' },
            { name: 'Yahoo', url: 'http://yahoo.com' }
          ]}
        />
      )
      .toJSON();
    expect(component).toMatchSnapshot();
  });
});
