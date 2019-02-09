/**
 * @file organisms.story.js
 * Story configuration for Organisms.
 */

import React from 'react';
import { storiesOf } from '@storybook/react';
import { checkA11y } from '@storybook/addon-a11y';
import sharedStyles from '../00_global/shared.css';

import TeaserList from './Teaser/TeaserList.component';
import TeaserItem from '../Molecules/Teaser/TeaserItem.component';
import CardList from './CardList/CardList.component';
import CardItem from '../Molecules/CardItem/CardItem.component';
import Header from './Header/Header.component';
import Footer from './Footer/Footer.component';
import Main from './Main/Main.component';

import TextBlock from '../Molecules/TextBlock/TextBlock.component';
import BlockList from './BlockList/BlockList.component';

/**
 * Add storybook definition for Organisms.
 */
storiesOf('Organisms/CardList', module)
  .addDecorator(checkA11y)
  .add('Card List with Image', () => (
    <CardList
      logo="https://interactive-dev.pri.org/staging/prototypes/homepage/themes/pri/images/logo_tw.png"
      name="pris-the-world"
      id="program-with-logo"
      url="#"
      title="PRI's The World"
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

storiesOf('Organisms/CardList', module)
  .addDecorator(checkA11y)
  .add('Without Image', () => (
    <CardList name="pris-the-world" url="#" title="PRI's The World">
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
    </CardList>
  ));

storiesOf('Organisms/CardList', module)
  .addDecorator(checkA11y)
  .add('Without URL', () => (
    <CardList name="custom-header" title="Custom Header">
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
    </CardList>
  ));

storiesOf('Organisms/CardList', module)
  .addDecorator(checkA11y)
  .add('Without Header', () => (
    <CardList name="no-header">
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
    </CardList>
  ));

storiesOf('Organisms/TeaserList', module)
  .addDecorator(checkA11y)
  .add('Article List', () => (
    <TeaserList
      title="Latest Content"
      moreTitle="More Stories"
      moreUrl="stories/more"
    >
      <TeaserItem
        title="For poor and minority children, excessive air pollution creates a toxic learning environment"
        url="stories/2018-03-03/poor-and-minority-children-excessive-air-pollution-creates-toxic-learning"
        programTitle="Living on Earth"
        programUrl="programs/living-earth"
        hasAudio
      />
      <TeaserItem
        title="Progressives in Congress side with Trump on trade"
        url="stories/2018-03-06/progressives-side-trump-trade"
        programTitle="PRI's The World"
        programUrl="programs/the-world"
        hasAudio
      />
      <TeaserItem
        title="North Korea says it's willing to hold talks with the US and halt nuclear pursuit while negotiations last"
        url="stories/2018-03-06/north-korea-says-its-willing-hold-talks-us-and-halt-nuclear-pursuit-while"
      />
      <TeaserItem
        title="Yet anther article with an incredible title from the world"
        url="stories/2018-03-06/yet-another-incredible-taco"
        programTitle="PRI's The World"
        programUrl="programs/the-world"
        hasAudio
      />
    </TeaserList>
  ));

storiesOf('Organisms/Header', module)
  .addDecorator(checkA11y)
  .add('Default', () => (
    <Header
      baseUrl="https://www.pri.org"
      menus={{
        headerNav: [
          {
            name: 'Donate',
            url: '#',
            icon: 'heart',
            color: 'Orange'
          }
        ]
      }}
    />
  ));

storiesOf('Organisms/Footer', module)
  .addDecorator(checkA11y)
  .add('Site Footer', () => (
    <Footer
      links={[
        { name: 'About PRI', url: '#' },
        { name: 'Contact Us', url: '#' },
        { name: 'Donate', url: '#' },
        { name: 'Meet the PRI.org Team', url: '#' },
        { name: 'Privacy policy', url: '#' },
        { name: 'Terms of use', url: '#' }
      ]}
    />
  ));

storiesOf('Organisms/Main', module)
  .addDecorator(checkA11y)
  .add('Main Content Area', () => <Main />);

/**
 * Add storybook definition for Block Lists.
 */
const baseUrl = 'https://www.pri.org';
storiesOf('Organisms/BlockList', module)
  .addDecorator(checkA11y)
  .add('3 Ways', () => (
    <BlockList title="Three ways to support PRI">
      <TextBlock
        alt
        title="We are Public Media"
        body="Make a donation"
        button="Donate"
        color="Orange"
        url={`${baseUrl}/donate/index.html?utm_source=navigation&utm_medium=website&utm_campaign=donations`}
        icon="heart"
      />
      <TextBlock
        alt
        title="Subscribe to our Newsletters"
        body="Sign up for The Scan, PRI's daily newsletter"
      >
        <form
          className="campaignmonitor-subscribe-form campaignmonitor-subscribe-form-the-scan hideSubmitButton-processed"
          method="post"
          id="campaignmonitor-subscribe-form"
          acceptCharset="UTF-8"
        >
          <span>
            <span className="form-item form-type-textfield form-item-email GoogleAnalyticsET-processed">
              <label htmlFor="edit-email">
                <span className={sharedStyles.visuallyhidden}>Email</span>
                <input
                  type="text"
                  id="edit-email"
                  name="email"
                  placeholder="Your Email"
                  size="60"
                  maxLength="200"
                  className="form-text required"
                />
              </label>
            </span>
            <input
              type="hidden"
              name="list_id"
              value="986c7a3cd11f67a0ee74fabf7c05f6c0"
            />
            <input
              type="submit"
              id="edit-submit--3"
              name="op"
              value="Subscribe"
              className="form-submit btn btn-danger"
            />
            <input
              type="hidden"
              name="form_build_id"
              value="form-uYRO0cZswFet_TYFqbNrw-kMFvijHbWLD1cT_HTHdR8"
            />
            <input
              type="hidden"
              name="form_token"
              value="oP_Zt4SgcglXt9S2vr05DzI-RIQ2wXetfco4D159-cg"
            />
            <input
              type="hidden"
              name="form_id"
              value="campaignmonitor_subscribe_form"
            />
          </span>
        </form>
      </TextBlock>
      <TextBlock
        alt
        title="Subscribe to our Podcasts"
        body="The Science of Happiness is now #2 on iTunes"
        button="Subscribe to Podcasts"
        color="Orange"
        url={`${baseUrl}/shows`}
        icon="volume"
      >
        <a href={`${baseUrl}/shows`}>
          <img
            src="https://media.pri.org/s3fs-public/styles/medium_square/public/ScienceOfHappiness.jpg?itok=w_A0ovSx"
            alt="Science of Happiness"
          />
        </a>
      </TextBlock>
    </BlockList>
  ));
