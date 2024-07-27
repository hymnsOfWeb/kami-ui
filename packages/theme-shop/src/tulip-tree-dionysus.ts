import { ColorsObject, MultiThemeProviderProps, ThemeObject } from "@kami-ui/react-theme-common";
import {
  defaultSpacing as tulipTreeDionysusSpacing,
  defaultTypography as tulipTreeDionysusTypography,
  defaultCommonColors,
} from "./default";

export const tulipTreeDionysusLightColors: ColorsObject = {
  text: ["#f9e8d2", "#f4d1a4", "#eeba77", "#e9a449", "#e38d1c", "#b67116", "#885411", "#5b380b", "#2d1c06"],
  background: ["#f9ecd2", "#f2d9a6", "#ecc679", "#e6b34c", "#df9f20", "#b38019", "#866013", "#59400d", "#2d2006"],
  primary: ["#fae8d1", "#f5d0a3", "#f0b975", "#eba147", "#e68a19", "#b86e14", "#8a530f", "#5c370a", "#2e1c05"],
  secondary: ["#edfad1", "#dbf5a3", "#c9f075", "#b7eb47", "#a5e619", "#84b814", "#638a0f", "#425c0a", "#212e05"],
  accent: ["#e3fad1", "#c8f5a3", "#acf075", "#91eb47", "#75e619", "#5eb814", "#468a0f", "#2f5c0a", "#172e05"],
  complementary: ["#d1e3fa", "#a3c8f5", "#75acf0", "#4791eb", "#1975e6", "#145eb8", "#0f468a", "#0a2f5c", "#05172e"],
  tetradic: ["#d1fad4", "#a3f5a7", "#75f07b", "#47eb4f", "#19e623", "#14b81c", "#0f8a15", "#0a5c0e", "#052e08"],
  triadic: ["#d1fae8", "#a3f5d0", "#75f0b9", "#47eba1", "#19e68a", "#14b86e", "#0f8a53", "#0a5c37", "#052e1c"],
  analogous: ["#fad4d1", "#f5a7a3", "#f07b75", "#eb4f47", "#e62319", "#b81c14", "#8a150f", "#5c0e0a", "#2e0805"],
  ...defaultCommonColors,
};

export const tulipTreeDionysusDarkColors: ColorsObject = {
  text: ["#2d1d06", "#5a3b0c", "#875812", "#b57617", "#e2931d", "#e8a94a", "#edbe78", "#f3d4a5", "#f9e9d2"],
  background: ["#2e1f05", "#5c3e0a", "#8a5d0f", "#b87c14", "#e69b19", "#ebaf47", "#f0c375", "#f5d7a3", "#faebd1"],
  primary: ["#2e1c05", "#5c370a", "#8a530f", "#b86e14", "#e68a19", "#eba147", "#f0b975", "#f5d0a3", "#fae8d1"],
  secondary: ["#212e05", "#425c0a", "#638a0f", "#84b814", "#a5e619", "#b7eb47", "#c9f075", "#dbf5a3", "#edfad1"],
  accent: ["#172e05", "#2f5c0a", "#468a0f", "#5eb814", "#75e619", "#91eb47", "#acf075", "#c8f5a3", "#e3fad1"],
  complementary: ["#05172e", "#0a2f5c", "#0f468a", "#145eb8", "#1975e6", "#4791eb", "#75acf0", "#a3c8f5", "#d1e3fa"],
  tetradic: ["#052e08", "#0a5c0e", "#0f8a15", "#14b81c", "#19e623", "#47eb4f", "#75f07b", "#a3f5a7", "#d1fad4"],
  triadic: ["#052e1c", "#0a5c37", "#0f8a53", "#14b86e", "#19e68a", "#47eba1", "#75f0b9", "#a3f5d0", "#d1fae8"],
  analogous: ["#2e0805", "#5c0e0a", "#8a150f", "#b81c14", "#e62319", "#eb4f47", "#f07b75", "#f5a7a3", "#fad4d1"],
  ...defaultCommonColors,
};

export const tulipTreeDionysusLightTheme: ThemeObject = {
  colors: tulipTreeDionysusLightColors,
  spacing: tulipTreeDionysusSpacing,
  typography: tulipTreeDionysusTypography,
};

export const tulipTreeDionysusDarkTheme: ThemeObject = {
  colors: tulipTreeDionysusDarkColors,
  spacing: tulipTreeDionysusSpacing,
  typography: tulipTreeDionysusTypography,
};

export { tulipTreeDionysusSpacing, tulipTreeDionysusTypography };

export const tulipTreeDionysusTheme: MultiThemeProviderProps["themes"] = [
  {
    name: "dark",
    theme: tulipTreeDionysusDarkTheme,
  },
  {
    name: "light",
    theme: tulipTreeDionysusLightTheme,
  },
];
