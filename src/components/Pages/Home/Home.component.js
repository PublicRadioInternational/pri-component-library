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
import LayoutAsideCallouts from '../../Organisms/Main/LayoutAsideCallouts.component';
import LayoutMainList2 from '../../Organisms/Main/LayoutMainList2.component';

import Hero from '../../Molecules/Hero/Hero.component';
import MenuList from '../../Molecules/MenuList/MenuList.component';
import TextBlock from '../../Molecules/TextBlock/TextBlock.component';
import BlockList from '../../Organisms/BlockList/BlockList.component';
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
          src="https://interactive-dev.pri.org/staging/prototypes/homepage/themes/pri/images/logo_tw.png"
          category="pris-the-world"
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
      </LayoutMainList>
      <LayoutAsideLatest>
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
        </StickyItem>
      </LayoutAsideLatest>
      <LayoutAsideCallouts>
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
              name: 'GlobalPost',
              url: `${baseUrl}/programs/globalpost`,
              itemLinkClass: 'globalPost'
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
        <TextBlock
          title="About PRI"
          body="By giving voice to our dynamic world, we inspire connection, action and hope."
          button="About Us"
          color="Blue"
          url={`${baseUrl}/about-pri`}
          icon="info"
        />
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
      </LayoutAsideCallouts>
      <LayoutMainList2>
        <CardList
          src="https://media.pri.org/s3fs-public/styles/medium_square/public/logo_gp.png"
          category="pris-globalpost"
          url="#"
          categoryDescription="GlobalPost"
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
          src="https://interactive-dev.pri.org/staging/prototypes/homepage/themes/pri/images/logo_tw.png"
          category="pris-the-world"
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
        </CardList>
      </LayoutMainList2>
    </LayoutMain>
    <Footer />
    <CtaMessage
      type="loadUnder"
      title="Google is the #1 search engine."
      description="Don't believe us? Google it."
      action={{
        label: 'Google It',
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
