/**
 * @file LayoutMain.component.js
 * Exports a main content section.
 */

import React from 'react';

import LayoutMain from './LayoutMain.component';
import LayoutMainList from './LayoutMainList.component';
import LayoutMainList2 from './LayoutMainList2.component';
import LayoutAsideLatest from './LayoutAsideLatest.component';
import LayoutAsideCallouts from './LayoutAsideCallouts.component';

/**
 * Component that renders the main content area.
 */
const Layout = () => (
  <LayoutMain>
    <LayoutMainList>
      <p>Main List</p>
    </LayoutMainList>
    <LayoutAsideLatest>
      <p>Latest Content</p>
    </LayoutAsideLatest>
    <LayoutAsideCallouts>
      <p>Callouts</p>
    </LayoutAsideCallouts>
    <LayoutMainList2>
      <p>Main List Two</p>
    </LayoutMainList2>
  </LayoutMain>
);

export default Layout;
