import { ColorsObject, MultiThemeProviderProps, ThemeObject } from "@kami-ui/react-theme-common";
import {
  defaultSpacing as royalBlueLelantosSpacing,
  defaultTypography as royalBlueLelantosTypography,
  defaultCommonColors,
} from "./default";

export const royalBlueLelantosLightColors: ColorsObject = {
  text: ["#d8d0fb", "#b1a1f7", "#8971f4", "#6242f0", "#3b13ec", "#2f0fbd", "#230b8e", "#18085e", "#0c042f"],
  background: ["#d9d2f9", "#b3a6f2", "#8c79ec", "#664ce6", "#4020df", "#3319b3", "#261386", "#190d59", "#0d062d"],
  primary: ["#d7d0fb", "#afa0f8", "#8771f4", "#5f41f1", "#3612ed", "#2c0ebe", "#210b8e", "#16075f", "#0b042f"],
  secondary: ["#fbf1d0", "#f8e3a0", "#f4d671", "#f1c841", "#edba12", "#be950e", "#8e700b", "#5f4a07", "#2f2504"],
  accent: ["#d9fbd0", "#b3f8a0", "#8df471", "#67f141", "#41ed12", "#34be0e", "#278e0b", "#1a5f07", "#0d2f04"],
  complementary: ["#f4fbd0", "#e9f8a0", "#def471", "#d4f141", "#c8ed12", "#a1be0e", "#788e0b", "#505f07", "#282f04"],
  tetradic: ["#fbd0de", "#f8a0bd", "#f4719d", "#f1417c", "#ed125b", "#be0e49", "#8e0b37", "#5f0724", "#2f0412"],
  triadic: ["#fbd7d0", "#f8afa0", "#f48771", "#f15e41", "#ed3712", "#be2b0e", "#8e210b", "#5f1607", "#2f0b04"],
  analogous: ["#d0defb", "#a0bdf8", "#719df4", "#417cf1", "#125bed", "#0e49be", "#0b378e", "#07245f", "#04122f"],
  ...defaultCommonColors,
};

export const royalBlueLelantosDarkColors: ColorsObject = {
  text: ["#0c042f", "#19085e", "#250b8e", "#320fbd", "#3e13ec", "#6542f0", "#8b71f4", "#b2a1f7", "#d8d0fb"],
  background: ["#0f052e", "#1f0a5c", "#2e0f8a", "#3d14b8", "#4d19e6", "#7047eb", "#9475f0", "#b8a3f5", "#dbd1fa"],
  primary: ["#0b042f", "#16075f", "#210b8e", "#2c0ebe", "#3612ed", "#5f41f1", "#8771f4", "#afa0f8", "#d7d0fb"],
  secondary: ["#2f2504", "#5f4a07", "#8e700b", "#be950e", "#edba12", "#f1c841", "#f4d671", "#f8e3a0", "#fbf1d0"],
  accent: ["#0d2f04", "#1a5f07", "#278e0b", "#34be0e", "#41ed12", "#67f141", "#8df471", "#b3f8a0", "#d9fbd0"],
  complementary: ["#282f04", "#505f07", "#788e0b", "#a1be0e", "#c8ed12", "#d4f141", "#def471", "#e9f8a0", "#f4fbd0"],
  tetradic: ["#2f0412", "#5f0724", "#8e0b37", "#be0e49", "#ed125b", "#f1417c", "#f4719d", "#f8a0bd", "#fbd0de"],
  triadic: ["#2f0b04", "#5f1607", "#8e210b", "#be2b0e", "#ed3712", "#f15e41", "#f48771", "#f8afa0", "#fbd7d0"],
  analogous: ["#04122f", "#07245f", "#0b378e", "#0e49be", "#125bed", "#417cf1", "#719df4", "#a0bdf8", "#d0defb"],
  ...defaultCommonColors,
};

export const royalBlueLelantosLightTheme: ThemeObject = {
  colors: royalBlueLelantosLightColors,
  spacing: royalBlueLelantosSpacing,
  typography: royalBlueLelantosTypography,
};

export const royalBlueLelantosDarkTheme: ThemeObject = {
  colors: royalBlueLelantosDarkColors,
  spacing: royalBlueLelantosSpacing,
  typography: royalBlueLelantosTypography,
};

export { royalBlueLelantosSpacing, royalBlueLelantosTypography };

export const royalBlueLelantosTheme: MultiThemeProviderProps["themes"] = [
  {
    name: "dark",
    theme: royalBlueLelantosDarkTheme,
  },
  {
    name: "light",
    theme: royalBlueLelantosLightTheme,
  },
];
