/**
 * @file atoms.story.js
 * Story configuration for Atoms.
 */

import React from 'react';
import { storiesOf } from '@storybook/react';
import { checkA11y } from '@storybook/addon-a11y';
import { action } from '@storybook/addon-actions';
import { withInfo } from '@storybook/addon-info';

import Button from './Button/Button.component';
import ButtonLink from './Button/ButtonLink.component';
import ButtonInput from './Button/ButtonInput.component';

/**
 * Add storybook definition for buttons.
 */
storiesOf('Atoms/Buttons', module)
  .addDecorator(checkA11y)
  .add(
    'Link Button',
    withInfo(`
      A link element styled like a button.
    `)(() => <ButtonLink onClick={action('button-clicked')}>Listen</ButtonLink>)
  )
  .add(
    'Button - Orange',
    withInfo(`
    A general purpose button element styled orange with an onClick function.
  `)(() => (
      <Button onClick={action('button-clicked')} color="Orange">
        Donate
      </Button>
    ))
  )
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
