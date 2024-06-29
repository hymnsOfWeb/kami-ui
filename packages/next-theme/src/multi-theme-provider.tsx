import { createContext, useContext } from "react";
import { themeBuilder } from "./theme-builder";
import type { MultiThemeProviderProps } from "./types";
import Head from "next/head";

const ThemeContext = createContext<MultiThemeProviderProps["themes"]>([]);

const MultiThemeProvider = ({ themes = [], injectInBody = false, children }: MultiThemeProviderProps) => {
  const styles = themes.map(({ name, theme }) => themeBuilder(theme, name)).join("");
  const styleElem = <style id="kami-ui-styles" dangerouslySetInnerHTML={{ __html: styles }} />;
  return (
    <ThemeContext.Provider value={themes}>
      {injectInBody ? <>{styleElem}</> : <Head>{styleElem}</Head>}
      {children}
    </ThemeContext.Provider>
  );
};

const useTheme = ({ disableConsole = false }: { disableConsole?: boolean } = { disableConsole: false }) => {
  const themes = useContext(ThemeContext);
  const updateTheme = (newTheme: string) => {
    if (!(document && newTheme)) return;
    const theme = themes.find(({ name }) => name === newTheme);
    if (!theme) {
      if (!disableConsole) console.warn(`Theme ${newTheme} not found`);
      return;
    }
    for (const bodyClass in document.body.classList) {
      if (bodyClass.startsWith("kami-ui-")) {
        document.body.classList.remove(bodyClass);
        break;
      }
    }
    document.body.classList.add(`kami-ui-${newTheme.trim().replace(/\s/gm, "-")}`);
  };
  return { updateTheme };
};

export { MultiThemeProvider, useTheme };
