import { createContext, useContext } from "react";
import { themeBuilder } from "./theme-builder";
import type { MultiThemeProviderProps } from "./types";
import Head from "next/head";
import useIsomorphicLayoutEffect from "./use-isomorphic-layout-effect";
import { stringTrimmer } from "./helpers";

const ThemeContext = createContext<MultiThemeProviderProps["themes"]>([]);

const MultiThemeProvider = ({ themes = [], injectInBody = false, children }: MultiThemeProviderProps) => {
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
    <ThemeContext.Provider value={themes}>
      {injectInBody ? <>{styleElem}</> : <Head>{styleElem}</Head>}
      {children}
    </ThemeContext.Provider>
  );
};

const useTheme = ({ disableConsole = false }: { disableConsole?: boolean } = { disableConsole: false }) => {
  const themes = useContext(ThemeContext);
  const updateTheme = (themeName: string) => {
    if (!(document && themeName)) return;
    const theme = themes.find(({ name }) => name === themeName);
    if (!theme) {
      if (!disableConsole) console.warn(`Theme ${themeName} not found`);
      return;
    }
    for (const bodyClass of Array.from(document.body.classList)) {
      if (bodyClass.startsWith("kami-ui-")) {
        document.body.classList.remove(bodyClass);
        break;
      }
    }
    document.body.classList.add(`kami-ui-${stringTrimmer(themeName)}`);
  };
  return { updateTheme };
};

export { MultiThemeProvider, useTheme };
