/**
 * @file Accordion.test.js
 * Contains tests for Accordion.component.js.
 */

import React from 'react';
import renderer from 'react-test-renderer';
import { mount } from 'enzyme';

import Accordion from './Accordion.component';

describe('<Accordion />', () => {
  it('Handles accordion open events', () => {
    const wrapper = mount(
      <Accordion
        accordionTitle="Test"
        accordionList={[{ name: 'Google', url: 'http://google.com' }]}
      />
    );
    wrapper.find('a.accordionTopLink').simulate('click');
    expect(wrapper.state().revealed).toEqual(true);
  });

  it('Matches the List snapshot', () => {
    const component = renderer
      .create(
        <Accordion
          accordionTitle="Test"
          accordionList={[
            { name: 'Google', url: 'http://google.com' },
            { name: 'Yahoo', url: 'http://yahoo.com' }
          ]}
        />
      )
      .toJSON();
    expect(component).toMatchSnapshot();
  });
});
