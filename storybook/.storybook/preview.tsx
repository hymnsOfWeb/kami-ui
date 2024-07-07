import React from 'react';
import type { Preview } from '@storybook/react';
import { GlobalStyles, themeObj } from '../pages/_app';
import { MultiThemeProvider } from '@kami-ui/next-theme';

export const decorators: Preview['decorators'] = [
  (Story) => (
    <MultiThemeProvider themes={themeObj}>
      <GlobalStyles />
      <Story />
    </MultiThemeProvider>
  ),
];

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
