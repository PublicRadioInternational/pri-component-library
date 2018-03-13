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
    <Button onClick={action('button-clicked')}>Listen</Button>
  ))
  .add('Orange', () => (
    <Button onClick={action('button-clicked')} color="Orange">
      Donate
    </Button>
  ))
  .add('Icon', () => (
    <Button onClick={action('button-clicked')} icon="envelope">
      Newsletters
    </Button>
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
      <DropdownItem url="https://google.com">Google</DropdownItem>
      <DropdownItem onClick={action('dropdown-button-item-clicked')}>
        Custom Action
      </DropdownItem>
    </Dropdown>
  ))
  .add('Orange', () => (
    <Dropdown
      title="Donate"
      color="Orange"
      onClick={action('drowndown-button-clicked')}
      icon="heart"
    >
      <DropdownItem url="https://google.com">Google</DropdownItem>
      <DropdownItem onClick={action('dropdown-button-item-clicked')}>
        Custom Action
      </DropdownItem>
    </Dropdown>
  ));
