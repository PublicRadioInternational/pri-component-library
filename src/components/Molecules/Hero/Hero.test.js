/**
 * @file hero
 * Contains tests for Hero.component.js.
 */

import React from 'react';
import renderer from 'react-test-renderer';

import Hero from './Hero.component';

jest.mock('intersection-observer');

describe('<Hero />', () => {
  it('Matches the Hero snapshot', () => {
    const component = renderer
      .create(
        <Hero
          hasAudio
          url="https://google.com"
          title="Opioid addicts are turning to a clinic in Mexico to break their addiction, but there's a catch. The treatment is illegal in the US."
          summary="Ibogaine is a powerful hallucinogenic drug that has been shown to have surprising success in treating addiction. But it comes with risks that, so far, have made its use in the US illegal."
          category="GlobalPost"
          categoryUrl="https://bing.com"
          imgSrc="https://media.pri.org/s3fs-public/styles/feature_large/public/story/images/JL1_8064.JPG?itok=WfGYKL2U"
          imgAlt="Opioid Addiction"
        />
      )
      .toJSON();
    expect(component).toMatchSnapshot();
  });
});
