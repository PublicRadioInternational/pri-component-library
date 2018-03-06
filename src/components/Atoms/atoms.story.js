/**
 * @file atoms.story.js
 * Story configuration for Atoms.
 */

import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Button from './Button/Button.component';

storiesOf('Atoms/Buttons', module).add('Default', () => (
  <Button
    onClick={action('button-clicked')}
    title="Listen"
    url="#"
    dropdown={false}
    className="btn"
  />
));

storiesOf('Atoms/Buttons', module).add('Orange', () => (
  <Button
    onClick={action('button-clicked')}
    title="Donate"
    url="#"
    dropdown={false}
    className="btnOrange"
  />
));
