/**
 * @file Button.test.js
 * Contains tests for Button.component.js.
 */

import React from 'react';
import renderer from 'react-test-renderer';

import Icon from './Icons.component';

describe('<Icon />', () => {
  it('Matches the Icon snapshot', () => {
    const component = renderer.create(<Icon name="heart" />).toJSON();
    expect(component).toMatchSnapshot();
  });

  it('Does not render an icon if an invalid name is provided', () => {
    const IconStub = Icon;
    delete IconStub.propTypes.name;
    const component = renderer
      .create(<IconStub name="non-existent" />)
      .toJSON();
    expect(component).toMatchSnapshot();
  });
});
