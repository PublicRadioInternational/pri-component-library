/**
 * @file atoms.story.js
 * Story configuration for Atoms.
 */

import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import Button from './Button/Button.component';
import Dropdown from './Dropdown/Dropdown.component';
import DropdownItem from './DropdownItem/DropdownItem.component';

/**
 * Add storybook definition for buttons.
 */
storiesOf('Atoms/Buttons', module)
  .add('Default', () => (
    <Button title="Listen" onClick={action('button-clicked')} />
  ))
  .add('Orange', () => (
    <Button title="Donate" onClick={action('button-clicked')} color="Orange" />
  ));

/**
 * Add storybook definition for Dropdowns.
 */
storiesOf('Atoms/Dropdown', module)
  .add('Default', () => (
    <Dropdown
      url="https://google.com"
      title="Listen"
      onClick={action('drowndown-button-clicked')}
    >
      <DropdownItem title="Google" url="https://google.com" />
      <DropdownItem
        title="Custom Action"
        onClick={action('dropdown-button-item-clicked')}
      />
    </Dropdown>
  ))
  .add('Orange', () => (
    <Dropdown
      title="Listen"
      color="Orange"
      onClick={action('drowndown-button-clicked')}
    >
      <DropdownItem title="Google" url="https://google.com" />
      <DropdownItem
        title="Custom Action"
        onClick={action('dropdown-button-item-clicked')}
      />
    </Dropdown>
  ));
