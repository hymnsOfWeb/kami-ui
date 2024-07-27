import { ColorsObject, MultiThemeProviderProps, ThemeObject } from "@kami-ui/react-theme-common";
import {
  defaultSpacing as pearMorpheusSpacing,
  defaultTypography as pearMorpheusTypography,
  defaultCommonColors,
} from "./default";

export const pearMorpheusLightColors: ColorsObject = {
  text: ["#eefad1", "#dcf5a3", "#cbf075", "#baeb47", "#a8e619", "#87b814", "#658a0f", "#435c0a", "#222e05"],
  background: ["#f1fad1", "#e4f6a2", "#d6f174", "#c8ed45", "#bbe817", "#95ba12", "#708b0e", "#4b5d09", "#252e05"],
  primary: ["#f0fad1", "#e2f5a3", "#d3f075", "#c5eb47", "#b6e619", "#92b814", "#6d8a0f", "#495c0a", "#242e05"],
  secondary: ["#d1faf0", "#a3f5e2", "#75f0d3", "#47ebc5", "#19e6b6", "#14b892", "#0f8a6d", "#0a5c49", "#052e24"],
  accent: ["#d1f1fa", "#a3e3f5", "#75d5f0", "#47c7eb", "#19b9e6", "#1494b8", "#0f6f8a", "#0a4a5c", "#05252e"],
  complementary: ["#dbd1fa", "#b6a3f5", "#9275f0", "#6d47eb", "#4919e6", "#3a14b8", "#2c0f8a", "#1d0a5c", "#0f052e"],
  tetradic: ["#d1faf0", "#a3f5df", "#75f0cf", "#47ebbf", "#19e6af", "#14b88c", "#0f8a69", "#0a5c46", "#052e24"],
  triadic: ["#d1f0fa", "#a3e2f5", "#75d3f0", "#47c5eb", "#19b6e6", "#1492b8", "#0f6d8a", "#0a495c", "#05242e"],
  analogous: ["#faf0d1", "#f5dfa3", "#f0cf75", "#ebbf47", "#e6af19", "#b88c14", "#8a690f", "#5c460a", "#2e2405"],
  ...defaultCommonColors,
};

export const pearMorpheusDarkColors: ColorsObject = {
  text: ["#222e05", "#435c0a", "#658a0f", "#87b814", "#a8e619", "#baeb47", "#cbf075", "#dcf5a3", "#eefad1"],
  background: ["#242e05", "#475c0a", "#6b8a0f", "#8fb814", "#b3e619", "#c2eb47", "#d1f075", "#e0f5a3", "#f0fad1"],
  primary: ["#242e05", "#495c0a", "#6d8a0f", "#92b814", "#b6e619", "#c5eb47", "#d3f075", "#e2f5a3", "#f0fad1"],
  secondary: ["#052e24", "#0a5c49", "#0f8a6d", "#14b892", "#19e6b6", "#47ebc5", "#75f0d3", "#a3f5e2", "#d1faf0"],
  accent: ["#05252e", "#0a4a5c", "#0f6f8a", "#1494b8", "#19b9e6", "#47c7eb", "#75d5f0", "#a3e3f5", "#d1f1fa"],
  complementary: ["#0f052e", "#1d0a5c", "#2c0f8a", "#3a14b8", "#4919e6", "#6d47eb", "#9275f0", "#b6a3f5", "#dbd1fa"],
  tetradic: ["#052e24", "#0a5c46", "#0f8a69", "#14b88c", "#19e6af", "#47ebbf", "#75f0cf", "#a3f5df", "#d1faf0"],
  triadic: ["#05242e", "#0a495c", "#0f6d8a", "#1492b8", "#19b6e6", "#47c5eb", "#75d3f0", "#a3e2f5", "#d1f0fa"],
  analogous: ["#2e2405", "#5c460a", "#8a690f", "#b88c14", "#e6af19", "#ebbf47", "#f0cf75", "#f5dfa3", "#faf0d1"],
  ...defaultCommonColors,
};

export const pearMorpheusLightTheme: ThemeObject = {
  colors: pearMorpheusLightColors,
  spacing: pearMorpheusSpacing,
  typography: pearMorpheusTypography,
};

export const pearMorpheusDarkTheme: ThemeObject = {
  colors: pearMorpheusDarkColors,
  spacing: pearMorpheusSpacing,
  typography: pearMorpheusTypography,
};

export { pearMorpheusSpacing, pearMorpheusTypography };

export const pearMorpheusTheme: MultiThemeProviderProps["themes"] = [
  {
    name: "dark",
    theme: pearMorpheusDarkTheme,
  },
  {
    name: "light",
    theme: pearMorpheusLightTheme,
  },
];
