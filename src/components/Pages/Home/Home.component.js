/**
 * @file Home.component.js
 * Exports the homepage.
 */

import React from 'react';
import PropTypes from 'prop-types';
import sharedStyles from '../../00_global/shared.css';

import Header from '../../Organisms/Header/Header.component';

import LayoutMain from '../../Organisms/Main/LayoutMain.component';
import LayoutMainList from '../../Organisms/Main/LayoutMainList.component';
import LayoutAsideLatest from '../../Organisms/Main/LayoutAsideLatest.component';
import LayoutMainList2 from '../../Organisms/Main/LayoutMainList2.component';

import Hero from '../../Molecules/Hero/Hero.component';
import TextBlock from '../../Molecules/TextBlock/TextBlock.component';
import CardList from '../../Organisms/CardList/CardList.component';
import CardItem from '../../Molecules/CardItem/CardItem.component';
import StickyItem from '../../Molecules/StickyItem/StickyItem.component';
import TeaserList from '../../Organisms/Teaser/TeaserList.component';
import TeaserItem from '../../Molecules/Teaser/TeaserItem.component';
import CtaMessage from '../../Molecules/CtaMessage/CtaMessage.component';

import Footer from '../../Organisms/Footer/Footer.component';

/**
 * Component that renders the homepage.
 */
