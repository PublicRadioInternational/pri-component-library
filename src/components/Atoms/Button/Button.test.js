/**
 * @file Button.test.js
 * Contains tests for Button.component.js.
 */

import React from 'react';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import ButtonLink from './ButtonLink.component';
import ButtonInput from './ButtonInput.component';
import Button from './Button.component';

describe('<Button />', () => {
  const title = 'test';
  const url = 'https://google.com';
  const className = 'White';

  it('Handles Link click events', () => {
    const onClick = jest.fn();
    const linkWrapper = shallow(
      <ButtonLink
        title={title}
        url={url}
        onClick={onClick}
        className={className}
      >
        test
      </ButtonLink>
    );
    linkWrapper.find('a').simulate('click');
    expect(onClick).toHaveBeenCalledTimes(1);
  });

  it('Handles Button click events', () => {
    const onClick = jest.fn();
    const buttonWrapper = shallow(
      <Button onClick={onClick} className={className}>
        test
      </Button>
    );
    buttonWrapper.find('button').simulate('click');
    expect(onClick).toHaveBeenCalledTimes(1);
  });

  it('Handles Input click events', () => {
    const onClick = jest.fn();
    const linkWrapper = shallow(
      <ButtonInput value={title} onClick={onClick} className={className}>
        test
      </ButtonInput>
    );
    linkWrapper.find('input').simulate('click');
    expect(onClick).toHaveBeenCalledTimes(1);
  });

  it('Matches the Link snapshot', () => {
    const onClick = jest.fn();
    const component = renderer
      .create(
        <Button title={title} url={url} onClick={onClick} className={className}>
          test
        </Button>
      )
      .toJSON();
    expect(component).toMatchSnapshot();
  });

  it('Matches the Button snapshot', () => {
    const onClick = jest.fn();
    const component = renderer
      .create(
        <Button onClick={onClick} className={className}>
          test
        </Button>
      )
      .toJSON();
    expect(component).toMatchSnapshot();
  });
});
