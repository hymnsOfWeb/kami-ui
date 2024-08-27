import { ColorsObject, MultiThemeProviderProps, ThemeObject } from "@kami-ui/types";
import {
  defaultSpacing as turquoiseBlueThemisSpacing,
  defaultTypography as turquoiseBlueThemisTypography,
  defaultCommonColors,
} from "./default";

export const turquoiseBlueThemisLightColors: ColorsObject = {
  text: ["#d0fbf5", "#a1f7eb", "#72f3e2", "#43efd8", "#14ebce", "#10bca5", "#0c8d7c", "#085e52", "#042f29"],
  background: ["#d2f9f3", "#a4f4e8", "#77eedc", "#49e9d1", "#1ce3c5", "#16b69e", "#118876", "#0b5b4f", "#062d27"],
  primary: ["#d0fbf6", "#a0f8ec", "#71f4e3", "#41f1d9", "#12edd0", "#0ebea6", "#0b8e7d", "#075f53", "#042f2a"],
  secondary: ["#d5d0fb", "#aba1f7", "#8171f4", "#5742f0", "#2c13ec", "#240fbd", "#1b0b8e", "#12085e", "#09042f"],
  accent: ["#e5d0fb", "#cca0f8", "#b271f4", "#9941f1", "#7f12ed", "#660ebe", "#4c0b8e", "#33075f", "#19042f"],
  complementary: ["#fbd0d5", "#f8a0ac", "#f47182", "#f14158", "#ed122f", "#be0e25", "#8e0b1c", "#5f0713", "#2f0409"],
  tetradic: ["#e0d0fb", "#c0a0f8", "#a171f4", "#8241f1", "#6212ed", "#4f0ebe", "#3b0b8e", "#27075f", "#14042f"],
  triadic: ["#f6d0fb", "#eca0f8", "#e371f4", "#da41f1", "#d012ed", "#a70ebe", "#7d0b8e", "#53075f", "#2a042f"],
  analogous: ["#d0fbe0", "#a0f8c0", "#71f4a1", "#41f182", "#12ed62", "#0ebe4f", "#0b8e3b", "#075f27", "#042f14"],
  ...defaultCommonColors,
};

export const turquoiseBlueThemisDarkColors: ColorsObject = {
  text: ["#042f29", "#095d52", "#0d8c7b", "#11bba4", "#16e9cd", "#44eed7", "#73f2e1", "#a2f6eb", "#d0fbf5"],
  background: ["#052e29", "#0a5c52", "#0f8a7b", "#14b8a5", "#19e6ce", "#47ebd8", "#75f0e1", "#a3f5eb", "#d1faf5"],
  primary: ["#042f2a", "#075f53", "#0b8e7d", "#0ebea6", "#12edd0", "#41f1d9", "#71f4e3", "#a0f8ec", "#d0fbf6"],
  secondary: ["#09042f", "#11075f", "#1a0b8e", "#230ebe", "#2b12ed", "#5641f1", "#8071f4", "#aaa0f8", "#d5d0fb"],
  accent: ["#19042f", "#33075f", "#4c0b8e", "#660ebe", "#7f12ed", "#9941f1", "#b271f4", "#cca0f8", "#e5d0fb"],
  complementary: ["#2f0409", "#5f0713", "#8e0b1c", "#be0e25", "#ed122f", "#f14158", "#f47182", "#f8a0ac", "#fbd0d5"],
  tetradic: ["#14042f", "#27075f", "#3b0b8e", "#4f0ebe", "#6212ed", "#8241f1", "#a171f4", "#c0a0f8", "#e0d0fb"],
  triadic: ["#2a042f", "#53075f", "#7d0b8e", "#a70ebe", "#d012ed", "#da41f1", "#e371f4", "#eca0f8", "#f6d0fb"],
  analogous: ["#042f14", "#075f27", "#0b8e3b", "#0ebe4f", "#12ed62", "#41f182", "#71f4a1", "#a0f8c0", "#d0fbe0"],
  ...defaultCommonColors,
};

export const turquoiseBlueThemisLightTheme: ThemeObject = {
  colors: turquoiseBlueThemisLightColors,
  spacing: turquoiseBlueThemisSpacing,
  typography: turquoiseBlueThemisTypography,
};

export const turquoiseBlueThemisDarkTheme: ThemeObject = {
  colors: turquoiseBlueThemisDarkColors,
  spacing: turquoiseBlueThemisSpacing,
  typography: turquoiseBlueThemisTypography,
};

export { turquoiseBlueThemisSpacing, turquoiseBlueThemisTypography };

export const turquoiseBlueThemisTheme: MultiThemeProviderProps["themes"] = [
  {
    name: "dark",
    theme: turquoiseBlueThemisDarkTheme,
  },
  {
    name: "light",
    theme: turquoiseBlueThemisLightTheme,
  },
];
