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

  it('Handles Link click events', () => {
    const onClick = jest.fn();
    const linkWrapper = shallow(
      <Button title={title} url={url} onClick={onClick}>
        test
      </Button>
    );
    linkWrapper.find('a').simulate('click');
    expect(onClick).toHaveBeenCalledTimes(1);
  });

  it('Handles Button click events', () => {
    const onClick = jest.fn();
    const buttonWrapper = shallow(<Button onClick={onClick}>test</Button>);
    buttonWrapper.find('button').simulate('click');
    expect(onClick).toHaveBeenCalledTimes(1);
  });

  it('Matches the Link snapshot', () => {
    const onClick = jest.fn();
    const component = renderer
      .create(
        <Button title={title} url={url} onClick={onClick}>
          test
        </Button>
      )
      .toJSON();
    expect(component).toMatchSnapshot();
  });

  it('Matches the Button snapshot', () => {
    const onClick = jest.fn();
    const component = renderer
      .create(<Button onClick={onClick}>test</Button>)
      .toJSON();
    expect(component).toMatchSnapshot();
  });
});
