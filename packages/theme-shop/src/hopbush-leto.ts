import { ColorsObject, MultiThemeProviderProps, ThemeObject } from "@kami-ui/react-theme-common";
import {
  defaultSpacing as hopbushLetoSpacing,
  defaultTypography as hopbushLetoTypography,
  defaultCommonColors,
} from "./default";

export const hopbushLetoLightColors: ColorsObject = {
  text: ["#f3d8ea", "#e7b1d5", "#db8ac0", "#cf63ab", "#c33c96", "#9c3078", "#75245a", "#4e183c", "#270c1e"],
  background: ["#f5d6e0", "#ebadc2", "#e085a3", "#d65c85", "#cc3366", "#a32952", "#7a1f3d", "#521429", "#290a14"],
  primary: ["#f2d9e5", "#e6b3cb", "#d98cb1", "#cc6697", "#bf407d", "#993364", "#73264b", "#4d1932", "#260d19"],
  secondary: ["#f3e1d8", "#e6c2b2", "#daa48b", "#cd8665", "#c1683e", "#9a5332", "#743e25", "#4d2919", "#27150c"],
  accent: ["#f2e7d9", "#e6cfb3", "#d9b88c", "#cca066", "#bf8840", "#996d33", "#735226", "#4d3619", "#261b0d"],
  complementary: ["#d9f2e6", "#b3e6ce", "#8cd9b4", "#66cc9b", "#40bf82", "#339968", "#26734e", "#194d34", "#0d261a"],
  tetradic: ["#f2f2d9", "#e4e6b3", "#d8d98c", "#cacc66", "#bdbf40", "#979933", "#727326", "#4c4d19", "#26260d"],
  triadic: ["#e5f2d9", "#cbe6b3", "#b1d98c", "#97cc66", "#7dbf40", "#649933", "#4b7326", "#324d19", "#19260d"],
  analogous: ["#f2d9f2", "#e6b3e4", "#d98cd8", "#cc66ca", "#bf40bd", "#993397", "#732672", "#4d194c", "#260d26"],
  ...defaultCommonColors,
};

export const hopbushLetoDarkColors: ColorsObject = {
  text: ["#260d20", "#4d1940", "#732660", "#99337f", "#bf409f", "#cc66b2", "#d98cc6", "#e6b3d9", "#f2d9ec"],
  background: ["#290a14", "#521429", "#7a1f3d", "#a32952", "#cc3366", "#d65c85", "#e085a3", "#ebadc2", "#f5d6e0"],
  primary: ["#260d19", "#4d1932", "#73264b", "#993364", "#bf407d", "#cc6697", "#d98cb1", "#e6b3cb", "#f2d9e5"],
  secondary: ["#27150c", "#4e2918", "#743e25", "#9b5331", "#c2673d", "#ce8664", "#daa48b", "#e7c2b1", "#f3e1d8"],
  accent: ["#261b0d", "#4d3619", "#735226", "#996d33", "#bf8840", "#cca066", "#d9b88c", "#e6cfb3", "#f2e7d9"],
  complementary: ["#0d261a", "#194d34", "#26734e", "#339968", "#40bf82", "#66cc9b", "#8cd9b4", "#b3e6ce", "#d9f2e6"],
  tetradic: ["#26260d", "#4c4d19", "#727326", "#979933", "#bdbf40", "#cacc66", "#d8d98c", "#e4e6b3", "#f2f2d9"],
  triadic: ["#19260d", "#324d19", "#4b7326", "#649933", "#7dbf40", "#97cc66", "#b1d98c", "#cbe6b3", "#e5f2d9"],
  analogous: ["#260d26", "#4d194c", "#732672", "#993397", "#bf40bd", "#cc66ca", "#d98cd8", "#e6b3e4", "#f2d9f2"],
  ...defaultCommonColors,
};

export const hopbushLetoLightTheme: ThemeObject = {
  colors: hopbushLetoLightColors,
  spacing: hopbushLetoSpacing,
  typography: hopbushLetoTypography,
};

export const hopbushLetoDarkTheme: ThemeObject = {
  colors: hopbushLetoDarkColors,
  spacing: hopbushLetoSpacing,
  typography: hopbushLetoTypography,
};

export { hopbushLetoSpacing, hopbushLetoTypography };

export const hopbushLetoTheme: MultiThemeProviderProps["themes"] = [
  {
    name: "dark",
    theme: hopbushLetoDarkTheme,
  },
  {
    name: "light",
    theme: hopbushLetoLightTheme,
  },
];
