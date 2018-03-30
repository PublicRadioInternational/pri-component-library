/**
 * @file TeaserItem.test.js
 * Contains tests for TeaserItem.component.js.
 */

import React from 'react';
import renderer from 'react-test-renderer';

import TeaserItem from './TeaserItem.component';

describe('<TeaserItem />', () => {
  it('Matches the Teaser Item Default snapshot', () => {
    const component = renderer
      .create(
        <TeaserItem
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

  it('Matches the Teaser Item without program snapshot', () => {
    const component = renderer
      .create(<TeaserItem title="Test Title" url="/" hasAudio />)
      .toJSON();
    expect(component).toMatchSnapshot();
  });

  it('Matches the Teaser Item without program or audio snapshot', () => {
    const component = renderer
      .create(<TeaserItem title="Test Title" url="/" />)
      .toJSON();
    expect(component).toMatchSnapshot();
  });
});
