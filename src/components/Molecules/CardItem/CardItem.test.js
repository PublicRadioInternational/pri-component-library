/**
 * @file Card.test.js
 * Contains tests for Card.component.js.
 */

import React from 'react';
import renderer from 'react-test-renderer';

import CardItem from './CardItem.component';

describe('<CardItem />', () => {
  it('Matches the Card Item snapshot', () => {
    const component = renderer
      .create(<CardItem url="/" title="Test Title" />)
      .toJSON();
    expect(component).toMatchSnapshot();
  });
});
