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
    const component = renderer.create(<CtaMessage />).toJSON();
    expect(component).toMatchSnapshot();
  });

  it('Matches the CTA Message Logo snapshot', () => {
    const component = renderer.create(<CtaMessage showLogo />).toJSON();
    expect(component).toMatchSnapshot();
  });

  it('Logo is small for loadUnder', () => {
    const wrapper = mount(<CtaMessage type="loadUnder" showLogo />);
    expect(wrapper.find('.logo svg').prop('width')).toEqual(90);
  });

  it('Matches the CTA Message Title snapshot', () => {
    const component = renderer
      .create(<CtaMessage title="Test Title" />)
      .toJSON();
    expect(component).toMatchSnapshot();
  });

  it('Matches the CTA Message Decription snapshot', () => {
    const component = renderer
      .create(<CtaMessage description="Test description" />)
      .toJSON();
    expect(component).toMatchSnapshot();
  });

  it('Matches the CTA Message Action button snapshot', () => {
    const component = renderer
      .create(
        <CtaMessage
          action={{
            label: 'Yes',
            url: 'https://www.google.com/'
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
          action={{
            label: 'Yes',
            url: 'https://www.google.com/',
            btnColor: 'Blue'
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
          action={{
            label: 'Yes',
            url: 'https://www.google.com/',
            btnColor: 'Blue'
          }}
          dismiss={{
            label: 'No'
          }}
        />
      )
      .toJSON();
    expect(component).toMatchSnapshot();
  });

  it('onPromptClose handler is called when close is click', () => {
    const actionFn = jest.fn();
    const wrapper = mount(<CtaMessage onClose={actionFn} />);
    wrapper.find('button.close').simulate('click');
    expect(actionFn).toHaveBeenCalled();
  });

  it('onPromptClose handler is called when action button is click', () => {
    const actionFn = jest.fn();
    const wrapper = mount(
      <CtaMessage
        onClose={actionFn}
        action={{
          label: 'Yes',
          url: 'https://www.google.com/'
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
        action={{
          label: 'Yes',
          url: 'https://www.google.com/',
          btnColor: 'Blue'
        }}
        dismiss={{
          label: 'No'
        }}
      />
    );
    wrapper.find('button.dismissBtn').simulate('click');
    expect(actionFn).toHaveBeenCalled();
  });
});
