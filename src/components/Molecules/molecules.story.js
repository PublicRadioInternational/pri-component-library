/**
 * @file molecules.story.js
 * Story configuration for Molecules.
 */

import React from 'react';
import { storiesOf } from '@storybook/react';
import { checkA11y } from '@storybook/addon-a11y';
import { action } from '@storybook/addon-actions';

import Dropdown from './Dropdown/Dropdown.component';
import DropdownItem from '../Atoms/DropdownItem/DropdownItem.component';

import List from './List/List.component';
import Search from './Search/Search.component';
import CardItem from './CardItem/CardItem.component';
import CtaMessage from './CtaMessage/CtaMessage.component';
import TeaserItem from './Teaser/TeaserItem.component';
import Hero from './Hero/Hero.component';
import MenuList from './MenuList/MenuList.component';
import TextBlock from './TextBlock/TextBlock.component';

import LayoutMainList from '../Organisms/Main/LayoutMainList.component';

/**
 * Add storybook definition for Molecules.
 */
storiesOf('Molecules/Dropdown', module)
  .addDecorator(checkA11y)
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
 * Add storybook definition for Lists.
 */
storiesOf('Molecules/List', module)
  .addDecorator(checkA11y)
  .add('Simple', () => (
    <List
      listItems={[
        { name: 'Google', url: 'http://google.com' },
        { name: 'Yahoo', url: 'http://yahoo.com' }
      ]}
    />
  ));

/**
 * Add storybook definition for Search.
 */
storiesOf('Molecules/Search', module)
  .addDecorator(checkA11y)
  .add('Default', () => <Search />);

/**
 * Add storybook definition for CardItem.
 */
storiesOf('Molecules/CardItem', module)
  .addDecorator(story => (
    <div
      style={{
        position: 'absolute',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        minHeight: '100vh'
      }}
    >
      <LayoutMainList>
        <div
          style={{
            background: '#fff',
            margin: '2rem 0',
            maxWidth: '690px'
          }}
        >
          {story()}
        </div>
      </LayoutMainList>
    </div>
  ))
  .addDecorator(checkA11y)
  .add('Default', () => (
    <CardItem
      title="50 years on, India is celebrating the Beatles' infamous trip to the country"
      url="stories/2017-07-24/clearing-mines-and-explosives-mosul"
      imgSrc="https://media.pri.org/s3fs-public/styles/feature_small/public/story/images/Beatles_India_02.jpg?itok=iG8TKNDu"
      imgAlt="Alt Text"
      blurb="When the Beatles embarked on their famous discovery of India to study transcendental meditation, the Indian government was far more wary. "
      hasAudio
    />
  ))
  .add('Large', () => (
    <CardItem
      title="50 years on, India is celebrating the Beatles' infamous trip to the country"
      url="stories/2017-07-24/clearing-mines-and-explosives-mosul"
      imgSrc="https://media.pri.org/s3fs-public/styles/feature_medium/public/story/images/Beatles_India_02.jpg?itok=iG8TKNDu"
      imgAlt="Alt Text"
      blurb="When the Beatles embarked on their famous discovery of India to study transcendental meditation, the Indian government was far more wary. "
      large
    />
  ))
  .add('Freeform', () => (
    <CardItem
      freeform
      title="50 years on, India is celebrating the Beatles' infamous trip to the country"
      url="stories/2017-07-24/clearing-mines-and-explosives-mosul"
      blurb={
        '<h2>Header within a freeform body</h2><h2><a href="#">Header within a freeform body and has a link</a></h2><blockquote><p>"Science and stories for a meaningful life. Hosted by award-winning professor Dacher Keltner, The Science of Happiness highlights the most provocative and practical findings to have emerged from the ground-breaking science of compassion, gratitude, mindfulness, and awe."</p></blockquote><p>Science and stories for a meaningful life. Hosted by award-winning professor Dacher Keltner, The Science of Happiness highlights the most provocative and practical findings to have emerged from the ground-breaking science of compassion, gratitude, mindfulness, and awe. A co-production with the Greater Good Science Center at UC Berkeley. <a href="#">This is a link</a></p>'
      }
    />
  ));

/**
 * Add storybook definition for CtaMessage.
 */
storiesOf('Molecules/CtaMessage', module)
  .addDecorator(checkA11y)
  .add('Push Down', () => (
    <CtaMessage
      onClose={action('close-prompt')}
      showLogo
      title="Google is the #1 search engine."
      description="Don't believe us? Google it."
      action={{
        label: 'Google It',
        btnColor: 'Orange',
        url: 'https://www.google.com/'
      }}
      dismiss={{
        label: 'Yey, I know'
      }}
    />
  ));

storiesOf('Molecules/CtaMessage', module)
  .addDecorator(checkA11y)
  .add('Announcement', () => (
    <CtaMessage
      onClose={action('close-prompt')}
      type="announcement"
      showLogo
      title="This is the title"
      description="<img src=&quot;https:/media-pri-dev.s3.amazonaws.com/s3fs-public/styles/card_large/public/images/2018/08/080618-hiroshima-obama-embrace.jpg?itok=UAIeO7ma&quot; alt=&quot;test&quot; /><p>This is a paragraph of text. Note how this can hold HTML tags. Mauris rhoncus malesuada felis sit amet mattis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ac lorem cursus, suscipit ligula quis, mattis metus.</p><ul><li><a href=&quot;#&quot;>List item 1</a></li><li><a href=&quot;#&quot;>List item 2</a></li><li><a href=&quot;#&quot;>List item 3</a></li><li><a href=&quot;#&quot;>List item 4</a></li></ul>"
      action={{
        label: 'Google It',
        btnColor: 'Orange',
        url: 'https://www.google.com/'
      }}
      dismiss={{
        label: 'Yey, I know'
      }}
    />
  ));

