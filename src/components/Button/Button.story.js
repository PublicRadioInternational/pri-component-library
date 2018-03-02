/**
 * @file index.js
 * Story configuration for Button component.
 */

import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Button from './Button';

storiesOf('Button', module).add('Toggle Button', () => (
  <Button onClick={action('button-clicked')}>Hello Button</Button>
));
