/**
 * @file atoms.story.js
 * Story configuration for Atoms.
 */

import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Button from './Button/Button.component';

storiesOf('Atoms/Buttons', module).add('Default Button', () => (
  <Button onClick={action('button-clicked')}>Default Button</Button>
));
