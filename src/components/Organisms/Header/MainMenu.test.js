/**
 * @file MainMenu.test.js
 * Contains tests for MainMenu.component.js.
 */

import React from 'react';
import renderer from 'react-test-renderer';

import MainMenu from './MainMenu.component';

describe('<MainMenu />', () => {
  it('Matches the Main Menu snapshot', () => {
    const component = renderer.create(<MainMenu />).toJSON();
    expect(component).toMatchSnapshot();
  });
});
