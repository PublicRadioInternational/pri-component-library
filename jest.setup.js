/**
 * @file jest.setup.js
 * Sets up and configures Enzyme for Jest.
 */

import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

jest.mock('./.storybook/facade');

configure({ adapter: new Adapter() });
