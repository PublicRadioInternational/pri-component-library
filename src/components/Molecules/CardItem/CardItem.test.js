/**
 * @file CardItem.test.js
 * Contains tests for CardItem.component.js.
 */

import React from 'react';
import renderer from 'react-test-renderer';

import CardItem from './CardItem.component';

describe('<CardItem />', () => {
  it('Matches the Card Item Default snapshot', () => {
    const component = renderer
      .create(<CardItem url="/" title="Test Title" />)
      .toJSON();
    expect(component).toMatchSnapshot();
  });

  it('Matches the Card Item Large snapshot', () => {
    const component = renderer
      .create(<CardItem url="/" title="Test Title" large />)
      .toJSON();
    expect(component).toMatchSnapshot();
  });
});
