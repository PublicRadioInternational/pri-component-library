/**
 * @file atoms.story.js
 * Story configuration for Atoms.
 */

import React from 'react';
import { storiesOf } from '@storybook/react';
import { checkA11y } from '@storybook/addon-a11y';
import { action } from '@storybook/addon-actions';
import {
  withKnobs,
  text,
  select,
  boolean,
  object
} from '@storybook/addon-knobs/react';
import styles from '@sambego/storybook-styles';
import startCase from 'lodash/startCase';

import Button from './Button/Button.component';
import ButtonInput from './Button/ButtonInput.component';

const stories = storiesOf('Atoms/Buttons', module);

// Convert flat colors array to object keyed by color for title cased label.
// Example: ['color'] to { color: 'Color' }.
const buttonColors = Button.colors.reduce(
  (obj, color) => ({ ...obj, [color.toLowerCase()]: startCase(color) }),
  {}
);

/**
 * Add storybook definition for buttons.
 */
stories.addDecorator(checkA11y);
stories.addDecorator(withKnobs);
stories.addDecorator(
  styles({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '100vh'
  })
);

stories.add('Button (with Knobs)', () => (
  <Button
    onClick={action('button-clicked')}
    color={select('Color', buttonColors, Button.colors[0].toLowerCase())}
    small={boolean('Small')}
    href={text('URL')}
    type={select('Input Type', ['button', 'submit', 'reset'])}
    {...object('Other Attributes', {}, 'BTNOPT-1')}
  >
    {text('Label', 'Listen')}
  </Button>
));

stories.add('Orange', () => (
  <Button onClick={action('button-clicked')} color="orange">
    Donate
  </Button>
));

stories.add('Input', () => (
  <ButtonInput onClick={action('button-clicked')} value="Submit" />
));

stories.add('Input with Icon', () => (
  <ButtonInput onClick={action('button-clicked')} value="Submit" icon="heart" />
));
