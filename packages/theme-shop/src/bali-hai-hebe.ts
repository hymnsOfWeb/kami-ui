import { ColorsObject, MultiThemeProviderProps, ThemeObject } from "@kami-ui/react-theme-common";
import {
  defaultSpacing as baliHaiHebeSpacing,
  defaultTypography as baliHaiHebeTypography,
  defaultCommonColors,
} from "./default";

export const baliHaiHebeLightColors: ColorsObject = {
  text: ["#dfe7ec", "#c0ced8", "#a0b6c5", "#819eb1", "#61869e", "#4e6b7e", "#3a505f", "#27353f", "#131b20"],
  background: ["#dfe6ec", "#bfccd9", "#9fb2c6", "#8099b3", "#607f9f", "#4d6680", "#394c60", "#263340", "#131920"],
  primary: ["#dfe7ec", "#bfcfd9", "#9fb6c6", "#809eb3", "#60869f", "#4d6b80", "#395060", "#263640", "#131b20"],
  secondary: ["#ece4df", "#d9cabf", "#c6af9f", "#b4957e", "#a17a5e", "#81624b", "#604939", "#403126", "#201813"],
  accent: ["#e6ecdf", "#ccd9bf", "#b3c69f", "#9ab47e", "#81a15e", "#67814b", "#4d6039", "#334026", "#1a2013"],
  complementary: ["#ece4df", "#d9c9bf", "#c6af9f", "#b39580", "#9f7960", "#80624d", "#604939", "#403026", "#201813"],
  tetradic: ["#eadfec", "#d6bfd9", "#c39fc6", "#af80b3", "#99609f", "#7c4d80", "#5d3960", "#3d2640", "#1e1320"],
  triadic: ["#ecdfe7", "#d9bfcf", "#c69fb6", "#b3809e", "#9f6086", "#804d6b", "#603950", "#402636", "#20131b"],
  analogous: ["#dfecea", "#bfd9d6", "#9fc6c3", "#80b3af", "#609f99", "#4d807c", "#39605d", "#26403d", "#13201e"],
  ...defaultCommonColors,
};

export const baliHaiHebeDarkColors: ColorsObject = {
  text: ["#131b20", "#27353f", "#3a505f", "#4e6b7e", "#61869e", "#819eb1", "#a0b6c5", "#c0ced8", "#dfe7ec"],
  background: ["#131920", "#263340", "#394c60", "#4d6680", "#607f9f", "#8099b3", "#9fb2c6", "#bfccd9", "#dfe6ec"],
  primary: ["#131b20", "#263640", "#395060", "#4d6b80", "#60869f", "#809eb3", "#9fb6c6", "#bfcfd9", "#dfe7ec"],
  secondary: ["#201813", "#403126", "#604939", "#81624b", "#a17a5e", "#b4957e", "#c6af9f", "#d9cabf", "#ece4df"],
  accent: ["#1a2013", "#334026", "#4d6039", "#67814b", "#81a15e", "#9ab47e", "#b3c69f", "#ccd9bf", "#e6ecdf"],
  complementary: ["#201813", "#403026", "#604939", "#80624d", "#9f7960", "#b39580", "#c6af9f", "#d9c9bf", "#ece4df"],
  tetradic: ["#1e1320", "#3d2640", "#5d3960", "#7c4d80", "#99609f", "#af80b3", "#c39fc6", "#d6bfd9", "#eadfec"],
  triadic: ["#20131b", "#402636", "#603950", "#804d6b", "#9f6086", "#b3809e", "#c69fb6", "#d9bfcf", "#ecdfe7"],
  analogous: ["#13201e", "#26403d", "#39605d", "#4d807c", "#609f99", "#80b3af", "#9fc6c3", "#bfd9d6", "#dfecea"],
  ...defaultCommonColors,
};

export const baliHaiHebeLightTheme: ThemeObject = {
  colors: baliHaiHebeLightColors,
  spacing: baliHaiHebeSpacing,
  typography: baliHaiHebeTypography,
};

export const baliHaiHebeDarkTheme: ThemeObject = {
  colors: baliHaiHebeDarkColors,
  spacing: baliHaiHebeSpacing,
  typography: baliHaiHebeTypography,
};

export { baliHaiHebeSpacing, baliHaiHebeTypography };

export const baliHaiHebeTheme: MultiThemeProviderProps["themes"] = [
  {
    name: "dark",
    theme: baliHaiHebeDarkTheme,
  },
  {
    name: "light",
    theme: baliHaiHebeLightTheme,
  },
];
