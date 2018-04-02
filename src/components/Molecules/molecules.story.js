/**
 * @file molecules.story.js
 * Story configuration for Molecules.
 */

import React from 'react';
import Parser from 'html-react-parser';
import { storiesOf } from '@storybook/react';
import { checkA11y } from '@storybook/addon-a11y';
import { action } from '@storybook/addon-actions';

import Dropdown from './Dropdown/Dropdown.component';
import DropdownItem from '../Atoms/DropdownItem/DropdownItem.component';

import List from './List/List.component';
import Search from './Search/Search.component';
import CardItem from './CardItem/CardItem.component';
import TeaserItem from './Teaser/TeaserItem.component';
import Hero from './Hero/Hero.component';

/**
 * Add storybook definition for Molecules.
 */
storiesOf('Molecules/Dropdown', module)
  .addDecorator(checkA11y)
  .add('Default', () => (
    <Dropdown
      url="https://google.com"
      title="Listen"
      onClick={action('drowndown-button-clicked')}
    >
      <DropdownItem url="https://google.com">Google</DropdownItem>
      <DropdownItem onClick={action('dropdown-button-item-clicked')}>
        Custom Action
      </DropdownItem>
    </Dropdown>
  ))
  .add('Orange', () => (
    <Dropdown
      url="https://google.com"
      title="Donate"
      color="Orange"
      onClick={action('drowndown-button-clicked')}
      small
      icon="heart"
    >
      <DropdownItem url="https://google.com">Google</DropdownItem>
      <DropdownItem onClick={action('dropdown-button-item-clicked')}>
        Custom Action
      </DropdownItem>
    </Dropdown>
  ));

/**
 * Add storybook definition for Lists.
 */
storiesOf('Molecules/List', module)
  .addDecorator(checkA11y)
  .add('Simple', () => (
    <List
      listItems={[
        { name: 'Google', url: 'http://google.com' },
        { name: 'Yahoo', url: 'http://yahoo.com' }
      ]}
    />
  ));

/**
 * Add storybook definition for Search.
 */
storiesOf('Molecules/Search', module)
  .addDecorator(checkA11y)
  .add('Default', () => <Search />);

/**
 * Add storybook definition for CardItem.
 */
storiesOf('Molecules/CardItem', module)
  .addDecorator(checkA11y)
  .add('Default', () => (
    <CardItem
      title="50 years on, India is celebrating the Beatles' infamous trip to the country"
      url="stories/2017-07-24/clearing-mines-and-explosives-mosul"
      imgSrc="https://media.pri.org/s3fs-public/styles/feature_small/public/story/images/Beatles_India_02.jpg?itok=iG8TKNDu"
      imgAlt="Alt Text"
      blurb="When the Beatles embarked on their famous discovery of India to study transcendental meditation, the Indian government was far more wary. "
      hasAudio
    />
  ));

storiesOf('Molecules/CardItem', module)
  .addDecorator(checkA11y)
  .add('Large', () => (
    <CardItem
      title="50 years on, India is celebrating the Beatles' infamous trip to the country"
      url="stories/2017-07-24/clearing-mines-and-explosives-mosul"
      imgSrc="https://media.pri.org/s3fs-public/styles/feature_medium/public/story/images/180302copbridge.jpg?itok=52GppaOv"
      imgAlt="Alt Text"
      blurb="When the Beatles embarked on their famous discovery of India to study transcendental meditation, the Indian government was far more wary. "
      large
    />
  ));

storiesOf('Molecules/CardItem', module)
  .addDecorator(checkA11y)
  .add('Freeform', () => (
    <CardItem
      freeform
      title="50 years on, India is celebrating the Beatles' infamous trip to the country"
      url="stories/2017-07-24/clearing-mines-and-explosives-mosul"
      blurb={Parser(
        '<h2>Header within a freeform body</h2><h2><a href="#">Header within a freeform body and has a link</a></h2><p>Science and stories for a meaningful life. Hosted by award-winning professor Dacher Keltner, The Science of Happiness highlights the most provocative and practical findings to have emerged from the ground-breaking science of compassion, gratitude, mindfulness, and awe. A co-production with the Greater Good Science Center at UC Berkeley. <a href="#">This is a link</a></p>'
      )}
    />
  ));

/**
 * Add storybook definition for Hero.
 */
storiesOf('Molecules/Hero', module)
  .addDecorator(checkA11y)
  .add('Default', () => (
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
  ));

/**
 * Add storybook definition for Teaser items (for lists).
 */
storiesOf('Molecules/Teaser', module)
  .addDecorator(checkA11y)
  .add('TeaserItem Full', () => (
    <TeaserItem
      title="For poor and minority children, excessive air pollution creates a toxic learning environment"
      url="stories/2018-03-03/poor-and-minority-children-excessive-air-pollution-creates-toxic-learning"
      programTitle="Living on Earth"
      programUrl="programs/living-earth"
      hasAudio
    />
  ))
  .add('TeaserItem No audio', () => (
    <TeaserItem
      title="Progressives in Congress side with Trump on trade"
      url="stories/2018-03-06/progressives-side-trump-trade"
      programTitle="PRI's The World"
      programUrl="programs/the-world"
    />
  ))
  .add('TeaserItem No program', () => (
    <TeaserItem
      title="North Korea says it's willing to hold talks with the US and halt nuclear pursuit while negotiations last"
      url="stories/2018-03-06/north-korea-says-its-willing-hold-talks-us-and-halt-nuclear-pursuit-while"
    />
  ));
