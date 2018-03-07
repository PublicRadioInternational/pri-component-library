/**
 * @file index.test.js
 * Contains tests for index.js
 */

import path from 'path';
import glob from 'glob';
import * as Components from './index';

describe('index', () => {
  it('Exports valid component objects', () => {
    glob('./src/components/**/*.component.js', {}, (er, files) => {
      const components = files.map(filepath => {
        // Grab the file name.
        const filename = path.parse(filepath).name;
        // Parse out the component name.
        return filename.split('.')[0] || null;
      });

      expect(Object.keys(Components)).toEqual(components);
    });
  });
});
