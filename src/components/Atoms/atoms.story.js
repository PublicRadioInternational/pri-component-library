/**
 * @file atoms.story.js
 * Story configuration for Atoms.
 */

import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import Button from './Button/Button.component';

/**
 * Add storybook definition for buttons.
 */
storiesOf('Atoms/Buttons', module)
  .add('Default', () => (
    <Button onClick={action('button-clicked')}>Listen</Button>
  ))
  .add('Orange', () => (
    <Button onClick={action('button-clicked')} color="Orange">
      Donate
    </Button>
  ))
  .add('Icon', () => (
    <Button onClick={action('button-clicked')} icon="envelope">
      Newsletters
    </Button>
  ));
