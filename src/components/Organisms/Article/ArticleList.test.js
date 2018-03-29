/**
 * @file ArticleList.test.js
 * Contains tests for ArticleList.component.js.
 */

import React from 'react';
import renderer from 'react-test-renderer';

import ArticleList from './ArticleList.component';

describe('<ArticleItem />', () => {
  it('Matches the Article List with more link snapshot', () => {
    const component = renderer
      .create(
        <ArticleList
          title="Test Title"
          moreTitle="More Stories"
          moreUrl="more/"
        >
          <span>Test Item One</span>
          <span>test Item Two</span>
        </ArticleList>
      )
      .toJSON();
    expect(component).toMatchSnapshot();
  });

  it('Matches the Article List without more link snapshot', () => {
    const component = renderer
      .create(
        <ArticleList title="Test Title">
          <span>Test Item One</span>
          <span>test Item Two</span>
        </ArticleList>
      )
      .toJSON();
    expect(component).toMatchSnapshot();
  });
});
