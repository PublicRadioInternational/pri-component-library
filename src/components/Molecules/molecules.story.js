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
      audio
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
