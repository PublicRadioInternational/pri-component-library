/**
 * @file Home.component.js
 * Exports the homepage.
 */

import React from 'react';

import Header from '../../Organisms/Header/Header.component';
import Main from '../../Organisms/Main/Main.component';
import Footer from '../../Organisms/Footer/Footer.component';

/**
 * Component that renders the homepage.
 */
const Home = () => (
  <div>
    <Header />
    <Main />
    <Footer />
  </div>
);

export default Home;
