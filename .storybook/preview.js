import React from 'react';
import Theme from '../components/Theme/Theme';

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
}

export const decorators = [
  (Story) => (
    <Theme>
      <Story />
    </Theme>
  ),
];