/**
 * @file LazyLoad.test.js
 * Contains tests for LazyLoad.component.js.
 */

import React from 'react';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';

import LazyLoad from './LazyLoad.component';

describe('<LazyLoad />', () => {
  it('Matches the LazyLoad snapshot', () => {
    const component = renderer
      .create(
        <LazyLoad>
          <img data-src="" alt="testing" />
        </LazyLoad>
      )
      .toJSON();
    expect(component).toMatchSnapshot();
  });

  it('Handles Interaction events', () => {
    const itemWrapper = shallow(
      <LazyLoad>
        <img data-src="" alt="testing" />
      </LazyLoad>
    );

    const rmAttr = jest.fn();

    itemWrapper.simulate('change', {
      isIntersecting: true,
      target: {
        dataset: {
          src: 'https://placeimg.com/640/480/any'
        },
        addEventListener: jest.fn((_, cb) => cb()),
        removeAttribute: rmAttr
      }
    });

    expect(rmAttr).toHaveBeenCalledTimes(1);
    expect(itemWrapper).toMatchSnapshot();
  });

  it('Does not load images unexpectedly', () => {
    const itemWrapper = shallow(
      <LazyLoad>
        <img data-src="" alt="testing" />
      </LazyLoad>
    );

    const rmAttr = jest.fn();

    itemWrapper.simulate('change', {
      isIntersecting: false,
      target: {
        dataset: {
          src: 'https://placeimg.com/640/480/any'
        },
        addEventListener: jest.fn((_, cb) => cb()),
        removeAttribute: rmAttr
      }
    });

    expect(rmAttr).not.toHaveBeenCalled();
    expect(itemWrapper).toMatchSnapshot();
  });
});
