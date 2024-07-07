import { createContext } from "react";
import { themeBuilder } from "./theme-builder";
import type { MultiThemeProviderProps } from "./types";
import Head from "next/head";
import useIsomorphicLayoutEffect from "./use-isomorphic-layout-effect";
import { stringTrimmer, themeValidator } from "./helpers";

export const ThemeContext = createContext<{
  themes: MultiThemeProviderProps["themes"];
  disableConsole: boolean;
}>({
  themes: [],
  disableConsole: false,
});

const MultiThemeProvider = ({
  themes = [],
  injectInBody = false,
  disableConsole = false,
  children,
}: MultiThemeProviderProps) => {
  themeValidator(themes);
  const styles = themes.map(({ name, theme }) => themeBuilder(theme, name)).join("");
  const styleElem = <style id="kami-ui-styles" dangerouslySetInnerHTML={{ __html: styles }} />;

  useIsomorphicLayoutEffect(() => {
    if (!document) return;
    let notHasBodyClass = true;
    for (const bodyClass of Array.from(document.body.classList)) {
      if (bodyClass.startsWith("kami-ui-")) {
        notHasBodyClass = false;
        break;
      }
    }
    if (notHasBodyClass && themes[0] && themes[0].name) {
      document.body.classList.add(`kami-ui-${stringTrimmer(themes[0].name)}`);
    }
  }, []);

  return (
    <ThemeContext.Provider value={{ themes, disableConsole }}>
      {injectInBody ? <>{styleElem}</> : <Head>{styleElem}</Head>}
      {children}
    </ThemeContext.Provider>
  );
};

export { MultiThemeProvider };
