/**
 * @file index.test.js
 * Contains tests for index.js
 */

import { readdir } from 'fs-extra';
import * as Components from './index';

it('Exports all expected components', async () => {
  const dirContents = await readdir('./src/components');
  expect(Object.keys(Components)).toEqual(dirContents);
});
