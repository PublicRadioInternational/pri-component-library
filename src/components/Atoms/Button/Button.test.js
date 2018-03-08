/**
 * @file Button.test.js
 * Contains tests for Button.component.js.
 */

import React from 'react';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import Button from './Button.component';

describe('<Button />', () => {
  const title = 'test';
  const url = 'https://google.com';
  const onClick = jest.fn();

  const link = () => (
    <Button
      title={title}
      url={url}
      isHidden={false}
      onClick={onClick}
      className="btnOrange"
    />
  );

  const button = () => (
    <Button title={title} isHidden={false} onClick={onClick} />
  );

  const linkWrapper = shallow(link());
  const buttonWrapper = shallow(button());

  it('Handles Link click events', () => {
    linkWrapper.find('a').simulate('click');
    expect(onClick).toHaveBeenCalledTimes(1);
  });

  it('Handles Button click events', () => {
    buttonWrapper.find('button').simulate('click');
    expect(onClick).toHaveBeenCalledTimes(2);
  });

  it('Matches the Link snapshot', () => {
    const component = renderer.create(link()).toJSON();
    expect(component).toMatchSnapshot();
  });

  it('Matches the Button snapshot', () => {
    const component = renderer.create(button()).toJSON();
    expect(component).toMatchSnapshot();
  });
});
