import type { AppProps } from 'next/app';
import { Global } from '@emotion/react';
import globalStyles from '@styles/global';
import { MultiThemeProvider, MultiThemeProviderProps } from '@kami-ui/next-theme';

export function GlobalStyles() {
  return <Global styles={globalStyles} />;
}
export const themeObj: MultiThemeProviderProps['themes'] = [
  {
    name: 'light',
    theme: {
      colors: {
        black: '#123',
        primary: ['#382bf0', '#5e43f3', '#7a5af5', '#9171f8', '#a688fa', '#bc9ffd'],
        secondary: [],
      },
    },
  },
  {
    name: 'dark',
    theme: {
      colors: {
        primary: ['#1a1625', '#2d2638', '#3f3a4b', '#51425e', '#635571', '#756984'],
        secondary: [],
        black: '#fff',
      },
    },
  },
];

export default function App({ Component, pageProps }: AppProps) {
  return (
    <MultiThemeProvider themes={themeObj}>
      <GlobalStyles />
      <Component {...pageProps} />
    </MultiThemeProvider>
  );
}
