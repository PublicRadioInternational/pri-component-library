import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions'; // eslint-disable-line
import Button from '../src/components/Button/Button';

storiesOf('Button', module).add('Toggle Button', () => (
  <Button onClick={action('clicked')}>Hello Button</Button>
));
