/**
 * @file atoms.story.js
 * Story configuration for Atoms.
 */

import React from 'react';
import { storiesOf } from '@storybook/react';
import { checkA11y } from '@storybook/addon-a11y';
import { action } from '@storybook/addon-actions';

import Button from './Button/Button.component';
import ButtonLink from './Button/ButtonLink.component';
import ButtonInput from './Button/ButtonInput.component';
import ArticleItem from './Article/ArticleItem.component';

/**
 * Add storybook definition for buttons.
 */
storiesOf('Atoms/Buttons', module)
  .addDecorator(checkA11y)
  .add('Default', () => (
    <ButtonLink onClick={action('button-clicked')}>Listen</ButtonLink>
  ))
  .add('Orange', () => (
    <Button onClick={action('button-clicked')} color="Orange">
      Donate
    </Button>
  ))
  .add('Input', () => (
    <ButtonInput onClick={action('button-clicked')} value="Submit" />
  ))
  .add('Input with Icon', () => (
    <ButtonInput
      onClick={action('button-clicked')}
      value="Submit"
      icon="heart"
    />
  ));

/**
 * Add storybook definition for Article items (for lists).
 */
storiesOf('Atoms/Articles', module)
  .addDecorator(checkA11y)
  .add('ArticleItem Full', () => (
    <ArticleItem
      title="For poor and minority children, excessive air pollution creates a toxic learning environment"
      url="stories/2018-03-03/poor-and-minority-children-excessive-air-pollution-creates-toxic-learning"
      programTitle="Living on Earth"
      programUrl="programs/living-earth"
      hasAudio
    />
  ))
  .add('ArticleItem No audio', () => (
    <ArticleItem
      title="Progressives in Congress side with Trump on trade"
      url="stories/2018-03-06/progressives-side-trump-trade"
      programTitle="PRI's The World"
      programUrl="programs/the-world"
    />
  ))
  .add('ArticleItem No program', () => (
    <ArticleItem
      title="North Korea says it's willing to hold talks with the US and halt nuclear pursuit while negotiations last"
      url="stories/2018-03-06/north-korea-says-its-willing-hold-talks-us-and-halt-nuclear-pursuit-while"
    />
  ));
