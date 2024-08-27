import { ColorsObject, MultiThemeProviderProps, ThemeObject } from "@kami-ui/types";
import {
  defaultSpacing as starshipDioneSpacing,
  defaultTypography as starshipDioneTypography,
  defaultCommonColors,
} from "./default";

export const starshipDioneLightColors: ColorsObject = {
  text: ["#fbfbd0", "#f6f6a2", "#f2f273", "#eeee44", "#e9e916", "#bbbb11", "#8c8c0d", "#5d5d09", "#2f2f04"],
  background: ["#f9f9d2", "#f4f4a4", "#eeee77", "#e9e949", "#e3e31c", "#b6b616", "#888811", "#5b5b0b", "#2d2d06"],
  primary: ["#fbf9d0", "#f8f2a0", "#f4ec71", "#f1e541", "#eddf12", "#beb20e", "#8e860b", "#5f5907", "#2f2d04"],
  secondary: ["#d0fbde", "#a1f7be", "#71f49d", "#42f07c", "#13ec5b", "#0fbd49", "#0b8e37", "#085e25", "#042f12"],
  accent: ["#d0fbf1", "#a0f8e3", "#71f4d6", "#41f1c8", "#12edba", "#0ebe95", "#0b8e70", "#075f4a", "#042f25"],
  complementary: ["#d0d2fb", "#a0a6f8", "#717af4", "#414df1", "#1221ed", "#0e1abe", "#0b148e", "#070d5f", "#04062f"],
  tetradic: ["#d0fbe3", "#a0f8c6", "#71f4aa", "#41f18d", "#12ed71", "#0ebe5a", "#0b8e44", "#075f2d", "#042f17"],
  triadic: ["#d0fbf9", "#a0f8f2", "#71f4eb", "#41f1e5", "#12edde", "#0ebeb2", "#0b8e85", "#075f59", "#042f2d"],
  analogous: ["#fbe3d0", "#f8c6a0", "#f4aa71", "#f18d41", "#ed7112", "#be5a0e", "#8e440b", "#5f2d07", "#2f1704"],
  ...defaultCommonColors,
};

export const starshipDioneDarkColors: ColorsObject = {
  text: ["#2f2f04", "#5e5e08", "#8d8d0c", "#bcbc10", "#ebeb14", "#efef43", "#f3f372", "#f7f7a1", "#fbfbd0"],
  background: ["#2e2e05", "#5c5c0a", "#8a8a0f", "#b8b814", "#e5e619", "#ebeb47", "#f0f075", "#f5f5a3", "#fafad1"],
  primary: ["#2f2d04", "#5f5907", "#8e860b", "#beb20e", "#eddf12", "#f1e541", "#f4ec71", "#f8f2a0", "#fbf9d0"],
  secondary: ["#042f12", "#085e25", "#0b8e37", "#0fbd49", "#13ec5b", "#42f07c", "#71f49d", "#a1f7be", "#d0fbde"],
  accent: ["#033025", "#075f4b", "#0a8f70", "#0dbf95", "#11eebb", "#40f2c8", "#70f5d6", "#a0f8e4", "#cffcf1"],
  complementary: ["#04062f", "#070d5f", "#0b148e", "#0e1abe", "#1221ed", "#414df1", "#717af4", "#a0a6f8", "#d0d2fb"],
  tetradic: ["#042f17", "#075f2d", "#0b8e44", "#0ebe5a", "#12ed71", "#41f18d", "#71f4aa", "#a0f8c6", "#d0fbe3"],
  triadic: ["#042f2d", "#075f59", "#0b8e85", "#0ebeb2", "#12edde", "#41f1e5", "#71f4eb", "#a0f8f2", "#d0fbf9"],
  analogous: ["#2f1704", "#5f2d07", "#8e440b", "#be5a0e", "#ed7112", "#f18d41", "#f4aa71", "#f8c6a0", "#fbe3d0"],
  ...defaultCommonColors,
};

export const starshipDioneLightTheme: ThemeObject = {
  colors: starshipDioneLightColors,
  spacing: starshipDioneSpacing,
  typography: starshipDioneTypography,
};

export const starshipDioneDarkTheme: ThemeObject = {
  colors: starshipDioneDarkColors,
  spacing: starshipDioneSpacing,
  typography: starshipDioneTypography,
};

export { starshipDioneSpacing, starshipDioneTypography };

export const starshipDioneTheme: MultiThemeProviderProps["themes"] = [
  {
    name: "dark",
    theme: starshipDioneDarkTheme,
  },
  {
    name: "light",
    theme: starshipDioneLightTheme,
  },
];
