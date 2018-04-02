/**
 * @file CtaPrompt.test.js
 * Contains tests for CtaPrompt.component.js.
 */

import React from 'react';
import renderer from 'react-test-renderer';
import { mount } from 'enzyme';
import CtaPrompt from './CtaPrompt.component';
import CtaMessage from '../CtaMessage/CtaMessage.component';

describe('<CtaPrompt />', () => {
  it('Matches the CTA Prompt Default snapshot', () => {
    const component = renderer.create(<CtaPrompt />).toJSON();
    expect(component).toMatchSnapshot();
  });

  it('Sets cookie when closed', () => {
    const cookieValue = `${CtaPrompt.cookiePrefix}foo=1234abcd`;
    const wrapper = mount(
      <CtaPrompt>
        <CtaMessage
          data={{
            name: 'foo',
            hash: '1234abcd'
          }}
        />
      </CtaPrompt>
    );
    expect(document.cookie).not.toEqual(expect.stringContaining(cookieValue));
    wrapper.find('button.close').simulate('click');
    expect(document.cookie).toEqual(expect.stringContaining(cookieValue));
  });

  it('Show first message that has not been previously closed', () => {
    const wrapper = mount(
      <CtaPrompt>
        <CtaMessage
          data={{
            name: 'foo',
            hash: '1234abcd'
          }}
        />
        <CtaMessage
          data={{
            name: 'bar',
            hash: '1234abcd',
            showLogo: true
          }}
        />
      </CtaPrompt>
    );
    expect(wrapper.find('.logo').exists()).toEqual(true);
  });
});
