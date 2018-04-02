/**
 * @file CtaMessage.test.js
 * Contains tests for CtaMessage.component.js.
 */

import React from 'react';
import renderer from 'react-test-renderer';
import { mount } from 'enzyme';
import CtaMessage from './CtaMessage.component';

describe('<CtaMessage />', () => {
  it('Matches the CTA Message Default snapshot', () => {
    const component = renderer
      .create(
        <CtaMessage
          data={{
            name: 'test_1',
            hash: '1234abcd'
          }}
        />
      )
      .toJSON();
    expect(component).toMatchSnapshot();
  });

  it('Matches the CTA Message Logo snapshot', () => {
    const component = renderer
      .create(
        <CtaMessage
          data={{
            name: 'test_1',
            hash: '1234abcd',
            showLogo: true
          }}
        />
      )
      .toJSON();
    expect(component).toMatchSnapshot();
  });

  it('Logo is small for loadUnder', () => {
    const wrapper = mount(
      <CtaMessage
        type="loadUnder"
        data={{
          name: 'test_1',
          hash: '1234abcd',
          showLogo: true
        }}
      />
    );
    expect(wrapper.find('.logo svg').prop('width')).toEqual(90);
  });

  it('Matches the CTA Message Title snapshot', () => {
    const component = renderer
      .create(
        <CtaMessage
          data={{
            name: 'test_1',
            hash: '1234abcd',
            title: 'Test #1'
          }}
        />
      )
      .toJSON();
    expect(component).toMatchSnapshot();
  });

  it('Matches the CTA Message Title snapshot', () => {
    const component = renderer
      .create(
        <CtaMessage
          data={{
            name: 'test_1',
            hash: '1234abcd',
            title: 'Test title'
          }}
        />
      )
      .toJSON();
    expect(component).toMatchSnapshot();
  });

  it('Matches the CTA Message Decription snapshot', () => {
    const component = renderer
      .create(
        <CtaMessage
          data={{
            name: 'test_1',
            hash: '1234abcd',
            description: 'Test description...'
          }}
        />
      )
      .toJSON();
    expect(component).toMatchSnapshot();
  });

  it('Matches the CTA Message Action button snapshot', () => {
    const component = renderer
      .create(
        <CtaMessage
          data={{
            name: 'test_1',
            hash: '1234abcd',
            action: {
              label: 'Do it',
              url: 'https://www.google.com/'
            }
          }}
        />
      )
      .toJSON();
    expect(component).toMatchSnapshot();
  });

  it('Matches the CTA Message Blue Action button snapshot', () => {
    const component = renderer
      .create(
        <CtaMessage
          data={{
            name: 'test_1',
            hash: '1234abcd',
            action: {
              label: 'Do it',
              url: 'https://www.google.com/',
              btnColor: 'Blue'
            }
          }}
        />
      )
      .toJSON();
    expect(component).toMatchSnapshot();
  });

  it('Matches the CTA Message Dismiss button snapshot', () => {
    const component = renderer
      .create(
        <CtaMessage
          data={{
            name: 'test_1',
            hash: '1234abcd',
            action: {
              label: 'Do it',
              url: 'https://www.google.com/'
            },
            dismiss: {
              label: "Don't do it"
            }
          }}
        />
      )
      .toJSON();
    expect(component).toMatchSnapshot();
  });

  it('onPromptClose handler is called when close is click', () => {
    const actionFn = jest.fn();
    const wrapper = mount(
      <CtaMessage
        onClose={actionFn}
        data={{
          name: 'test_1',
          hash: '1234abcd',
          action: {
            label: 'Do it',
            url: 'https://www.google.com/'
          }
        }}
      />
    );
    wrapper.find('button.close').simulate('click');
    expect(actionFn).toHaveBeenCalled();
  });

  it('onPromptClose handler is called when action button is click', () => {
    const actionFn = jest.fn();
    const wrapper = mount(
      <CtaMessage
        onClose={actionFn}
        data={{
          name: 'test_1',
          hash: '1234abcd',
          action: {
            label: 'Do it',
            url: 'https://www.google.com/'
          }
        }}
      />
    );
    wrapper.find('a.actionBtn').simulate('click');
    expect(actionFn).toHaveBeenCalled();
  });

  it('onPromptClose handler is called when dismiss button is click', () => {
    const actionFn = jest.fn();
    const wrapper = mount(
      <CtaMessage
        onClose={actionFn}
        data={{
          name: 'test_1',
          hash: '1234abcd',
          action: {
            label: 'Do it',
            url: 'https://www.google.com/'
          },
          dismiss: {
            label: "Don't do it"
          }
        }}
      />
    );
    wrapper.find('button.dismissBtn').simulate('click');
    expect(actionFn).toHaveBeenCalled();
  });
});
