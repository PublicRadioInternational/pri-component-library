/**
 * @file List.test.js
 * Contains tests for List.component.js.
 */

import React from 'react';
import renderer from 'react-test-renderer';

import List from './List.component';

describe('<List />', () => {
  it('Matches the List snapshot', () => {
    const component = renderer
      .create(
        <List
          listItems={[
            { name: 'Google', url: 'http://google.com' },
            { name: 'Yahoo', url: 'http://yahoo.com' }
          ]}
        />
      )
      .toJSON();
    expect(component).toMatchSnapshot();
  });
});
