import { ColorsObject, MultiThemeProviderProps, ThemeObject } from "@kami-ui/react-theme-common";
import {
  defaultSpacing as wattleStyxSpacing,
  defaultTypography as wattleStyxTypography,
  defaultCommonColors,
} from "./default";

export const wattleStyxLightColors: ColorsObject = {
  text: ["#f6f6d5", "#ededab", "#e3e382", "#dada58", "#d1d12e", "#a7a725", "#7d7d1c", "#545412", "#2a2a09"],
  background: ["#f6f6d5", "#ededab", "#e3e382", "#dada58", "#d1d12e", "#a7a725", "#7d7d1c", "#545412", "#2a2a09"],
  primary: ["#f6f6d5", "#edeeaa", "#e3e580", "#dadc56", "#d1d42b", "#a7a923", "#7d7f1a", "#545511", "#2a2a09"],
  secondary: ["#e4f6d5", "#caedab", "#afe481", "#95db57", "#7ad22d", "#62a824", "#497e1b", "#315412", "#182a09"],
  accent: ["#dcf6d5", "#b9edab", "#96e481", "#73db57", "#51d22d", "#40a824", "#307e1b", "#205412", "#102a09"],
  complementary: ["#d5d5f6", "#abaaee", "#8280e5", "#5856dc", "#2e2bd4", "#2523a9", "#1c1a7f", "#121155", "#09092a"],
  tetradic: ["#d5f6e5", "#aaeecd", "#80e5b4", "#56dc9b", "#2bd482", "#23a968", "#1a7f4e", "#115534", "#092a19"],
  triadic: ["#d5f6f6", "#aaedee", "#80e3e5", "#56dadc", "#2bd1d4", "#23a7a9", "#1a7d7f", "#115455", "#092a2a"],
  analogous: ["#f6e5d5", "#eecdaa", "#e5b480", "#dc9b56", "#d4822b", "#a96823", "#7f4e1a", "#553411", "#2a1909"],
  ...defaultCommonColors,
};

export const wattleStyxDarkColors: ColorsObject = {
  text: ["#29290a", "#525214", "#7b7b1e", "#a4a428", "#cdcd32", "#d7d75b", "#e1e184", "#ebebad", "#f5f5d6"],
  background: ["#29290a", "#525214", "#7a7a1f", "#a3a329", "#cccc33", "#d6d65c", "#e0e085", "#ebebad", "#f5f5d6"],
  primary: ["#2a2a09", "#545511", "#7d7f1a", "#a7a923", "#d1d42b", "#dadc56", "#e3e580", "#edeeaa", "#f6f6d5"],
  secondary: ["#182a09", "#315412", "#497e1b", "#62a824", "#7ad22d", "#95db57", "#afe481", "#caedab", "#e4f6d5"],
  accent: ["#102a09", "#205412", "#307e1b", "#40a824", "#51d22d", "#73db57", "#96e481", "#b9edab", "#dcf6d5"],
  complementary: ["#09092a", "#121155", "#1c1a7f", "#2523a9", "#2e2bd4", "#5856dc", "#8280e5", "#abaaee", "#d5d5f6"],
  tetradic: ["#092a19", "#115534", "#1a7f4e", "#23a968", "#2bd482", "#56dc9b", "#80e5b4", "#aaeecd", "#d5f6e5"],
  triadic: ["#092a2a", "#115455", "#1a7d7f", "#23a7a9", "#2bd1d4", "#56dadc", "#80e3e5", "#aaedee", "#d5f6f6"],
  analogous: ["#2a1909", "#553411", "#7f4e1a", "#a96823", "#d4822b", "#dc9b56", "#e5b480", "#eecdaa", "#f6e5d5"],
  ...defaultCommonColors,
};

export const wattleStyxLightTheme: ThemeObject = {
  colors: wattleStyxLightColors,
  spacing: wattleStyxSpacing,
  typography: wattleStyxTypography,
};

export const wattleStyxDarkTheme: ThemeObject = {
  colors: wattleStyxDarkColors,
  spacing: wattleStyxSpacing,
  typography: wattleStyxTypography,
};

export { wattleStyxSpacing, wattleStyxTypography };

export const wattleStyxTheme: MultiThemeProviderProps["themes"] = [
  {
    name: "dark",
    theme: wattleStyxDarkTheme,
  },
  {
    name: "light",
    theme: wattleStyxLightTheme,
  },
];
