/**
 * @file molecules.story.js
 * Story configuration for Molecules.
 */

import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import Dropdown from './Dropdown/Dropdown.component';
import DropdownItem from '../Atoms/DropdownItem/DropdownItem.component';

import Menu from './Menu/Menu.component';
import Search from './Search/Search.component';

/**
 * Add storybook definition for Molecules.
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
      small
      icon="heart"
    >
      <DropdownItem url="https://google.com">Google</DropdownItem>
      <DropdownItem onClick={action('dropdown-button-item-clicked')}>
        Custom Action
      </DropdownItem>
    </Dropdown>
  ));

/**
 * Add storybook definition for Menus.
 */
storiesOf('Molecules/Menu', module).add('Simple', () => (
  <Menu
    menuItems={[
      { name: 'Google', url: 'http://google.com' },
      { name: 'Yahoo', url: 'http://yahoo.com' }
    ]}
  />
));

/**
 * Add storybook definition for Search.
 */
storiesOf('Molecules/Search', module).add('Default', () => <Search />);
