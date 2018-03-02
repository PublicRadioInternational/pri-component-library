/**
 * @file index.js
 * Contains stories for storybook.
 */

import { configure } from '@storybook/react';

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
