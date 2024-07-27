import { ColorsObject, MultiThemeProviderProps, ThemeObject } from "@kami-ui/react-theme-common";
import {
  defaultSpacing as wattleTycheSpacing,
  defaultTypography as wattleTycheTypography,
  defaultCommonColors,
} from "./default";

export const wattleTycheLightColors: ColorsObject = {
  text: ["#f7f5d4", "#f0eba8", "#e8e17d", "#e0d752", "#d9cd26", "#ada41f", "#827b17", "#57520f", "#2b2908"],
  background: ["#f7f7d4", "#efefa9", "#e7e77e", "#dfdf53", "#d7d728", "#acac20", "#818118", "#565610", "#2b2b08"],
  primary: ["#f7f7d4", "#eff0a8", "#e6e87d", "#dee052", "#d6d926", "#abad1f", "#808217", "#56570f", "#2b2b08"],
  secondary: ["#dbf7d4", "#b7f0a8", "#92e87d", "#6ee052", "#4ad926", "#3bad1f", "#2c8217", "#1e570f", "#0f2b08"],
  accent: ["#d4f7d9", "#a8f0b3", "#7de88d", "#52e067", "#26d941", "#1fad34", "#178227", "#0f571a", "#082b0d"],
  complementary: ["#d4d4f7", "#a9a8f0", "#7f7de8", "#5452e0", "#2926d9", "#211fad", "#191782", "#100f57", "#08082b"],
  tetradic: ["#d4f7e6", "#a8f0cd", "#7de8b4", "#52e09b", "#26d982", "#1fad68", "#17824e", "#0f5734", "#082b19"],
  triadic: ["#d4f7f7", "#a8eff0", "#7de6e8", "#52dee0", "#26d6d9", "#1fabad", "#178082", "#0f5657", "#082b2b"],
  analogous: ["#f7e6d4", "#f0cda8", "#e8b47d", "#e09b52", "#d98226", "#ad681f", "#824e17", "#57340f", "#2b1908"],
  ...defaultCommonColors,
};

export const wattleTycheDarkColors: ColorsObject = {
  text: ["#2b2908", "#57520f", "#827b17", "#ada41f", "#d9cd26", "#e0d752", "#e8e17d", "#f0eba8", "#f7f5d4"],
  background: ["#2c2c07", "#58580e", "#848415", "#b0b01c", "#dddd22", "#e3e34f", "#eaea7b", "#f1f1a7", "#f8f8d3"],
  primary: ["#2b2b08", "#56570f", "#808217", "#abad1f", "#d6d926", "#dee052", "#e6e87d", "#eff0a8", "#f7f7d4"],
  secondary: ["#0f2b08", "#1e570f", "#2c8217", "#3bad1f", "#4ad926", "#6ee052", "#92e87d", "#b7f0a8", "#dbf7d4"],
  accent: ["#082b0d", "#0f571a", "#178227", "#1fad34", "#26d941", "#52e067", "#7de88d", "#a8f0b3", "#d4f7d9"],
  complementary: ["#08082b", "#100f57", "#191782", "#211fad", "#2926d9", "#5452e0", "#7f7de8", "#a9a8f0", "#d4d4f7"],
  tetradic: ["#082b19", "#0f5734", "#17824e", "#1fad68", "#26d982", "#52e09b", "#7de8b4", "#a8f0cd", "#d4f7e6"],
  triadic: ["#082b2b", "#0f5657", "#178082", "#1fabad", "#26d6d9", "#52dee0", "#7de6e8", "#a8eff0", "#d4f7f7"],
  analogous: ["#2b1908", "#57340f", "#824e17", "#ad681f", "#d98226", "#e09b52", "#e8b47d", "#f0cda8", "#f7e6d4"],
  ...defaultCommonColors,
};

export const wattleTycheLightTheme: ThemeObject = {
  colors: wattleTycheLightColors,
  spacing: wattleTycheSpacing,
  typography: wattleTycheTypography,
};

export const wattleTycheDarkTheme: ThemeObject = {
  colors: wattleTycheDarkColors,
  spacing: wattleTycheSpacing,
  typography: wattleTycheTypography,
};

export { wattleTycheSpacing, wattleTycheTypography };

export const wattleTycheTheme: MultiThemeProviderProps["themes"] = [
  {
    name: "dark",
    theme: wattleTycheDarkTheme,
  },
  {
    name: "light",
    theme: wattleTycheLightTheme,
  },
];
