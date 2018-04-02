/**
 * @file TeaserList.test.js
 * Contains tests for TeaserList.component.js.
 */

import React from 'react';
import renderer from 'react-test-renderer';

import TeaserList from './TeaserList.component';

describe('<TeaserItem />', () => {
  it('Matches the Teaser List with more link snapshot', () => {
    const component = renderer
      .create(
        <TeaserList title="Test Title" moreTitle="More Stories" moreUrl="more/">
          <span>Test Item One</span>
          <span>test Item Two</span>
        </TeaserList>
      )
      .toJSON();
    expect(component).toMatchSnapshot();
  });

  it('Matches the Teaser List without more link snapshot', () => {
    const component = renderer
      .create(
        <TeaserList title="Test Title">
          <span>Test Item One</span>
          <span>test Item Two</span>
        </TeaserList>
      )
      .toJSON();
    expect(component).toMatchSnapshot();
  });
});
