/**
 * @file Button.test.js
 * Contains tests for Button.js.
 */

import React from 'react';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import Button from './Button.component';

describe('<Button />', () => {
  const title = 'test';
  const url = 'https://google.com';

  const wrapper = shallow(
    <Button title={title} url={url} className="btnOrange" />
  );

  const anchor = wrapper.find('a');
  it('Creates a valid anchor tag', () => {
    expect(anchor).not.toBeNull();
  });

  it('Applies classes correctly', () => {
    expect(anchor.hasClass('btnOrange')).toBe(true);
  });

  it('Sets the correct button URL', () => {
    expect(anchor.prop('href')).toBe(url);
  });

  const span = wrapper.find('span');
  it('Renders the correct title', () => {
    expect(span.text()).toBe(title);
  });

  it('Renders correctly', () => {
    const component = renderer.create(<Button title={title} url={url} className="btnOrange" />);
    expect(component.toJSON()).toMatchSnapshot();
  });
});
