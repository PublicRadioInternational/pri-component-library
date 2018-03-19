/**
 * @file atoms.story.js
 * Story configuration for Atoms.
 */

import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import Button from './Button/Button.component';
import ButtonLink from './Button/ButtonLink.component';
import ButtonInput from './Button/ButtonInput.component';

/**
 * Add storybook definition for buttons.
 */
storiesOf('Atoms/Buttons', module)
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
