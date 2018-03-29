/**
 * @file ArticleItem.test.js
 * Contains tests for ArticleItem.component.js.
 */

import React from 'react';
import renderer from 'react-test-renderer';

import ArticleItem from './ArticleItem.component';

describe('<ArticleItem />', () => {
  it('Matches the Article Item Default snapshot', () => {
    const component = renderer
      .create(
        <ArticleItem
          title="Test Title"
          url="/"
          programTitle="test Program"
          programUrl="programs/"
          hasAudio
        />
      )
      .toJSON();
    expect(component).toMatchSnapshot();
  });

  it('Matches the Article Item without program snapshot', () => {
    const component = renderer
      .create(<ArticleItem title="Test Title" url="/" hasAudio />)
      .toJSON();
    expect(component).toMatchSnapshot();
  });

  it('Matches the Article Item without program or audio snapshot', () => {
    const component = renderer
      .create(<ArticleItem title="Test Title" url="/" />)
      .toJSON();
    expect(component).toMatchSnapshot();
  });
});
