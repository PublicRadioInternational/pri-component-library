/**
 * @file molecules.story.js
 * Story configuration for Molecules.
 */

import React from 'react';
import { storiesOf } from '@storybook/react';
import { checkA11y } from '@storybook/addon-a11y';
import { action } from '@storybook/addon-actions';

import Dropdown from './Dropdown/Dropdown.component';
import DropdownItem from '../Atoms/DropdownItem/DropdownItem.component';

import List from './List/List.component';
import Search from './Search/Search.component';
import CardItem from './CardItem/CardItem.component';
import Hero from './Hero/Hero.component';
import MenuList from './MenuList/MenuList.component';

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

const baseUrl = 'https://www.pri.org';
storiesOf('Molecules/MenuList', module)
  .addDecorator(checkA11y)
  .add('Menu List', () => (
    <MenuList
      label="Quick Links"
      menuListItems={[
        {
          name: "PRI's The World",
          url: `${baseUrl}/programs/the-world`,
          itemLinkClass: 'world'
        },
        {
          name: 'Studio360',
          url: `${baseUrl}/programs/studio-360`,
          itemLinkClass: 'studio'
        },
        {
          name: 'GlobalPost',
          url: `${baseUrl}/programs/globalpost`,
          itemLinkClass: 'globalPost'
        },
        {
          name: "Across Women's Lives",
          url: `${baseUrl}/verticals/across-womens-lives`,
          itemLinkClass: 'acrossWomensLives'
        },
        {
          name: 'Global Nation',
          url: `${baseUrl}/verticals/global-nation`,
          itemLinkClass: 'globalNation'
        },
        {
          name: 'Global Security',
          url: `${baseUrl}/verticals/global-security`,
          itemLinkClass: 'globalSecurity'
        },
        {
          name: 'Livable Planet',
          url: `${baseUrl}/verticals/livable-planet`,
          itemLinkClass: 'livablePlanet'
        },
        { name: 'View all Programs & Podcasts', url: `${baseUrl}/shows` }
      ]}
    />
  ));
