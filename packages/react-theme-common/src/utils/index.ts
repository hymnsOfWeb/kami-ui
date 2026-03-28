import { MultiThemeProviderProps } from "@kami-ui/types";
import { isHexColor, toHslString } from "./colors";

export const stringTrimmer = (str: string) => {
  return str.trim().replace(/\s/gm, "-");
};

const validateSingleColor = (val: any, color: string, themeName: string) => {
  if (typeof val === "string") {
    if (!isHexColor(val)) {
      throw new Error(
        `Color '${color}' in theme '${themeName}' must be a valid hex string.`,
      );
    }
    return;
  }
  if (Array.isArray(val)) {
    if (
      (val.length === 3 || val.length === 4) &&
      val.every((n) => {
        return typeof n === "number";
      })
    ) {
      return;
    }
    throw new Error(
      `Color '${color}' in theme '${themeName}' must be an array of 3 or 4 numbers.`,
    );
  }
  if (typeof val === "object" && val !== null) {
    if (!toHslString(val)) {
      throw new Error(
        `Color '${color}' in theme '${themeName}' must be a valid hsl(a) or hue/saturation/lightness/alpha object.`,
      );
    }
    return;
  }
  throw new Error(
    `Color '${color}' in theme '${themeName}' is not a valid color value.`,
  );
};

export const themeValidator = (themes: MultiThemeProviderProps["themes"]) => {
  const checkedNames: string[] = [];
  const colorKeys: string[] = [];
  for (const {
    name,
    theme: { colors },
  } of themes) {
    type ColorKey = keyof typeof colors;
    const currColorKeys = JSON.stringify(Object.keys(colors).sort());
    const keyCheck =
      colorKeys.length === 0
        ? colorKeys.push(currColorKeys)
        : colorKeys[0] !== currColorKeys;
    if (keyCheck === true) {
      throw new Error(
        `Invalid theme config: Themes have different color keys;`,
      );
    }
    if (checkedNames.includes(name)) {
      throw new Error(`Theme name ${name} is duplicated`);
    }
    checkedNames.push(name);
    for (const color in colors) {
      const value = colors[color as ColorKey];
      // Accept string, hsl(a) array, hsl(a) object, or array of any of these (including array of hex strings)
      if (Array.isArray(value)) {
        if (value.length === 0) {
          throw new Error(
            `Color '${color}' in theme '${name}' must not be an empty array.`,
          );
        }
        // Accept [number,number,number] or [number,number,number,number] as a single color
        if (
          (value.length === 3 || value.length === 4) &&
          value.every((n) => {
            return typeof n === "number";
          })
        ) {
          validateSingleColor(value, color, name);
          continue;
        }
        // Otherwise, treat as array of SingleColorType
        value.forEach((v) => {
          return validateSingleColor(v, color, name);
        });
        // Check length consistency across themes
        const arrLen = value.length;
        for (const checked of checkedNames) {
          const checkedArr = themes.find(({ name: checkedName }) => {
            return checkedName === checked;
          })?.theme?.colors[color as ColorKey];
          if (!Array.isArray(checkedArr) || checkedArr.length !== arrLen) {
            throw new Error(
              `Invalid theme config: Themes have different lengths of color array '${color}';`,
            );
          }
        }
      } else {
        validateSingleColor(value, color, name);
      }
    }
  }
};

const themeModeLocalStorageKey = "preferred-color-scheme";

export const saveColorScheme = (themeMode: string) => {
  localStorage.setItem(themeModeLocalStorageKey, themeMode);
};

export const getSavedThemeScheme = () => {
  return localStorage.getItem(themeModeLocalStorageKey);
};

export const detectColorScheme = (
  defaultScheme: "dark" | "light" = "light",
): "dark" | "light" => {
  try {
    if (!window) return defaultScheme;
    const savedScheme = getSavedThemeScheme();
    if (savedScheme) {
      return savedScheme as "dark" | "light";
    }
    if (!window.matchMedia) {
      saveColorScheme(defaultScheme);
      return defaultScheme;
    }
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      saveColorScheme("dark");
      return "dark";
    }
    saveColorScheme("light");
    return "light";
  } catch {
    return defaultScheme;
  }
};

export * from "./colors";
