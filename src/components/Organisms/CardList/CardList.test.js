/**
 * @file CardList.test.js
 * Contains tests for CardList.component.js.
 */

import React from 'react';
import renderer from 'react-test-renderer';

import CardList from './CardList.component';

describe('<CardList />', () => {
  it('Matches the Card List snapshot', () => {
    const component = renderer
      .create(
        <CardList
          src="https://interactive-dev.pri.org/staging/prototypes/homepage/themes/pri/images/logo_tw.png"
          category="world"
          url="#"
          categoryDescription="PRIs The World"
        >
          <span>One</span>
          <span>Two</span>
        </CardList>
      )
      .toJSON();
    expect(component).toMatchSnapshot();
  });
});
