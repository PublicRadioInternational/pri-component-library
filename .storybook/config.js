/**
 * @file config.js
 * Contains configuration for Storybook.
 */

require('babel-polyfill');
import { configure } from '@storybook/react';
import { configure as configureEnzyme } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import styles from '../src/components/00_global/reset.css';
import globalStyles from '../src/components/00_global/global.css';

// Configure Enzyme
configureEnzyme({ adapter: new Adapter() });

/**
 * Loads story files.
 */
const loadStories = () => {
  // Fetch all *.story.js files from src/components subdirs.
  // {@see https://webpack.js.org/guides/dependency-management/#require-context}.
  const req = require.context('../src/components', true, /\.story\.js$/);
  req.keys().forEach(req);
};

// Configure storybook.
configure(loadStories, module);
