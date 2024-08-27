import { createContext } from "react";
import Head from "next/head";
import { useAmp } from "next/amp";
import {
  stringTrimmer,
  themeBuilder,
  themeValidator,
  useIsomorphicLayoutEffect,
  detectColorScheme,
} from "@kami-ui/react-theme-common";
import type { MultiThemeProviderProps } from "@kami-ui/types";

export const ThemeContext = createContext<{
  themes: MultiThemeProviderProps["themes"];
  disableConsole: boolean;
}>({
  themes: [],
  disableConsole: false,
});

const PreChildren = ({ themes }: Pick<MultiThemeProviderProps, "themes">) => {
  useIsomorphicLayoutEffect(() => {
    if (!document?.body) return;
    const savedScheme = detectColorScheme();
    let notHasBodyClass = true;
    for (const bodyClass of Array.from(document.body.classList)) {
      if (bodyClass.startsWith("kami-ui-")) {
        notHasBodyClass = false;
        break;
      }
    }
    const themeIndexRaw = themes.findIndex(({ name }) => name.includes(savedScheme));
    const themeIndex = themeIndexRaw === -1 ? 0 : themeIndexRaw;
    if (notHasBodyClass && themes[themeIndex] && themes[themeIndex].name) {
      document.body.classList.add(`kami-ui-${stringTrimmer(themes[themeIndex].name)}`);
    }
  }, []);

  // eslint-disable-next-line react/jsx-no-useless-fragment
  return <></>;
};

const MultiThemeProvider = ({
  themes = [],
  injectInBody = false,
  disableConsole = false,
  disableOnAmp = true,
  autoMaintainTheme = true,
  children,
}: MultiThemeProviderProps) => {
  const isAmp = useAmp();
  themeValidator(themes);
  const styles = themes.map(({ name, theme }) => themeBuilder(theme, name)).join("");
  const styleElem = <style id="kami-ui-styles" dangerouslySetInnerHTML={{ __html: styles }} />;

  // disabling eslint rule for this line because useMemo is not needed here as the value is coming from the props.
  // eslint-disable-next-line react/jsx-no-constructed-context-values
  const value = { themes, disableConsole };

  return (
    <ThemeContext.Provider value={value}>
      {autoMaintainTheme && <PreChildren themes={themes} />}
      {disableOnAmp && !isAmp && (injectInBody ? styleElem : <Head>{styleElem}</Head>)}
      {children}
    </ThemeContext.Provider>
  );
};

export { MultiThemeProvider };