const Home = ({ baseUrl }) => (
  <div>
    <Header />
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
    <LayoutMain>
      <LayoutMainList>
        <CardList
          logo="https://interactive-dev.pri.org/staging/prototypes/homepage/themes/pri/images/logo_tw.png"
          name="pris-the-world"
          id="card-top"
          url="#"
          title="PRIs The World"
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
      </LayoutMainList>
      <LayoutAsideLatest>
        <TextBlock
          title="This is The World"
          body="The World is a public radio program and podcast that crosses borders and time zones to bring home the stories that matter."
          button="About Us"
          color="Blue"
          url={`${baseUrl}/about`}
          icon="info"
        >
          <h4>Follow us:</h4>
          <ul>
            <li>
              <a href="https://facebook.com/pritheworld">Facebook</a>
            </li>
            <li>
              <a href="https://twitter.com/pritheworld">Twitter</a>
            </li>
            <li>
              <a href="https://instagram.com/pritheworld">Instagram</a>
            </li>
          </ul>
        </TextBlock>
        <TextBlock
          alt
          title="Subscribe to our Podcast"
          body="Listen to The World on your favorite podcast player."
          button="Subscribe today"
          color="Orange"
          url={`${baseUrl}/programs/the-world`}
          icon="volume"
        />
        <TextBlock
          alt
          title="Subscribe to our daily newsletter"
          body="Sign up for the Top of the World, delivered to your inbox every weekday morning."
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
        <StickyItem>
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
              programTitle="The World"
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
              programTitle="The World"
              programUrl="programs/the-world"
              hasAudio
            />
          </TeaserList>
        </StickyItem>
      </LayoutAsideLatest>
      <LayoutMainList2>
        <CardList
          logo="https://media.pri.org/s3fs-public/styles/medium_square/public/logo_gp.png"
          name="globalpost"
          id="card-1"
          url="#"
          title="GlobalPost"
        >
          <CardItem
            title="How the murder of a young woman turned Italy's elections into a referendum on immigration"
            url="#"
            imgSrc="https://media.pri.org/s3fs-public/styles/feature_medium/public/story/images/RTS1M7QU%20(1).jpg?itok=SCBMIFU_"
            imgAlt="Alt Text"
            blurb="Little more than a month ago, no one had heard of Macerata. Then the murder of Pamela Mastropietro thrust the small town in central Italy onto the national stage, and the whole course of a pivotal national election was altered."
            large
          />
          <CardItem
            title="Instagram art project spreads awareness about femicides in Mexico"
            url="stories/2017-07-24/clearing-mines-and-explosives-mosul"
            imgSrc="https://media.pri.org/s3fs-public/styles/feature_small/public/story/images/fem.jpg?itok=GvblSbSw"
            imgAlt="Alt Text"
            blurb="No estamos todas is an Instagram project dedicated to visualizing the issue of femicide in Mexico with original illustrations."
          />
          <CardItem
            title="When this Univision anchor interviewed a head of the KKK, he called her the n-word"
            url="stories/2017-07-24/clearing-mines-and-explosives-mosul"
            imgSrc="https://media.pri.org/s3fs-public/styles/feature_small/public/story/images/IliaCalderon_david001.jpg?itok=Be7CbPFn"
            imgAlt="Alt Text"
            blurb="Ilia Calderón doesn't back down in an interview. And she's determined to allow people growing up like she did see their own experience in her stories."
            hasAudio
          />
        </CardList>
        <CardList
          name="custom-card-header"
          id="card-2"
          title="Custom Card Header"
        >
          <CardItem
            title="50 years on, India is celebrating the Beatles' infamous trip to the country"
            url="stories/2017-07-24/clearing-mines-and-explosives-mosul"
            imgSrc="https://media.pri.org/s3fs-public/styles/story_main/public/story/images/Beatles_India_02.jpg?itok=iG8TKNDu"
            imgAlt="Alt Text"
            blurb={
              '<h2>Header within a freeform body</h2><h2><a href="#">Header within a freeform body and has a link</a></h2><blockquote><p>"Science and stories for a meaningful life. Hosted by award-winning professor Dacher Keltner, The Science of Happiness highlights the most provocative and practical findings to have emerged from the ground-breaking science of compassion, gratitude, mindfulness, and awe."</p></blockquote><p>Science and stories for a meaningful life. Hosted by award-winning professor Dacher Keltner, The Science of Happiness highlights the most provocative and practical findings to have emerged from the ground-breaking science of compassion, gratitude, mindfulness, and awe. A co-production with the Greater Good Science Center at UC Berkeley. <a href="#">This is a link</a></p>'
            }
            freeform
            large
            links={[
              {
                url:
                  'https://www.pri.org/stories/2019-04-18/muellers-russia-report-outlines-episodes-possible-trump-obstruction',
                title:
                  "Mueller's Russia report outlines episodes of possible Trump obstruction",
                attributes: []
              },
              {
                url:
                  'https://www.pri.org/stories/2019-03-22/smoke-or-fire-contacts-between-trump-campaign-and-russia',
                title:
                  'Smoke or fire? Contacts between Trump campaign and Russia',
                attributes: []
              },
              {
                url:
                  'https://www.pri.org/stories/2019-04-18/factbox-five-things-look-muellers-trump-russia-report',
                title:
                  "Factbox: Five things to look for in Mueller's Trump-Russia report",
                attributes: []
              },
              {
                url:
                  'https://www.pri.org/stories/2019-04-18/timeline-big-moments-mueller-investigation-russian-meddling-2016-us-election',
                title:
                  'Timeline: Big moments in Mueller investigation of Russian meddling in 2016 US election',
                attributes: []
              },
              {
                url:
                  'https://www.pri.org/stories/2019-04-17/secrecy-subjective-when-government-censors-redact-documents',
                title:
                  "'Secrecy is subjective' when government censors redact documents",
                attributes: []
              }
            ]}
          />
        </CardList>
      </LayoutMainList2>
    </LayoutMain>
    <Footer
      links={[
        { name: 'About', url: '#' },
        { name: 'Contact Us', url: '#' },
        { name: 'Donate', url: '#' },
        { name: 'Meet the Team', url: '#' },
        { name: 'Privacy policy', url: '#' },
        { name: 'Terms of use', url: '#' }
      ]}
    />
    <CtaMessage
      type="loadUnder"
      title="The World reports on global news in ways that reflect our shared core belief: we are all connected. Will you help us keep our reporting free for all, especially now?"
      description="When you donate to The World this April, your donation will be matched by an anonymous, donor up to $67,000. That means when you donate $75 you’re actually providing $150 worth of support, which ensures our coverage is, and always will be, freely available."
      action={{
        label: 'Donate',
        btnColor: 'Blue',
        url: 'https://www.google.com/'
      }}
      dismiss={{
        label: 'Yey, I know'
      }}
    />
  </div>
);

Home.propTypes = {
  baseUrl: PropTypes.string
};

Home.defaultProps = {
  baseUrl: 'https://www.pri.org'
};

export default Home;
