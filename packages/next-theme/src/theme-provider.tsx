import { themeBuilder } from "@kami-ui/react-theme-common";
import Head from "next/head";
import { useAmp } from "next/amp";
import type { ThemeProviderProps } from "@kami-ui/types";

export const ThemeProvider = ({ injectInBody = false, theme, mode, disableOnAmp, children }: ThemeProviderProps) => {
  const isAmp = useAmp();
  const styles = themeBuilder(theme, mode);
  const styleElem = <style id="kami-ui-styles" dangerouslySetInnerHTML={{ __html: styles }} />;
  return (
    <>
      {disableOnAmp && !isAmp && (injectInBody ? styleElem : <Head>{styleElem}</Head>)}
      {children}
    </>
  );
};
