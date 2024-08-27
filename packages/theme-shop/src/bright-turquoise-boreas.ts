import { ColorsObject, MultiThemeProviderProps, ThemeObject } from "@kami-ui/types";
import {
  defaultSpacing as brightTurquoiseBoreasSpacing,
  defaultTypography as brightTurquoiseBoreasTypography,
  defaultCommonColors,
} from "./default";

export const brightTurquoiseBoreasLightColors: ColorsObject = {
  text: ["#ccfffd", "#99fffc", "#66fffa", "#33fff8", "#00fff7", "#00ccc5", "#009994", "#006663", "#003331"],
  background: ["#ccfffb", "#99fff7", "#66fff2", "#33ffee", "#00ffea", "#00ccbb", "#00998c", "#00665e", "#00332f"],
  primary: ["#cdfef8", "#9afef1", "#68fde9", "#35fde2", "#03fcdb", "#02caaf", "#029783", "#016558", "#01322c"],
  secondary: ["#cdd2fe", "#9aa4fe", "#6877fd", "#3549fd", "#031cfc", "#0216ca", "#021197", "#010b65", "#010632"],
  accent: ["#d7cdfe", "#b09afe", "#8868fd", "#6035fd", "#3903fc", "#2d02ca", "#220297", "#170165", "#0b0132"],
  complementary: ["#fecdd3", "#fe9aa7", "#fd687c", "#fd3550", "#fc0324", "#ca021d", "#970216", "#65010e", "#320107"],
  tetradic: ["#e0cdfe", "#bf9afe", "#9f68fd", "#7e35fd", "#5e03fc", "#4b02ca", "#390297", "#260165", "#140132"],
  triadic: ["#f8cdfe", "#f19afe", "#e968fd", "#e235fd", "#db03fc", "#af02ca", "#830297", "#580165", "#2c0132"],
  analogous: ["#cdfee0", "#9afebf", "#68fd9f", "#35fd7e", "#03fc5e", "#02ca4b", "#029739", "#016526", "#013214"],
  ...defaultCommonColors,
};

export const brightTurquoiseBoreasDarkColors: ColorsObject = {
  text: ["#003331", "#006663", "#009994", "#00ccc5", "#00fff7", "#33fff8", "#66fffa", "#99fffc", "#ccfffd"],
  background: ["#00332e", "#00665c", "#00998a", "#00ccb8", "#00ffe6", "#33ffeb", "#66fff0", "#99fff5", "#ccfffa"],
  primary: ["#01322c", "#016558", "#029783", "#02caaf", "#03fcdb", "#35fde2", "#68fde9", "#9afef1", "#cdfef8"],
  secondary: ["#010632", "#010b65", "#021197", "#0216ca", "#031cfc", "#3549fd", "#6877fd", "#9aa4fe", "#cdd2fe"],
  accent: ["#0b0132", "#170165", "#220297", "#2d02ca", "#3903fc", "#6035fd", "#8868fd", "#b09afe", "#d7cdfe"],
  complementary: ["#320107", "#65010e", "#970216", "#ca021d", "#fc0324", "#fd3550", "#fd687c", "#fe9aa7", "#fecdd3"],
  tetradic: ["#140132", "#260165", "#390297", "#4b02ca", "#5e03fc", "#7e35fd", "#9f68fd", "#bf9afe", "#e0cdfe"],
  triadic: ["#2c0132", "#580165", "#830297", "#af02ca", "#db03fc", "#e235fd", "#e968fd", "#f19afe", "#f8cdfe"],
  analogous: ["#013214", "#016526", "#029739", "#02ca4b", "#03fc5e", "#35fd7e", "#68fd9f", "#9afebf", "#cdfee0"],
  ...defaultCommonColors,
};

export const brightTurquoiseBoreasLightTheme: ThemeObject = {
  colors: brightTurquoiseBoreasLightColors,
  spacing: brightTurquoiseBoreasSpacing,
  typography: brightTurquoiseBoreasTypography,
};

export const brightTurquoiseBoreasDarkTheme: ThemeObject = {
  colors: brightTurquoiseBoreasDarkColors,
  spacing: brightTurquoiseBoreasSpacing,
  typography: brightTurquoiseBoreasTypography,
};

export { brightTurquoiseBoreasSpacing, brightTurquoiseBoreasTypography };

export const brightTurquoiseBoreasTheme: MultiThemeProviderProps["themes"] = [
  {
    name: "dark",
    theme: brightTurquoiseBoreasDarkTheme,
  },
  {
    name: "light",
    theme: brightTurquoiseBoreasLightTheme,
  },
];