storiesOf('Molecules/CtaMessage', module)
  .addDecorator(checkA11y)
  .add('Load Under', () => (
    <CtaMessage
      onClose={action('close-prompt')}
      type="loadUnder"
      title="Google is the #1 search engine."
      description={`Don't believe us? <a href="http://www.google.com/" target="_blank">Google it.</a>`}
      action={{
        label: 'Google It',
        btnColor: 'Blue',
        url: 'https://www.google.com/'
      }}
      dismiss={{
        label: 'Yey, I know'
      }}
    />
  ));

storiesOf('Molecules/CtaMessage', module)
  .addDecorator(checkA11y)
  .add('Load Under (No Action URL)', () => (
    <CtaMessage
      onClose={action('close-prompt')}
      type="loadUnder"
      title="Google is the #1 search engine."
      description={`Don't believe us? <a href="http://www.google.com/" target="_blank">Google it.</a>`}
      action={{
        label: 'Google It',
        btnColor: 'Orange'
      }}
      dismiss={{
        label: 'Yey, I know'
      }}
    />
  ));

/**
 * Add storybook definition for Hero.
 */
storiesOf('Molecules/Hero', module)
  .addDecorator(checkA11y)
  .add('Default', () => (
    <Hero
      hasAudio
      url="https://google.com"
      title="Opioid addicts are turning to a clinic in Mexico to break their addiction, but there's a catch. The treatment is illegal in the US."
      summary="Ibogaine is a powerful hallucinogenic drug that has been shown to have surprising success in treating addiction. But it comes with risks that, so far, have made its use in the US illegal."
      category="GlobalPost"
      categoryUrl="https://bing.com"
      imgSrc="https://media.pri.org/s3fs-public/styles/feature_large/public/story/images/JL1_8064.JPG?itok=WfGYKL2U"
      imgAlt="Opioid Addiction"
    />
  ));

/**
 * Add storybook definition for Teaser items (for lists).
 */
storiesOf('Molecules/Teaser', module)
  .addDecorator(checkA11y)
  .add('TeaserItem Full', () => (
    <TeaserItem
      title="For poor and minority children, excessive air pollution creates a toxic learning environment"
      url="stories/2018-03-03/poor-and-minority-children-excessive-air-pollution-creates-toxic-learning"
      programTitle="Living on Earth"
      programUrl="programs/living-earth"
      hasAudio
    />
  ))
  .add('TeaserItem No audio', () => (
    <TeaserItem
      title="Progressives in Congress side with Trump on trade"
      url="stories/2018-03-06/progressives-side-trump-trade"
      programTitle="PRI's The World"
      programUrl="programs/the-world"
    />
  ))
  .add('TeaserItem No program', () => (
    <TeaserItem
      title="North Korea says it's willing to hold talks with the US and halt nuclear pursuit while negotiations last"
      url="stories/2018-03-06/north-korea-says-its-willing-hold-talks-us-and-halt-nuclear-pursuit-while"
    />
  ));
/**
 * Add storybook definition for Menu Lists.
 */
const baseUrl = 'https://www.pri.org';
storiesOf('Molecules/MenuList', module)
  .addDecorator(checkA11y)
  .add('Quick Links', () => (
    <MenuList
      label="Quick Links"
      menuListItems={[
        {
          name: "PRI's The World",
          url: `${baseUrl}/programs/the-world`,
          itemLinkClass: 'world'
        },
        {
          name: 'Studio360',
          url: `${baseUrl}/programs/studio-360`,
          itemLinkClass: 'studio'
        },
        {
          name: 'Takeaway',
          url: `${baseUrl}/programs/takeaway`,
          itemLinkClass: 'takeaway'
        },
        {
          name: 'GlobalPost',
          url: `${baseUrl}/programs/globalpost`,
          itemLinkClass: 'globalPost'
        },
        {
          name: 'Living on Earth',
          url: `${baseUrl}/programs/living-earth`,
          itemLinkClass: 'livingEarth'
        },
        {
          name: "Across Women's Lives",
          url: `${baseUrl}/verticals/across-womens-lives`,
          itemLinkClass: 'acrossWomensLives'
        },
        {
          name: 'Global Nation',
          url: `${baseUrl}/verticals/global-nation`,
          itemLinkClass: 'globalNation'
        },
        {
          name: 'Global Security',
          url: `${baseUrl}/verticals/global-security`,
          itemLinkClass: 'globalSecurity'
        },
        {
          name: 'Livable Planet',
          url: `${baseUrl}/verticals/livable-planet`,
          itemLinkClass: 'livablePlanet'
        },
        { name: 'View all Programs & Podcasts', url: `${baseUrl}/shows` }
      ]}
    />
  ));

/**
 * Add storybook definition for Text Blocks.
 */
storiesOf('Molecules/TextBlock', module)
  .addDecorator(checkA11y)
  .add('About', () => (
    <TextBlock
      title="About PRI"
      body="By giving voice to our dynamic world, we inspire connection, action and hope."
      button="About Us"
      color="Blue"
      url={`${baseUrl}/about-pri`}
      icon="info"
    />
  ));

storiesOf('Molecules/TextBlock', module)
  .addDecorator(checkA11y)
  .add('Donate', () => (
    <TextBlock
      alt
      title="We are Public Media"
      body="Make a donation"
      button="Donate"
      color="Orange"
      url={`${baseUrl}/donate/index.html?utm_source=navigation&utm_medium=website&utm_campaign=donations`}
      icon="heart"
    />
  ));
