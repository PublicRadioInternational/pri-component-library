/**
 * @file LazyLoad.test.js
 * Contains tests for LazyLoad.component.js.
 */

import React from 'react';
import renderer from 'react-test-renderer';
// import { shallow } from 'enzyme';

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

  // it('Handles Interaction events', () => {
  //   const onChange = jest.fn();
  //   const itemWrapper = shallow(
  //     <LazyLoad onChange={onChange}>
  //       <img data-src="" alt="testing" />
  //     </LazyLoad>
  //   );
  //   itemWrapper.simulate('change');
  //   expect(onChange).toHaveBeenCalledTimes(1);
  //   expect(itemWrapper).toMatchSnapshot();
  // });
});
