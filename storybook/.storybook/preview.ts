import type { Preview } from '@storybook/react';
import { GlobalStyles } from '../pages/_app';
import { withThemeFromJSXProvider } from '@storybook/addon-themes';
import { MultiThemeProvider } from '@kami-ui/next-theme';

export const decorators = [
  withThemeFromJSXProvider({
    GlobalStyles,
    Provider: MultiThemeProvider,
  }),
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
