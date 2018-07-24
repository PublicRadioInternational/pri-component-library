/**
 * @file Button.test.js
 * Contains tests for Button.component.js.
 */

import React from 'react';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import Button from './Button.component';
import ButtonLink from './ButtonLink.component';
import ButtonInput from './ButtonInput.component';

describe('<Button />', () => {
  const title = 'test';
  const className = 'white';

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

  it('Matches the Button snapshot', () => {
    const onClick = jest.fn();
    const component = renderer
      .create(
        <Button title={title} onClick={onClick} className={className}>
          test
        </Button>
      )
      .toJSON();
    expect(component).toMatchSnapshot();
  });
});

describe('<ButtonLink />', () => {
  const title = 'test';
  const url = 'https://google.com';
  const className = 'white';

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

  it('Matches the Button Link snapshot', () => {
    const onClick = jest.fn();
    const component = renderer
      .create(
        <ButtonLink
          title={title}
          url={url}
          onClick={onClick}
          className={className}
        >
          test
        </ButtonLink>
      )
      .toJSON();
    expect(component).toMatchSnapshot();
  });
});

describe('<ButtonInput />', () => {
  const title = 'test';
  const className = 'white';

  it('Handles Input click events', () => {
    const onClick = jest.fn();
    const linkWrapper = shallow(
      <ButtonInput value={title} onClick={onClick} className={className} />
    );
    linkWrapper.find('input').simulate('click');
    expect(onClick).toHaveBeenCalledTimes(1);
  });

  it('Matches the Button Input snapshot', () => {
    const onClick = jest.fn();
    const component = renderer
      .create(
        <ButtonInput
          value={title}
          onClick={onClick}
          className={className}
          icon="heart"
        />
      )
      .toJSON();
    expect(component).toMatchSnapshot();
  });
});
