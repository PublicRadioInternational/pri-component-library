/**
 * @file atoms.story.js
 * Story configuration for Atoms.
 */

import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import Dropdown from './Dropdown/Dropdown.component';
import DropdownItem from '../Atoms/DropdownItem/DropdownItem.component';

/**
 * Add storybook definition for Dropdowns.
 */
storiesOf('Molecules/Dropdown', module)
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
      url="https://google.com"
      title="Donate"
      color="Orange"
      onClick={action('drowndown-button-clicked')}
      icon="heart"
      small
    >
      <DropdownItem url="https://google.com">Google</DropdownItem>
      <DropdownItem onClick={action('dropdown-button-item-clicked')}>
        Custom Action
      </DropdownItem>
    </Dropdown>
  ));
