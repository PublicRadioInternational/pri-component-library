/**
 * @file BlockList.test.js
 * Contains tests for BlockList.component.js.
 */

import React from 'react';
import renderer from 'react-test-renderer';

import BlockList from './BlockList.component';

describe('<BlockList />', () => {
  it('Matches the Block List snapshot', () => {
    const component = renderer
      .create(<BlockList title="Three Ways to Support PRI" />)
      .toJSON();
    expect(component).toMatchSnapshot();
  });
});
