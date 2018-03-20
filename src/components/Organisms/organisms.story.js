/**
 * @file atoms.story.js
 * Story configuration for Atoms.
 */

import React from 'react';
import { storiesOf } from '@storybook/react';

import Header from './Header/Header.component';
import Footer from './Footer/Footer.component';

/**
 * Add storybook definition for Dropdowns.
 */
storiesOf('Organisms/Header', module).add('Site Header', () => <Header />);

storiesOf('Organisms/Footer', module).add('Site Footer', () => <Footer />);
