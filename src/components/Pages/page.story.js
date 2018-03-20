/**
 * @file atoms.story.js
 * Story configuration for Atoms.
 */

import React from 'react';
import { storiesOf } from '@storybook/react';

import Home from './Home/Home.component';

/**
 * Add storybook definition for Dropdowns.
 */
storiesOf('Pages/Home', module).add('Default', () => <Home />);
