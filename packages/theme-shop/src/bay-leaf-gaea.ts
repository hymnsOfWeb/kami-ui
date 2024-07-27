import { ColorsObject, MultiThemeProviderProps, ThemeObject } from "@kami-ui/react-theme-common";
import {
  defaultSpacing as bayLeafGaeaSpacing,
  defaultTypography as bayLeafGaeaTypography,
  defaultCommonColors,
} from "./default";

export const bayLeafGaeaLightColors: ColorsObject = {
  text: ["#e0ebe2", "#c1d7c5", "#a2c3a7", "#84ae8a", "#659a6d", "#517b57", "#3c5d41", "#283e2c", "#141f16"],
  background: ["#e0ebe0", "#c1d7c1", "#a2c3a2", "#83af83", "#639c63", "#507c50", "#3c5d3c", "#283e28", "#141f14"],
  primary: ["#e0ebe1", "#c0d8c3", "#a1c4a5", "#82b087", "#629d69", "#4f7d54", "#3b5e3f", "#273f2a", "#141f15"],
  secondary: ["#ebe0eb", "#d8c0d8", "#c4a1c4", "#b082b0", "#9d629d", "#7d4f7d", "#5e3b5e", "#3f273f", "#1f141f"],
  accent: ["#ebe0e0", "#d8c0c1", "#c4a1a1", "#b08282", "#9d6263", "#7d4f4f", "#5e3b3b", "#3f2728", "#1f1414"],
  complementary: ["#ebe0ea", "#d8c0d5", "#c4a1c0", "#b082ab", "#9d6296", "#7d4f78", "#5e3b5a", "#3f273c", "#1f141e"],
  tetradic: ["#e0e5eb", "#c0c9d8", "#a1aec4", "#8294b0", "#62799d", "#4f617d", "#3b485e", "#27303f", "#14191f"],
  triadic: ["#e1e0eb", "#c3c0d8", "#a5a1c4", "#8782b0", "#69629d", "#544f7d", "#3f3b5e", "#2a273f", "#15141f"],
  analogous: ["#e5ebe0", "#c9d8c0", "#aec4a1", "#94b082", "#799d62", "#617d4f", "#485e3b", "#303f27", "#191f14"],
  ...defaultCommonColors,
};

export const bayLeafGaeaDarkColors: ColorsObject = {
  text: ["#141f15", "#273f2b", "#3b5e40", "#4f7d56", "#629d6b", "#82b089", "#a1c4a6", "#c0d8c4", "#e0ebe1"],
  background: ["#141f14", "#293d29", "#3d5c3d", "#527a52", "#669966", "#85ad85", "#a3c2a3", "#c2d6c2", "#e0ebe0"],
  primary: ["#141f15", "#273f2a", "#3b5e40", "#4f7d55", "#629d6a", "#82b088", "#a1c4a6", "#c0d8c3", "#e0ebe1"],
  secondary: ["#1f141f", "#3f273f", "#5e3b5e", "#7d4f7d", "#9d629d", "#b082b0", "#c4a1c4", "#d8c0d8", "#ebe0eb"],
  accent: ["#1f1414", "#3f2727", "#5e3b3b", "#7d4f4f", "#9d6262", "#b08282", "#c4a1a1", "#d8c0c0", "#ebe0e0"],
  complementary: ["#1f141e", "#3f273c", "#5e3b59", "#7d4f77", "#9d6295", "#b082aa", "#c4a1bf", "#d8c0d5", "#ebe0ea"],
  tetradic: ["#14191f", "#27303f", "#3b475e", "#4f607d", "#62789d", "#8293b0", "#a1adc4", "#c0c9d8", "#e0e5eb"],
  triadic: ["#15141f", "#2a273f", "#403b5e", "#554f7d", "#6a629d", "#8882b0", "#a6a1c4", "#c3c0d8", "#e1e0eb"],
  analogous: ["#191f14", "#303f27", "#475e3b", "#607d4f", "#789d62", "#93b082", "#adc4a1", "#c9d8c0", "#e5ebe0"],
  ...defaultCommonColors,
};

export const bayLeafGaeaLightTheme: ThemeObject = {
  colors: bayLeafGaeaLightColors,
  spacing: bayLeafGaeaSpacing,
  typography: bayLeafGaeaTypography,
};

export const bayLeafGaeaDarkTheme: ThemeObject = {
  colors: bayLeafGaeaDarkColors,
  spacing: bayLeafGaeaSpacing,
  typography: bayLeafGaeaTypography,
};

export { bayLeafGaeaSpacing, bayLeafGaeaTypography };

export const bayLeafGaeaTheme: MultiThemeProviderProps["themes"] = [
  {
    name: "dark",
    theme: bayLeafGaeaDarkTheme,
  },
  {
    name: "light",
    theme: bayLeafGaeaLightTheme,
  },
];
