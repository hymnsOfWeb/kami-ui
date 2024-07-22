import { MultiThemeProviderProps } from "./types";

export const stringTrimmer = (str: string) => str.trim().replace(/\s/gm, "-");

export const themeValidator = (themes: MultiThemeProviderProps["themes"]) => {
  const checkedNames: string[] = [];
  const colorKeys: string[] = [];
  for (const {
    name,
    theme: { colors },
  } of themes) {
    type ColorKey = keyof typeof colors;
    const currColorKeys = JSON.stringify(Object.keys(colors).sort());
    const keyCheck = colorKeys.length === 0 ? colorKeys.push(currColorKeys) : colorKeys[0] !== currColorKeys;
    if (keyCheck === true) {
      throw new Error(`Inavlid theme config: Themes have different color keys;`);
    }
    if (checkedNames.includes(name)) {
      throw new Error(`Theme name ${name} is duplicated`);
    }
    checkedNames.push(name);
    for (const color in colors) {
      const length = colors[color as ColorKey]?.length;
      for (const checked of checkedNames) {
        const checkedLen = themes.find(({ name: checkedName }) => checkedName === checked)?.theme?.colors[
          color as ColorKey
        ]?.length;
        if (checkedLen !== length) {
          throw new Error(`Inavlid theme config: Themes have different lengths of color ${color};`);
        }
      }
    }
  }
};
