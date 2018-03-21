/**
 * @file organisms.story.js
 * Story configuration for Organisms.
 */

import React from 'react';
import { storiesOf } from '@storybook/react';

import Header from './Header/Header.component';
import Footer from './Footer/Footer.component';
import Main from './Main/Main.component';

/**
 * Add storybook definition for Organisms.
 */
storiesOf('Organisms/Header', module).add('Default', () => (
  <Header baseUrl="https://www.pri.org" />
));

storiesOf('Organisms/Footer', module).add('Site Footer', () => <Footer />);

storiesOf('Organisms/Main', module).add('Main Content Area', () => <Main />);
