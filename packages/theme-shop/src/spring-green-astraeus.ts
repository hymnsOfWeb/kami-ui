import { ColorsObject, MultiThemeProviderProps, ThemeObject } from "@kami-ui/types";
import {
  defaultSpacing as springGreenAstraeusSpacing,
  defaultTypography as springGreenAstraeusTypography,
  defaultCommonColors,
} from "./default";

export const springGreenAstraeusLightColors: ColorsObject = {
  text: ["#cdfef0", "#9cfce1", "#6afbd2", "#38fac3", "#06f9b4", "#05c790", "#04956c", "#036348", "#013224"],
  background: ["#ccfff0", "#99ffe0", "#66ffd1", "#33ffc2", "#00ffb3", "#00cc8f", "#00996b", "#006647", "#003324"],
  primary: ["#cdfeeb", "#9bfdd7", "#69fcc4", "#37fbb0", "#05fa9c", "#04c87d", "#03965e", "#02643e", "#01321f"],
  secondary: ["#cddefe", "#9bbdfd", "#689cfd", "#367bfc", "#045afb", "#0348c9", "#023697", "#022464", "#011232"],
  accent: ["#cecdfe", "#9d9bfd", "#6c69fc", "#3a37fb", "#0905fa", "#0704c8", "#060396", "#040264", "#020132"],
  complementary: ["#fecde0", "#fd9bc1", "#fc69a1", "#fb3782", "#fa0563", "#c8044f", "#96033b", "#640228", "#320114"],
  tetradic: ["#d3cdfe", "#a69bfd", "#7a69fc", "#4e37fb", "#2205fa", "#1b04c8", "#140396", "#0d0264", "#070132"],
  triadic: ["#ebcdfe", "#d79bfd", "#c469fc", "#b037fb", "#9c05fa", "#7d04c8", "#5e0396", "#3e0264", "#1f0132"],
  analogous: ["#cdfed3", "#9bfda6", "#69fc7a", "#37fb4e", "#05fa22", "#04c81b", "#039614", "#02640d", "#013207"],
  ...defaultCommonColors,
};

export const springGreenAstraeusDarkColors: ColorsObject = {
  text: ["#023123", "#036346", "#059469", "#06c68c", "#08f7af", "#39f9bf", "#6bfacf", "#9cfcdf", "#cefdef"],
  background: ["#003325", "#00664b", "#009970", "#00cc96", "#00ffbb", "#33ffc9", "#66ffd6", "#99ffe4", "#ccfff1"],
  primary: ["#01321f", "#02643e", "#03965e", "#04c87d", "#05fa9c", "#37fbb0", "#69fcc4", "#9bfdd7", "#cdfeeb"],
  secondary: ["#011232", "#022464", "#023697", "#0348c9", "#045afb", "#367bfc", "#689cfd", "#9bbdfd", "#cddefe"],
  accent: ["#020132", "#040264", "#060396", "#0704c8", "#0905fa", "#3a37fb", "#6c69fc", "#9d9bfd", "#cecdfe"],
  complementary: ["#320114", "#640228", "#96033b", "#c8044f", "#fa0563", "#fb3782", "#fc69a1", "#fd9bc1", "#fecde0"],
  tetradic: ["#070132", "#0d0264", "#140396", "#1b04c8", "#2205fa", "#4e37fb", "#7a69fc", "#a69bfd", "#d3cdfe"],
  triadic: ["#1f0132", "#3e0264", "#5e0396", "#7d04c8", "#9c05fa", "#b037fb", "#c469fc", "#d79bfd", "#ebcdfe"],
  analogous: ["#013207", "#02640d", "#039614", "#04c81b", "#05fa22", "#37fb4e", "#69fc7a", "#9bfda6", "#cdfed3"],
  ...defaultCommonColors,
};

export const springGreenAstraeusLightTheme: ThemeObject = {
  colors: springGreenAstraeusLightColors,
  spacing: springGreenAstraeusSpacing,
  typography: springGreenAstraeusTypography,
};

export const springGreenAstraeusDarkTheme: ThemeObject = {
  colors: springGreenAstraeusDarkColors,
  spacing: springGreenAstraeusSpacing,
  typography: springGreenAstraeusTypography,
};

export { springGreenAstraeusSpacing, springGreenAstraeusTypography };

export const springGreenAstraeusTheme: MultiThemeProviderProps["themes"] = [
  {
    name: "dark",
    theme: springGreenAstraeusDarkTheme,
  },
  {
    name: "light",
    theme: springGreenAstraeusLightTheme,
  },
];
