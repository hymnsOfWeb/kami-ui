import { ColorsObject, MultiThemeProviderProps, ThemeObject } from "@kami-ui/types";
import {
  defaultSpacing as purpleMountainsMajestyCybeleSpacing,
  defaultTypography as purpleMountainsMajestyCybeleTypography,
  defaultCommonColors,
} from "./default";

export const purpleMountainsMajestyCybeleLightColors: ColorsObject = {
  text: ["#e7deed", "#cfbcdc", "#b79bca", "#9f79b9", "#8758a7", "#6c4686", "#513564", "#362343", "#1b1221"],
  background: ["#e8dfec", "#d1beda", "#b99ec7", "#a27db5", "#8b5da2", "#6f4a82", "#533861", "#382541", "#1c1320"],
  primary: ["#e6ddee", "#ccbbdd", "#b299cc", "#9977bb", "#7f55aa", "#664488", "#4c3366", "#332244", "#191122"],
  secondary: ["#e5eedd", "#cbdcbc", "#b1cb9a", "#97ba78", "#7da857", "#648745", "#4b6534", "#324323", "#192211"],
  accent: ["#ddeee7", "#bcdccf", "#9acbb7", "#78baa0", "#57a888", "#45876d", "#346551", "#234336", "#11221b"],
  complementary: ["#e5eedd", "#ccddbb", "#b3cc99", "#99bb77", "#7faa55", "#668844", "#4d6633", "#334422", "#1a2211"],
  tetradic: ["#eededd", "#ddbbbb", "#cc999a", "#bb7777", "#aa5555", "#884444", "#663334", "#442222", "#221112"],
  triadic: ["#eee6dd", "#ddccbb", "#ccb299", "#bb9977", "#aa7f55", "#886644", "#664c33", "#443322", "#221911"],
  analogous: ["#deddee", "#bbbbdd", "#999acc", "#7777bb", "#5555aa", "#444488", "#333466", "#222244", "#111222"],
  ...defaultCommonColors,
};

export const purpleMountainsMajestyCybeleDarkColors: ColorsObject = {
  text: ["#1c1221", "#382442", "#543663", "#704884", "#8c5ba4", "#a37bb7", "#ba9cc9", "#d1bddb", "#e8deed"],
  background: ["#1f141f", "#3d293d", "#5c3d5c", "#7a527a", "#996699", "#ad85ad", "#c2a3c2", "#d6c2d6", "#ebe0eb"],
  primary: ["#191122", "#332244", "#4c3366", "#664488", "#7f55aa", "#9977bb", "#b299cc", "#ccbbdd", "#e6ddee"],
  secondary: ["#192112", "#324323", "#4b6435", "#648646", "#7da758", "#97b979", "#b1ca9b", "#cbdcbc", "#e5edde"],
  accent: ["#11221b", "#234336", "#346551", "#45876d", "#57a888", "#78baa0", "#9acbb7", "#bcdccf", "#ddeee7"],
  complementary: ["#1a2211", "#334422", "#4d6633", "#668844", "#7faa55", "#99bb77", "#b3cc99", "#ccddbb", "#e5eedd"],
  tetradic: ["#221112", "#442222", "#663334", "#884444", "#aa5555", "#bb7777", "#cc999a", "#ddbbbb", "#eededd"],
  triadic: ["#221911", "#443322", "#664c33", "#886644", "#aa7f55", "#bb9977", "#ccb299", "#ddccbb", "#eee6dd"],
  analogous: ["#111222", "#222244", "#333466", "#444488", "#5555aa", "#7777bb", "#999acc", "#bbbbdd", "#deddee"],
  ...defaultCommonColors,
};

export const purpleMountainsMajestyCybeleLightTheme: ThemeObject = {
  colors: purpleMountainsMajestyCybeleLightColors,
  spacing: purpleMountainsMajestyCybeleSpacing,
  typography: purpleMountainsMajestyCybeleTypography,
};

export const purpleMountainsMajestyCybeleDarkTheme: ThemeObject = {
  colors: purpleMountainsMajestyCybeleDarkColors,
  spacing: purpleMountainsMajestyCybeleSpacing,
  typography: purpleMountainsMajestyCybeleTypography,
};

export { purpleMountainsMajestyCybeleSpacing, purpleMountainsMajestyCybeleTypography };

export const purpleMountainsMajestyCybeleTheme: MultiThemeProviderProps["themes"] = [
  {
    name: "dark",
    theme: purpleMountainsMajestyCybeleDarkTheme,
  },
  {
    name: "light",
    theme: purpleMountainsMajestyCybeleLightTheme,
  },
];
