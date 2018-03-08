/**
 * @file atoms.story.js
 * Story configuration for Atoms.
 */

import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import Button from './Button/Button.component';
import { Dropdown, DropdownItem } from './Dropdown/Dropdown.component';

/**
 * Add storybook definition for buttons.
 */
storiesOf('Atoms/Buttons', module)
  .add('Default', () => (
    <Button title="Listen" onClick={action('button-clicked')} />
  ))
  .add('Orange', () => (
    <Button
      title="Donate"
      onClick={action('button-clicked')}
      className="btnOrange"
    />
  ));

/**
 * Add storybook definition for Dropdowns.
 */
storiesOf('Atoms/Dropdown', module).add('Default', () => (
  <Dropdown title="Listen" onClick={action('drowndown-button-clicked')}>
    <DropdownItem title="Google" url="https://google.com" />
    <DropdownItem
      title="Custom Action"
      onClick={action('dropdown-button-item-clicked')}
    />
  </Dropdown>
));
