/**
 * @file atoms.story.js
 * Story configuration for Atoms.
 */

import React from 'react';
import { storiesOf } from '@storybook/react';
import { checkA11y } from '@storybook/addon-a11y';

import Home from './Home/Home.component';

/**
 * Add storybook definition for Dropdowns.
 */
storiesOf('Pages/Home', module)
  .addDecorator(checkA11y)
  .add('Default', () => <Home />);
