/**
 * @file index.js
 * Exports all components available in this project.
 */

import Button from './src/components/Atoms/Button/Button.component';
import ButtonLink from './src/components/Atoms/Button/ButtonLink.component';
import ButtonInput from './src/components/Atoms/Button/ButtonInput.component';
import Accordion from './src/components/Molecules/Accordion/Accordion.component';
import Dropdown from './src/components/Molecules/Dropdown/Dropdown.component';
import List from './src/components/Molecules/List/List.component';
import Search from './src/components/Molecules/Search/Search.component';
import DropdownItem from './src/components/Atoms/DropdownItem/DropdownItem.component';
import Icons from './src/components/Atoms/Svg/Icons.component';
import PriLogo from './src/components/Atoms/Svg/PriLogo.component';
import Aside from './src/components/Organisms/Content/Aside.component';
import Section from './src/components/Organisms/Content/Section.component';
import Footer from './src/components/Organisms/Footer/Footer.component';
import Header from './src/components/Organisms/Header/Header.component';
import MainMenu from './src/components/Organisms/Header/MainMenu.component';
import Main from './src/components/Organisms/Main/Main.component';
import Home from './src/components/Pages/Home/Home.component';

import resetStyles from './src/components/00_global/reset.css';
import globalStyles from './src/components/00_global/global.css';

const Styles = {
  resetStyles,
  globalStyles
};

export {
  Button,
  ButtonInput,
  ButtonLink,
  DropdownItem,
  Icons,
  PriLogo,
  Accordion,
  Dropdown,
  List,
  Search,
  Aside,
  Section,
  Footer,
  Header,
  MainMenu,
  Main,
  Home,
  Styles
}; // eslint-disable-line
