import { ColorsObject, MultiThemeProviderProps, ThemeObject } from "@kami-ui/react-theme-common";
import {
  defaultSpacing as amethystSmokeMenoetiusSpacing,
  defaultTypography as amethystSmokeMenoetiusTypography,
  defaultCommonColors,
} from "./default";

export const amethystSmokeMenoetiusLightColors: ColorsObject = {
  text: ["#e6e0eb", "#ccc2d6", "#b3a3c2", "#9985ad", "#7f6699", "#66527a", "#4c3d5c", "#33293d", "#19141f"],
  background: ["#e6dfec", "#ccbfd9", "#b29fc6", "#9980b3", "#7f609f", "#664d80", "#4c3960", "#332640", "#191320"],
  primary: ["#e4e1ea", "#cac3d5", "#afa5c0", "#9588aa", "#7a6a95", "#625577", "#493f5a", "#312a3c", "#18151e"],
  secondary: ["#eae1e6", "#d5c3cd", "#c0a5b3", "#aa889a", "#956a81", "#775567", "#5a3f4d", "#3c2a34", "#1e151a"],
  accent: ["#eae1e3", "#d5c3c7", "#c0a5ab", "#aa888f", "#956a73", "#77555c", "#5a3f45", "#3c2a2e", "#1e1517"],
  complementary: ["#e7eae1", "#ced5c3", "#b6c0a5", "#9daa88", "#85956a", "#6a7755", "#505a3f", "#353c2a", "#1b1e15"],
  tetradic: ["#eae1e3", "#d5c3c5", "#c0a5a9", "#aa888c", "#956a70", "#775559", "#5a3f43", "#3c2a2c", "#1e1516"],
  triadic: ["#eae4e1", "#d5cac3", "#c0afa5", "#aa9588", "#957a6a", "#776255", "#5a493f", "#3c312a", "#1e1815"],
  analogous: ["#e1e3ea", "#c3c5d5", "#a5a9c0", "#888caa", "#6a7095", "#555977", "#3f435a", "#2a2c3c", "#15161e"],
  ...defaultCommonColors,
};

export const amethystSmokeMenoetiusDarkColors: ColorsObject = {
  text: ["#19141f", "#33293d", "#4c3d5c", "#66527a", "#7f6699", "#9985ad", "#b3a3c2", "#ccc2d6", "#e6e0eb"],
  background: ["#19141f", "#33293d", "#4c3d5c", "#66527a", "#7f6699", "#9985ad", "#b3a3c2", "#ccc2d6", "#e6e0eb"],
  primary: ["#19151e", "#312a3c", "#4a3f5a", "#635577", "#7b6a95", "#9688aa", "#b0a5c0", "#cac3d5", "#e5e1ea"],
  secondary: ["#1e151a", "#3c2a33", "#5a3f4d", "#785467", "#966980", "#ab879a", "#c0a5b3", "#d5c3cc", "#eae1e6"],
  accent: ["#1e1517", "#3c2a2e", "#5a3f45", "#77555c", "#956a73", "#aa888f", "#c0a5ab", "#d5c3c7", "#eae1e3"],
  complementary: ["#1a1e15", "#353c2a", "#4f5a3f", "#697755", "#84956a", "#9caa88", "#b5c0a5", "#ced5c3", "#e6eae1"],
  tetradic: ["#1e1515", "#3c2a2c", "#5a3f42", "#775558", "#956a6e", "#aa888b", "#c0a5a8", "#d5c3c5", "#eae1e1"],
  triadic: ["#1e1915", "#3c312a", "#5a4a3f", "#776355", "#957b6a", "#aa9688", "#c0b0a5", "#d5cac3", "#eae5e1"],
  analogous: ["#15151e", "#2a2c3c", "#3f425a", "#555877", "#6a6e95", "#888baa", "#a5a8c0", "#c3c5d5", "#e1e1ea"],
  ...defaultCommonColors,
};

export const amethystSmokeMenoetiusLightTheme: ThemeObject = {
  colors: amethystSmokeMenoetiusLightColors,
  spacing: amethystSmokeMenoetiusSpacing,
  typography: amethystSmokeMenoetiusTypography,
};

export const amethystSmokeMenoetiusDarkTheme: ThemeObject = {
  colors: amethystSmokeMenoetiusDarkColors,
  spacing: amethystSmokeMenoetiusSpacing,
  typography: amethystSmokeMenoetiusTypography,
};

export { amethystSmokeMenoetiusSpacing, amethystSmokeMenoetiusTypography };

export const amethystSmokeMenoetiusTheme: MultiThemeProviderProps["themes"] = [
  {
    name: "dark",
    theme: amethystSmokeMenoetiusDarkTheme,
  },
  {
    name: "light",
    theme: amethystSmokeMenoetiusLightTheme,
  },
];
