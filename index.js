/**
 * @file index.js
 * Exports all components available in this project.
 */

import TextBlock from './src/components/Molecules/TextBlock/TextBlock.component';
import TeaserItem from './src/components/Molecules/Teaser/TeaserItem.component';
import TeaserList from './src/components/Organisms/Teaser/TeaserList.component';
import Button from './src/components/Atoms/Button/Button.component';
import ButtonLink from './src/components/Atoms/Button/ButtonLink.component';
import ButtonInput from './src/components/Atoms/Button/ButtonInput.component';
import Accordion from './src/components/Molecules/Accordion/Accordion.component';
import Dropdown from './src/components/Molecules/Dropdown/Dropdown.component';
import List from './src/components/Molecules/List/List.component';
import MenuList from './src/components/Molecules/MenuList/MenuList.component';
import Search from './src/components/Molecules/Search/Search.component';
import DropdownItem from './src/components/Atoms/DropdownItem/DropdownItem.component';
import Icons from './src/components/Atoms/Svg/Icons.component';
import PriLogo from './src/components/Atoms/Svg/PriLogo.component';
import CardItem from './src/components/Molecules/CardItem/CardItem.component';
import Hero from './src/components/Molecules/Hero/Hero.component';
import Aside from './src/components/Organisms/Content/Aside.component';
import CardList from './src/components/Organisms/CardList/CardList.component';
import Section from './src/components/Organisms/Content/Section.component';
import Footer from './src/components/Organisms/Footer/Footer.component';
import Header from './src/components/Organisms/Header/Header.component';
import MainMenu from './src/components/Organisms/Header/MainMenu.component';
import Layout from './src/components/Organisms/Main/Layout.component';
import LayoutAsideCallouts from './src/components/Organisms/Main/LayoutAsideCallouts.component';
import LayoutAsideLatest from './src/components/Organisms/Main/LayoutAsideLatest.component';
import LayoutMain from './src/components/Organisms/Main/LayoutMain.component';
import LayoutMainList from './src/components/Organisms/Main/LayoutMainList.component';
import LayoutMainList2 from './src/components/Organisms/Main/LayoutMainList2.component';
import Main from './src/components/Organisms/Main/Main.component';
import Home from './src/components/Pages/Home/Home.component';

import resetStyles from './src/components/00_global/reset.css';
import globalStyles from './src/components/00_global/global.css';

const Styles = {
  resetStyles,
  globalStyles
};

export {
  // Atoms.
  Button,
  ButtonInput,
  ButtonLink,
  DropdownItem,
  Icons,
  PriLogo,
  // Molecules.
  Accordion,
  CardItem,
  Dropdown,
  Hero,
  List,
  MenuList,
  Search,
  TeaserItem,
  TextBlock,
  // Organisms.
  CardList,
  Aside,
  Section,
  Footer,
  Header,
  MainMenu,
  Layout,
  LayoutAsideCallouts,
  LayoutAsideLatest,
  LayoutMain,
  LayoutMainList,
  LayoutMainList2,
  Main,
  TeaserList,
  // Pages.
  Home,
  // Global.
  Styles
}; // eslint-disable-line
