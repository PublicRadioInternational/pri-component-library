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
      .create(
        <CardItem
          url="/"
          title="Test Title"
          imgSrc="http://placehold.it/1920x1080.png"
          imgAlt="Placeholder Image"
          blurb="Test Teaser"
        />
      )
      .toJSON();
    expect(component).toMatchSnapshot();
  });

  it('Matches the Card Item Large snapshot', () => {
    const component = renderer
      .create(<CardItem url="/" title="Test Title" large />)
      .toJSON();
    expect(component).toMatchSnapshot();
  });

  it('Matches the Card Item No Link snapshot', () => {
    const component = renderer
      .create(
        <CardItem
          title="Test Title"
          imgSrc="http://placehold.it/1920x1080.png"
          freeform
        />
      )
      .toJSON();
    expect(component).toMatchSnapshot();
  });
});
