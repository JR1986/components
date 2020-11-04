import React from 'react';

import Navigation from '../Navigation';
import Theme from '../Theme/Theme';

export default {
  title: 'Example/Header',
  component: Navigation,
};

export const Navbar = () => (
  <Theme>
    <Navigation />
  </Theme>
);
 