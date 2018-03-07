/**
 * @file index.js
 * Story configuration for Button component.
 */

import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { checkA11y } from '@storybook/addon-a11y';
import Button from './Button';

storiesOf('Button', module)
  .addDecorator(checkA11y)
  .add('Toggle Button', () => (
    <Button onClick={action('button-clicked')}>Hello Button</Button>
  ));
