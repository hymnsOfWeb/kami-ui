import { ColorsObject, MultiThemeProviderProps, ThemeObject } from "@kami-ui/react-theme-common";
import {
  defaultSpacing as royalBlueRheaSpacing,
  defaultTypography as royalBlueRheaTypography,
  defaultCommonColors,
} from "./default";

export const royalBlueRheaLightColors: ColorsObject = {
  text: ["#d4daf7", "#aab4ee", "#7f8fe6", "#5569dd", "#2a44d5", "#2236aa", "#192980", "#111b55", "#080e2b"],
  background: ["#d6dbf5", "#adb8eb", "#8594e0", "#5c70d6", "#334dcc", "#293da3", "#1f2e7a", "#141f52", "#0a0f29"],
  primary: ["#d5daf6", "#abb4ed", "#828fe3", "#5869da", "#2e44d1", "#2536a7", "#1c297d", "#121b54", "#090e2a"],
  secondary: ["#f6d5e9", "#edabd4", "#e481be", "#db57a8", "#d22d93", "#a82475", "#7e1b58", "#54123b", "#2a091d"],
  accent: ["#f6d5dd", "#edabbb", "#e4819a", "#db5778", "#d22d56", "#a82445", "#7e1b34", "#541222", "#2a0911"],
  complementary: ["#f6f1d5", "#ede4ab", "#e3d682", "#dac958", "#d1bb2e", "#a79625", "#7d701c", "#544b12", "#2a2509"],
  tetradic: ["#f6d5ea", "#edabd5", "#e382bf", "#da58aa", "#d12e95", "#a72577", "#7d1c59", "#54123c", "#2a091e"],
  triadic: ["#f6d5da", "#edabb4", "#e3828f", "#da5869", "#d12e44", "#a72536", "#7d1c29", "#54121b", "#2a090e"],
  analogous: ["#d5eaf6", "#abd5ed", "#82bfe3", "#58aada", "#2e95d1", "#2577a7", "#1c597d", "#123c54", "#091e2a"],
  ...defaultCommonColors,
};

export const royalBlueRheaDarkColors: ColorsObject = {
  text: ["#080f2b", "#101d56", "#182c81", "#213aab", "#2949d6", "#546dde", "#7e92e7", "#a9b6ef", "#d4dbf7"],
  background: ["#0a0f29", "#141f52", "#1f2e7a", "#293da3", "#334dcc", "#5c70d6", "#8594e0", "#adb8eb", "#d6dbf5"],
  primary: ["#090e2a", "#121b54", "#1c297d", "#2536a7", "#2e44d1", "#5869da", "#828fe3", "#abb4ed", "#d5daf6"],
  secondary: ["#2a091d", "#54123b", "#7e1b58", "#a82475", "#d22d93", "#db57a8", "#e481be", "#edabd4", "#f6d5e9"],
  accent: ["#2a0911", "#541222", "#7e1b34", "#a82445", "#d22d56", "#db5778", "#e4819a", "#edabbb", "#f6d5dd"],
  complementary: ["#2a2509", "#544b12", "#7d701c", "#a79625", "#d1bb2e", "#dac958", "#e3d682", "#ede4ab", "#f6f1d5"],
  tetradic: ["#2a091e", "#54123c", "#7d1c59", "#a72577", "#d12e95", "#da58aa", "#e382bf", "#edabd5", "#f6d5ea"],
  triadic: ["#2a090e", "#54121b", "#7d1c29", "#a72536", "#d12e44", "#da5869", "#e3828f", "#edabb4", "#f6d5da"],
  analogous: ["#091e2a", "#123c54", "#1c597d", "#2577a7", "#2e95d1", "#58aada", "#82bfe3", "#abd5ed", "#d5eaf6"],
  ...defaultCommonColors,
};

export const royalBlueRheaLightTheme: ThemeObject = {
  colors: royalBlueRheaLightColors,
  spacing: royalBlueRheaSpacing,
  typography: royalBlueRheaTypography,
};

export const royalBlueRheaDarkTheme: ThemeObject = {
  colors: royalBlueRheaDarkColors,
  spacing: royalBlueRheaSpacing,
  typography: royalBlueRheaTypography,
};

export { royalBlueRheaSpacing, royalBlueRheaTypography };

export const royalBlueRheaTheme: MultiThemeProviderProps["themes"] = [
  {
    name: "dark",
    theme: royalBlueRheaDarkTheme,
  },
  {
    name: "light",
    theme: royalBlueRheaLightTheme,
  },
];
