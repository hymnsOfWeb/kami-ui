import type { AppProps } from 'next/app';
import { Global } from '@emotion/react';
import globalStyles from '@styles/global';

export function GlobalStyles() {
  return <Global styles={globalStyles} />;
}

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyles />
      <Component {...pageProps} />
    </>
  );
}
