/**
 * @file atoms.story.js
 * Story configuration for Atoms.
 */

import React from 'react';
import classNames from 'classnames/bind';
import { withInfo } from '@storybook/addon-info';
import { checkA11y } from '@storybook/addon-a11y';
import {
  withKnobs,
  text,
  select,
  boolean,
  object
} from '@storybook/addon-knobs/react';
import styles from '@sambego/storybook-styles';
import startCase from 'lodash/startCase';
import { shallow } from 'enzyme';
import expect from 'expect';
import {
  storiesOf,
  action,
  specs,
  describe,
  it,
  beforeEach,
  snapshot
} from '../../../../.storybook/facade';
import Button from './Button.component';
import btnStyles from './Button.css';

const cx = classNames.bind(btnStyles);

const stories = storiesOf('Atoms/Buttons', module);

// Convert flat colors array to object keyed by color for title cased label.
// Example: ['color'] to { color: 'Color' }.
const buttonColors = Button.colors.reduce(
  (obj, color) => ({ ...obj, [color.toLowerCase()]: startCase(color) }),
  {}
);

/**
 * Add storybook definition for buttons.
 */
stories.addDecorator(checkA11y);
stories.addDecorator(withKnobs);
stories.addDecorator(
  styles({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '100vh',
    backgroundColor: '#fff',
    padding: '0 1rem'
  })
);

stories.add(
  'Info & Knobs',
  withInfo({
    inline: true,
    text: `
    Basic button UI element.
  `
  })(() => (
    <Button
      onClick={action('onClickHandler')}
      color={select('Color', buttonColors, Button.colors[0].toLowerCase())}
      disabled={boolean('Disabled')}
      small={boolean('Small')}
      href={text('URL')}
      type={select('Input Type', ['button', 'submit', 'reset'])}
      {...object('Other Attributes', {}, 'BTNOPT-1')}
    >
      {text('Label', 'Listen')}
    </Button>
  ))
);

const exampleSpecs = storiesOf('Atoms/Buttons/Examples');

exampleSpecs.addDecorator(checkA11y);
exampleSpecs.addDecorator(
  styles({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '100vh',
    backgroundColor: '#fff',
    padding: '0 1rem'
  })
);

exampleSpecs.add('Default Listen Button', () => {
  const story = <Button onClick={action('button-clicked')}>Listen</Button>;

  specs(() =>
    describe('Default Listen Button', () => {
      let output; // eslint-disable-line

      beforeEach(() => {
        output = shallow(story);
      });

      it('Should default to <button> element.', () => {
        expect(output.type()).toEqual('button');
      });

      it('Should have "Listen" label.', () => {
        expect(output.text()).toEqual('Listen');
      });

      it('Should have class "btnWhite".', () => {
        expect(output.hasClass(cx('btnWhite'))).toEqual(true);
      });

      it('Should have type "button".', () => {
        expect(output.prop('type')).toEqual('button');
      });
    })
  );

  snapshot('Default Listen Button', story);

  return story;
});

exampleSpecs.add('Orange Donate Link', () => {
  const story = (
    <Button onClick={action('button-clicked')} href="/donate" color="orange">
      Donate
    </Button>
  );

  specs(() =>
    describe('Orange Donate Button', () => {
      let output; // eslint-disable-line

      beforeEach(() => {
        output = shallow(story);
      });

      it('Should convert to <a> element.', () => {
        expect(output.type()).toEqual('a');
      });

      it('Should have "Donate" label.', () => {
        expect(output.text()).toEqual('Donate');
      });

      it('Should have class "btnOrange".', () => {
        expect(output.hasClass(cx('btnOrange'))).toEqual(true);
      });

      it('Should have href "/donate".', () => {
        expect(output.prop('href')).toEqual('/donate');
      });
    })
  );

  snapshot('Orange Donate Button', story);

  return story;
});

exampleSpecs.add('Blue Submit Button', () => {
  const story = (
    <Button onClick={action('button-clicked')} type="submit" color="blue">
      Submit
    </Button>
  );

  specs(() =>
    describe('Blue Submit Button', () => {
      let output; // eslint-disable-line

      beforeEach(() => {
        output = shallow(story);
      });

      it('Should default to <button> element.', () => {
        expect(output.type()).toEqual('button');
      });

      it('Should have "Submit" label.', () => {
        expect(output.text()).toEqual('Submit');
      });

      it('Should have class "btnBlue".', () => {
        expect(output.hasClass(cx('btnBlue'))).toEqual(true);
      });

      it('Should have type "submit".', () => {
        expect(output.prop('type')).toEqual('submit');
      });
    })
  );

  snapshot('Blue Submit Button', story);

  return story;
});

exampleSpecs.add('Dark Reset Input', () => {
  const story = (
    <Button
      onClick={action('button-clicked')}
      component="input"
      type="reset"
      color="dark"
      value="Reset"
    />
  );

  specs(() =>
    describe('Blue Submit Button', () => {
      let output; // eslint-disable-line

      beforeEach(() => {
        output = shallow(story);
      });

      it('Should convert to <input> element.', () => {
        expect(output.type()).toEqual('input');
      });

      it('Should have "Reset" label (as value.)', () => {
        expect(output.prop('value')).toEqual('Reset');
      });

      it('Should have class "btnDark".', () => {
        expect(output.hasClass(cx('btnDark'))).toEqual(true);
      });

      it('Should have type "reset".', () => {
        expect(output.prop('type')).toEqual('reset');
      });
    })
  );

  snapshot('Blue Submit Button', story);

  return story;
});
