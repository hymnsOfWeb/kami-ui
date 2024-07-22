import { createContext } from "react";
import Head from "next/head";
import { themeBuilder } from "./theme-builder";
import type { MultiThemeProviderProps } from "./types";
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

  // disabling eslint rule for this line because useMemo is not needed here as the value is coming from the props.
  // eslint-disable-next-line react/jsx-no-constructed-context-values
  const value = { themes, disableConsole };

  return (
    <ThemeContext.Provider value={value}>
      {injectInBody ? styleElem : <Head>{styleElem}</Head>}
      {children}
    </ThemeContext.Provider>
  );
};

export { MultiThemeProvider };
