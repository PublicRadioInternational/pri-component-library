/**
 * @file Home.component.js
 * Exports the homepage.
 */

import React from 'react';

import Header from '../../Organisms/Header/Header.component';
import Layout from '../../Organisms/Main/Layout.component';
import Footer from '../../Organisms/Footer/Footer.component';

/**
 * Component that renders the homepage.
 */
const Home = () => (
  <div>
    <Header />
    <Layout />
    <Footer />
  </div>
);

export default Home;
