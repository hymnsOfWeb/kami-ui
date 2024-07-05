import type { AppProps } from 'next/app';
import { Global } from '@emotion/react';
import globalStyles from '@styles/global';

export const GlobalStyles = () => <Global styles={globalStyles} />;

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyles />
      <Component {...pageProps} />
    </>
  );
}
