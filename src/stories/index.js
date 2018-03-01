/**
 * @file index.js
 * Contains stories for storybook.
 */

import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Button from '../components/Button/Button';

storiesOf('Button', module).add('Toggle Button', () => (
  <Button onClick={action('button-clicked')}>Hello Button</Button>
));
