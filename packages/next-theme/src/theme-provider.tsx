import Head from "next/head";
import { themeBuilder } from "./theme-builder";
import { ThemeProviderProps } from "./types";

export const ThemeProvider = ({ injectInBody = false, theme, mode, children }: ThemeProviderProps) => {
  const styles = themeBuilder(theme, mode);
  const styleElem = <style id="kami-ui-styles" dangerouslySetInnerHTML={{ __html: styles }} />;
  return (
    <>
      {injectInBody ? styleElem : <Head>{styleElem}</Head>}
      {children}
    </>
  );
};
