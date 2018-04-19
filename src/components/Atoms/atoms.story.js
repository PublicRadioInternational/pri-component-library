/**
 * @file atoms.story.js
 * Story configuration for Atoms.
 */

import React from 'react';
import { storiesOf } from '@storybook/react';
import { checkA11y } from '@storybook/addon-a11y';
import { withNotes } from '@storybook/addon-notes';
import { action } from '@storybook/addon-actions';

import Button from './Button/Button.component';
import ButtonLink from './Button/ButtonLink.component';
import ButtonInput from './Button/ButtonInput.component';

// import ButtonMarkdown from './Button/ButtonMarkdown.md';

/**
 * Add storybook definition for buttons.
 */
storiesOf('Atoms/Buttons', module)
  .addDecorator(checkA11y, withNotes)
  .add(
    'Default',
    () => <ButtonLink onClick={action('button-clicked')}>Listen</ButtonLink>,
    { notes: 'test' }
  )
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
