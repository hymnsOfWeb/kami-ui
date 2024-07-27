import { ColorsObject, MultiThemeProviderProps, ThemeObject } from "@kami-ui/react-theme-common";
import {
  defaultSpacing as brilliantRoseAresSpacing,
  defaultTypography as brilliantRoseAresTypography,
  defaultCommonColors,
} from "./default";

export const brilliantRoseAresLightColors: ColorsObject = {
  text: ["#fbd0e9", "#f6a2d3", "#f273bd", "#ee44a7", "#e91691", "#bb1174", "#8c0d57", "#5d093a", "#2f041d"],
  background: ["#fad1e8", "#f6a2d0", "#f174b9", "#ed45a1", "#e8178a", "#ba126e", "#8b0e53", "#5d0937", "#2e051c"],
  primary: ["#fbd0e8", "#f8a0d0", "#f471b9", "#f141a2", "#ed128a", "#be0e6f", "#8e0b53", "#5f0737", "#2f041c"],
  secondary: ["#d0fbda", "#a0f8b5", "#71f48f", "#41f16a", "#12ed45", "#0ebe37", "#0b8e29", "#075f1c", "#042f0e"],
  accent: ["#d0f3fb", "#a0e6f8", "#71daf4", "#41cef1", "#12c1ed", "#0e9bbe", "#0b748e", "#074d5f", "#04272f"],
  complementary: ["#d0fbe3", "#a0f8c8", "#71f4ac", "#41f190", "#12ed75", "#0ebe5d", "#0b8e46", "#075f2f", "#042f17"],
  tetradic: ["#fbf9d0", "#f8f4a0", "#f4ed71", "#f1e841", "#ede212", "#beb50e", "#8e870b", "#5f5b07", "#2f2d04"],
  triadic: ["#e8fbd0", "#d0f8a0", "#b9f471", "#a2f141", "#8aed12", "#6fbe0e", "#538e0b", "#375f07", "#1c2f04"],
  analogous: ["#f9d0fb", "#f4a0f8", "#ed71f4", "#e841f1", "#e212ed", "#b50ebe", "#870b8e", "#5b075f", "#2d042f"],
  ...defaultCommonColors,
};

export const brilliantRoseAresDarkColors: ColorsObject = {
  text: ["#2f041c", "#5e0839", "#8d0c55", "#bc1071", "#eb148e", "#ef43a4", "#f372bb", "#f7a1d2", "#fbd0e8"],
  background: ["#2e051e", "#5c0a3d", "#8a0f5b", "#b81479", "#e61997", "#eb47ac", "#f075c1", "#f5a3d6", "#fad1ea"],
  primary: ["#2f041c", "#5f0737", "#8e0b53", "#be0e6f", "#ed128a", "#f141a2", "#f471b9", "#f8a0d0", "#fbd0e8"],
  secondary: ["#042f0e", "#075f1c", "#0b8e29", "#0ebe37", "#12ed45", "#41f16a", "#71f48f", "#a0f8b5", "#d0fbda"],
  accent: ["#032730", "#074e5f", "#0a748f", "#0d9bbf", "#11c2ee", "#40cef2", "#70daf5", "#a0e7f8", "#cff3fc"],
  complementary: ["#042f17", "#075f2f", "#0b8e46", "#0ebe5d", "#12ed75", "#41f190", "#71f4ac", "#a0f8c8", "#d0fbe3"],
  tetradic: ["#2f2d04", "#5f5b07", "#8e870b", "#beb50e", "#ede212", "#f1e841", "#f4ed71", "#f8f4a0", "#fbf9d0"],
  triadic: ["#1c2f04", "#375f07", "#538e0b", "#6fbe0e", "#8aed12", "#a2f141", "#b9f471", "#d0f8a0", "#e8fbd0"],
  analogous: ["#2d042f", "#5b075f", "#870b8e", "#b50ebe", "#e212ed", "#e841f1", "#ed71f4", "#f4a0f8", "#f9d0fb"],
  ...defaultCommonColors,
};

export const brilliantRoseAresLightTheme: ThemeObject = {
  colors: brilliantRoseAresLightColors,
  spacing: brilliantRoseAresSpacing,
  typography: brilliantRoseAresTypography,
};

export const brilliantRoseAresDarkTheme: ThemeObject = {
  colors: brilliantRoseAresDarkColors,
  spacing: brilliantRoseAresSpacing,
  typography: brilliantRoseAresTypography,
};

export { brilliantRoseAresSpacing, brilliantRoseAresTypography };

export const brilliantRoseAresTheme: MultiThemeProviderProps["themes"] = [
  {
    name: "dark",
    theme: brilliantRoseAresDarkTheme,
  },
  {
    name: "light",
    theme: brilliantRoseAresLightTheme,
  },
];
