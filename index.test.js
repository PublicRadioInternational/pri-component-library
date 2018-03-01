/**
 * @file index.test.js
 * Contains tests for index.js
 */

import { Button as ButtonExp } from './index';
import Button from './src/components/Button/Button';

it('Exports all expected components', () => {
  expect(ButtonExp).toBe(Button);
});
