import { themeBuilder, type ThemeProviderProps } from "@kami-ui/react-theme-common";
import Head from "next/head";

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
