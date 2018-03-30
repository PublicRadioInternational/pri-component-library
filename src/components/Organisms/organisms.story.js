/**
 * @file organisms.story.js
 * Story configuration for Organisms.
 */

import React from 'react';
import { storiesOf } from '@storybook/react';
import { checkA11y } from '@storybook/addon-a11y';

import CardList from './CardList/CardList.component';
import CardItem from '../Molecules/CardItem/CardItem.component';
import Header from './Header/Header.component';
import Footer from './Footer/Footer.component';
import Main from './Main/Main.component';

/**
 * Add storybook definition for Organisms.
 */
storiesOf('Organisms/CardList', module)
  .addDecorator(checkA11y)
  .add('Card List', () => (
    <CardList
      src="https://interactive-dev.pri.org/staging/prototypes/homepage/themes/pri/images/logo_tw.png"
      category="world"
      url="#"
      categoryDescription="PRIs The World"
    >
      <CardItem
        title="There is one place where Serbs and Albanians coexist in Kosovo — in the country's version of Costco"
        url="stories/2017-07-24/clearing-mines-and-explosives-mosul"
        imgSrc="https://media.pri.org/s3fs-public/styles/feature_medium/public/story/images/180302copbridge.jpg?itok=52GppaOv"
        imgAlt="Alt Text"
        blurb="Ten years after Kosovo declared its independence from Serbia, Serbs and Albanians in Kosovo remain deeply divided — even over food."
        large
        hasAudio
      />
      <CardItem
        title="50 years on, India is celebrating the Beatles' infamous trip to the country"
        url="stories/2017-07-24/clearing-mines-and-explosives-mosul"
        imgSrc="https://media.pri.org/s3fs-public/styles/feature_small/public/story/images/Beatles_India_02.jpg?itok=iG8TKNDu"
        imgAlt="Alt Text"
        blurb="When the Beatles embarked on their famous discovery of India to study transcendental meditation, the Indian government was far more wary. "
      />
      <CardItem
        title="Progressives in Congress side with Trump on trade"
        url="stories/2017-07-24/clearing-mines-and-explosives-mosul"
        imgSrc="https://media.pri.org/s3fs-public/styles/feature_small/public/story/images/DeLauro.jpg?itok=gprExR5S"
        imgAlt="Alt Text"
        blurb="NAFTA has governed the rules of trade between the US, Mexico and Canada since 1994. Today, many progressives who dislike NAFTA say President Trump is giving them the best chance in a generation to rewrite the rules of trade. "
        hasAudio
      />
      <CardItem
        title="A cartoonist in Equatorial Guinea has been cleared of charges, but he's still in jail"
        url="https://interactive-dev.pri.org/stories/2017-07-24/clearing-mines-and-explosives-mosul"
        imgSrc="https://media.pri.org/s3fs-public/styles/feature_small/public/story/images/GettyImages-925030722_master.jpg?itok=LSMUCQbS"
        imgAlt="Alt Text"
        blurb="Charges against a jailed cartoonist from Equatorial Guinea have been dropped, so why is he still in jail?"
      />
      <CardItem
        title="Egyptian singer faces the prospect of prison over a joke about the Nile"
        imgSrc="https://media.pri.org/s3fs-public/styles/feature_small/public/story/images/GettyImages-925030722_master.jpg?itok=LSMUCQbS"
        imgAlt="Alt Text"
        blurb="An Egyptian court has sentenced one of its country's top singers to six months in prison for a comment she made about the Nile River. Pop singer Sherine made a crack about getting ill from drinking from the river when she was asked by a fan to sing, 'Have You Ever Drunk From the Nile.'"
        hasAudio
      />
    </CardList>
  ));

storiesOf('Organisms/Header', module)
  .addDecorator(checkA11y)
  .add('Default', () => <Header baseUrl="https://www.pri.org" />);

storiesOf('Organisms/Footer', module)
  .addDecorator(checkA11y)
  .add('Site Footer', () => <Footer />);

storiesOf('Organisms/Main', module)
  .addDecorator(checkA11y)
  .add('Main Content Area', () => <Main />);
