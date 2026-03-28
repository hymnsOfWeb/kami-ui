import { saveColorScheme, stringTrimmer } from "@kami-ui/react-theme-common";
import { ColorsObject } from "@kami-ui/types";
import { useContext } from "react";
import { ThemeContext } from "./context";

export const useTheme = () => {
  const { themes, disableConsole } = useContext(ThemeContext);
  const warn = (message: string) => {
    // eslint-disable-next-line no-console -- controlled by disableConsole
    if (!disableConsole) console.warn(message);
  };
  const updateTheme = (themeName: string) => {
    if (!(document && themeName)) return;
    const theme = themes.find(({ name }) => {
      return name === themeName;
    });
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
    try {
      if (themeName.includes("dark")) {
        saveColorScheme("dark");
      } else if (themeName.includes("light")) {
        saveColorScheme("light");
      } else {
        // do nothing
      }
    } catch {
      if (!disableConsole)
        warn(`Failed to update theme ${themeName} in local storage`);
    }
  };
  const getTheme = (themeName: string | undefined) => {
    return themes.find(({ name }) => {
      return name === themeName;
    });
  };
  const getColor = (color: keyof ColorsObject, index: number) => {
    try {
      const currentBodyClass = Array.from(document.body.classList).find(
        (bodyClass) => {
          return bodyClass.startsWith("kami-ui-");
        },
      );
      const currentTheme = getTheme(
        currentBodyClass?.replace("kami-ui-", "") ?? themes?.[0]?.name,
      );
      if (!currentTheme) {
        if (!disableConsole) warn(`Current theme not found`);
        return null;
      }
      const colorValue = currentTheme?.theme?.colors?.[color];
      if (colorValue == null) {
        if (!disableConsole)
          warn(
            `--color-${String(color)} in theme ${currentTheme?.name} not found`,
          );
        return null;
      }
      // If array of SingleColorType
      if (Array.isArray(colorValue)) {
        // If it's a number array (hsl/hsla), treat as single color
        if (
          (colorValue.length === 3 || colorValue.length === 4) &&
          colorValue.every((n) => {
            return typeof n === "number";
          })
        ) {
          // Not a palette, just a single color
          if (index === 0) return colorValue;
          if (!disableConsole)
            warn(
              `--color-${String(color)} is a single color array, index ${index} out of bounds in theme ${currentTheme?.name}`,
            );
          return null;
        }
        // Otherwise, treat as palette
        return colorValue[index] ?? null;
      }
      // If not array, it's a SingleColorType
      if (index === 0) return colorValue;
      if (!disableConsole)
        warn(
          `--color-${String(color)} is a single color, index ${index} out of bounds in theme ${currentTheme?.name}`,
        );
      return null;
    } catch {
      return null;
    }
  };
  const getCurrentTheme = (): string | null => {
    const currentBodyClass =
      Array.from(document.body.classList).find((bodyClass) => {
        return bodyClass.startsWith("kami-ui-");
      }) ?? "";
    return currentBodyClass.replace("kami-ui-", "") || null;
  };
  return { updateTheme, getColor, getTheme, getCurrentTheme };
};
