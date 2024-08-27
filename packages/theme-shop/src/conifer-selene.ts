import { ColorsObject, MultiThemeProviderProps, ThemeObject } from "@kami-ui/types";
import {
  defaultSpacing as coniferSeleneSpacing,
  defaultTypography as coniferSeleneTypography,
  defaultCommonColors,
} from "./default";

export const coniferSeleneLightColors: ColorsObject = {
  text: ["#e2f7d4", "#c5efa9", "#a8e77e", "#8bde54", "#6ed629", "#58ab21", "#428118", "#2c5610", "#162b08"],
  background: ["#e2f8d3", "#c5f0a8", "#a8e97c", "#8be151", "#6dda25", "#58ae1e", "#428316", "#2c570f", "#162c07"],
  primary: ["#e0f7d4", "#c0f0a8", "#a1e87d", "#81e052", "#62d926", "#4ead1f", "#3b8217", "#27570f", "#142b08"],
  secondary: ["#d4f7f5", "#a9efea", "#7ee7e0", "#53dfd6", "#28d7cc", "#20aca3", "#18817a", "#105651", "#082b29"],
  accent: ["#d4eaf7", "#a9d5ef", "#7ec1e7", "#53acdf", "#2897d7", "#2079ac", "#185b81", "#103c56", "#081e2b"],
  complementary: ["#ebd4f7", "#d8a8f0", "#c47de8", "#b152e0", "#9d26d9", "#7e1fad", "#5e1782", "#3f0f57", "#1f082b"],
  tetradic: ["#d4f2f7", "#a8e4f0", "#7dd6e8", "#52c8e0", "#26bbd9", "#1f95ad", "#177082", "#0f4b57", "#08262b"],
  triadic: ["#d4e0f7", "#a8c0f0", "#7da1e8", "#5281e0", "#2662d9", "#1f4ead", "#173b82", "#0f2757", "#08142b"],
  analogous: ["#f2f7d4", "#e4f0a8", "#d6e87d", "#c8e052", "#bbd926", "#95ad1f", "#708217", "#4b570f", "#262b08"],
  ...defaultCommonColors,
};

export const coniferSeleneDarkColors: ColorsObject = {
  text: ["#172b08", "#2d5511", "#448019", "#5baa22", "#71d52a", "#8edd55", "#aae67f", "#c6eeaa", "#e3f7d4"],
  background: ["#14290a", "#295214", "#3d7a1f", "#52a329", "#66cc33", "#85d65c", "#a3e085", "#c2ebad", "#e0f5d6"],
  primary: ["#142b08", "#27570f", "#3b8217", "#4ead1f", "#62d926", "#81e052", "#a1e87d", "#c0f0a8", "#e0f7d4"],
  secondary: ["#082b29", "#105651", "#18817a", "#20aca3", "#28d7cc", "#53dfd6", "#7ee7e0", "#a9efea", "#d4f7f5"],
  accent: ["#081e2b", "#103c56", "#185b81", "#2079ac", "#2897d7", "#53acdf", "#7ec1e7", "#a9d5ef", "#d4eaf7"],
  complementary: ["#1f082b", "#3f0f57", "#5e1782", "#7e1fad", "#9d26d9", "#b152e0", "#c47de8", "#d8a8f0", "#ebd4f7"],
  tetradic: ["#08262b", "#0f4b57", "#177082", "#1f95ad", "#26bbd9", "#52c8e0", "#7dd6e8", "#a8e4f0", "#d4f2f7"],
  triadic: ["#08142b", "#0f2757", "#173b82", "#1f4ead", "#2662d9", "#5281e0", "#7da1e8", "#a8c0f0", "#d4e0f7"],
  analogous: ["#262b08", "#4b570f", "#708217", "#95ad1f", "#bbd926", "#c8e052", "#d6e87d", "#e4f0a8", "#f2f7d4"],
  ...defaultCommonColors,
};

export const coniferSeleneLightTheme: ThemeObject = {
  colors: coniferSeleneLightColors,
  spacing: coniferSeleneSpacing,
  typography: coniferSeleneTypography,
};

export const coniferSeleneDarkTheme: ThemeObject = {
  colors: coniferSeleneDarkColors,
  spacing: coniferSeleneSpacing,
  typography: coniferSeleneTypography,
};

export { coniferSeleneSpacing, coniferSeleneTypography };

export const coniferSeleneTheme: MultiThemeProviderProps["themes"] = [
  {
    name: "dark",
    theme: coniferSeleneDarkTheme,
  },
  {
    name: "light",
    theme: coniferSeleneLightTheme,
  },
];
