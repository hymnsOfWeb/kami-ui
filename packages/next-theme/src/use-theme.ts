import { useContext } from "react";
import { ThemeContext } from "./multi-theme-provider";
import { stringTrimmer } from "./helpers";
import { ColorsObject } from "./types";

export const useTheme = () => {
  const { themes, disableConsole } = useContext(ThemeContext);
  const warn = (message: string) => {
    if (!disableConsole) console.warn(message);
  };
  const updateTheme = (themeName: string) => {
    if (!(document && themeName)) return;
    const theme = themes.find(({ name }) => name === themeName);
    if (!theme) {
      if (!disableConsole) warn(`Theme ${themeName} not found`);
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
  const getTheme = (themeName: string | undefined) => {
    return themes.find(({ name }) => name === themeName);
  };
  const getColor = (color: keyof ColorsObject, index: number) => {
    try {
      const currentBodyClass = Array.from(document.body.classList).find((bodyClass) =>
        bodyClass.startsWith("kami-ui-"),
      );
      const currentTheme = getTheme(currentBodyClass?.replace("kami-ui-", "") || themes?.[0]?.name);
      if (!currentTheme) {
        if (!disableConsole) warn(`Current theme not found`);
        return null;
      }
      const fetchedColor = currentTheme?.theme?.colors?.[color]?.[index];
      if (!color) {
        if (!disableConsole) warn(`--color-${fetchedColor}-${index + 1}00 in theme ${currentTheme?.name} not found`);
        return null;
      }
      return fetchedColor || null;
    } catch {
      return null;
    }
  };
  return { updateTheme, getColor, getTheme };
};
