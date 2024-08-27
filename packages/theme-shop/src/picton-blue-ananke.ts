import { ColorsObject, MultiThemeProviderProps, ThemeObject } from "@kami-ui/types";
import {
  defaultSpacing as pictonBlueAnankeSpacing,
  defaultTypography as pictonBlueAnankeTypography,
  defaultCommonColors,
} from "./default";

export const pictonBlueAnankeLightColors: ColorsObject = {
  text: ["#d2e5f9", "#a5cbf3", "#78b1ed", "#4b96e7", "#1f7ce0", "#1863b4", "#124b87", "#0c325a", "#06192d"],
  background: ["#d3e5f8", "#a8ccf0", "#7cb2e9", "#5199e1", "#257fda", "#1e66ae", "#164c83", "#0f3357", "#07192c"],
  primary: ["#d2e6f9", "#a6cdf2", "#79b4ec", "#4c9ce6", "#2083df", "#1969b3", "#134e86", "#0d3459", "#061a2d"],
  secondary: ["#f9e2d2", "#f2c6a6", "#eca979", "#e68c4c", "#df7020", "#b35919", "#864313", "#592d0d", "#2d1606"],
  accent: ["#e9f8d3", "#d4f2a6", "#beeb7a", "#a8e44e", "#92de21", "#75b11b", "#588514", "#3b590d", "#1d2c07"],
  complementary: ["#f9e5d2", "#f2cba6", "#ecb179", "#e6964c", "#df7c20", "#b36319", "#864b13", "#59320d", "#2d1906"],
  tetradic: ["#f8d2f9", "#f1a6f2", "#ea79ec", "#e34ce6", "#dc20df", "#b019b3", "#841386", "#580d59", "#2c062d"],
  triadic: ["#f9d2e6", "#f2a6cd", "#ec79b4", "#e64c9c", "#df2083", "#b31969", "#86134e", "#590d34", "#2d061a"],
  analogous: ["#d2f9f8", "#a6f2f1", "#79ecea", "#4ce6e3", "#20dfdc", "#19b3b0", "#138684", "#0d5958", "#062d2c"],
  ...defaultCommonColors,
};

export const pictonBlueAnankeDarkColors: ColorsObject = {
  text: ["#07192c", "#0d3259", "#144b85", "#1b63b1", "#217cde", "#4e96e4", "#7ab1eb", "#a6cbf2", "#d3e5f8"],
  background: ["#071b2c", "#0e3758", "#155284", "#1c6db0", "#2289dd", "#4fa0e3", "#7bb8ea", "#a7d0f1", "#d3e7f8"],
  primary: ["#061a2d", "#0d3459", "#134e86", "#1969b3", "#2083df", "#4c9ce6", "#79b4ec", "#a6cdf2", "#d2e6f9"],
  secondary: ["#2d1606", "#592d0d", "#864313", "#b35919", "#df7020", "#e68c4c", "#eca979", "#f2c6a6", "#f9e2d2"],
  accent: ["#1d2c07", "#3b590d", "#588514", "#75b11b", "#92de21", "#a8e44e", "#beeb7a", "#d4f2a6", "#e9f8d3"],
  complementary: ["#2d1906", "#59320d", "#864b13", "#b36319", "#df7c20", "#e6964c", "#ecb179", "#f2cba6", "#f9e5d2"],
  tetradic: ["#2c062d", "#580d59", "#841386", "#b019b3", "#dc20df", "#e34ce6", "#ea79ec", "#f1a6f2", "#f8d2f9"],
  triadic: ["#2d061a", "#590d34", "#86134e", "#b31969", "#df2083", "#e64c9c", "#ec79b4", "#f2a6cd", "#f9d2e6"],
  analogous: ["#062d2c", "#0d5958", "#138684", "#19b3b0", "#20dfdc", "#4ce6e3", "#79ecea", "#a6f2f1", "#d2f9f8"],
  ...defaultCommonColors,
};

export const pictonBlueAnankeLightTheme: ThemeObject = {
  colors: pictonBlueAnankeLightColors,
  spacing: pictonBlueAnankeSpacing,
  typography: pictonBlueAnankeTypography,
};

export const pictonBlueAnankeDarkTheme: ThemeObject = {
  colors: pictonBlueAnankeDarkColors,
  spacing: pictonBlueAnankeSpacing,
  typography: pictonBlueAnankeTypography,
};

export { pictonBlueAnankeSpacing, pictonBlueAnankeTypography };

export const pictonBlueAnankeTheme: MultiThemeProviderProps["themes"] = [
  {
    name: "dark",
    theme: pictonBlueAnankeDarkTheme,
  },
  {
    name: "light",
    theme: pictonBlueAnankeLightTheme,
  },
];
