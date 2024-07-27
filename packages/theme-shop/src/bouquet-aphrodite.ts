import { ColorsObject, MultiThemeProviderProps, ThemeObject } from "@kami-ui/react-theme-common";
import {
  defaultSpacing as bouquetAphroditeSpacing,
  defaultTypography as bouquetAphroditeTypography,
  defaultCommonColors,
} from "./default";

export const bouquetAphroditeLightColors: ColorsObject = {
  text: ["#eae1ea", "#d5c3d5", "#c0a5c0", "#aa88aa", "#956a95", "#775577", "#5a3f5a", "#3c2a3c", "#1e151e"],
  background: ["#ebe0eb", "#d6c2d6", "#c2a3c2", "#ad85ad", "#996699", "#7a527a", "#5c3d5c", "#3d293d", "#1f141f"],
  primary: ["#eae1ea", "#d5c3d4", "#c0a5bf", "#ab87aa", "#966994", "#785477", "#5a3f59", "#3c2a3b", "#1e151e"],
  secondary: ["#eae5e1", "#d5ccc3", "#c0b2a5", "#ab9887", "#967f69", "#786554", "#5a4c3f", "#3c332a", "#1e1915"],
  accent: ["#eae8e1", "#d5d2c3", "#c0bba5", "#aaa588", "#958e6a", "#777255", "#5a553f", "#3c392a", "#1e1c15"],
  complementary: ["#e1eae1", "#c3d5c4", "#a5c0a6", "#87ab88", "#69966b", "#547855", "#3f5a40", "#2a3c2b", "#151e15"],
  tetradic: ["#eae5e1", "#d5cdc3", "#c0b3a5", "#ab9a87", "#968269", "#786754", "#5a4d3f", "#3c342a", "#1e1915"],
  triadic: ["#eaeae1", "#d4d5c3", "#bfc0a5", "#aaab87", "#949669", "#777854", "#595a3f", "#3b3c2a", "#1e1e15"],
  analogous: ["#e5e1ea", "#cdc3d5", "#b3a5c0", "#9a87ab", "#826996", "#675478", "#4d3f5a", "#342a3c", "#19151e"],
  ...defaultCommonColors,
};

export const bouquetAphroditeDarkColors: ColorsObject = {
  text: ["#1d161d", "#3b2b3b", "#584158", "#755775", "#936c93", "#a88aa8", "#bea7be", "#d4c4d4", "#e9e2e9"],
  background: ["#1f141f", "#3d293d", "#5c3d5c", "#7a527a", "#996699", "#ad85ad", "#c2a3c2", "#d6c2d6", "#ebe0eb"],
  primary: ["#1e151e", "#3c2a3b", "#5a3f59", "#785477", "#966994", "#ab87aa", "#c0a5bf", "#d5c3d4", "#eae1ea"],
  secondary: ["#1e1915", "#3c332a", "#5a4c3f", "#786554", "#967f69", "#ab9887", "#c0b2a5", "#d5ccc3", "#eae5e1"],
  accent: ["#1e1c15", "#3c392a", "#5a553f", "#777255", "#958e6a", "#aaa588", "#c0bba5", "#d5d2c3", "#eae8e1"],
  complementary: ["#151e15", "#2a3c2b", "#3f5a40", "#547855", "#69966b", "#87ab88", "#a5c0a6", "#c3d5c4", "#e1eae1"],
  tetradic: ["#1e1915", "#3c342a", "#5a4d3f", "#786754", "#968269", "#ab9a87", "#c0b3a5", "#d5cdc3", "#eae5e1"],
  triadic: ["#1e1e15", "#3b3c2a", "#595a3f", "#777854", "#949669", "#aaab87", "#bfc0a5", "#d4d5c3", "#eaeae1"],
  analogous: ["#19151e", "#342a3c", "#4d3f5a", "#675478", "#826996", "#9a87ab", "#b3a5c0", "#cdc3d5", "#e5e1ea"],
  ...defaultCommonColors,
};

export const bouquetAphroditeLightTheme: ThemeObject = {
  colors: bouquetAphroditeLightColors,
  spacing: bouquetAphroditeSpacing,
  typography: bouquetAphroditeTypography,
};

export const bouquetAphroditeDarkTheme: ThemeObject = {
  colors: bouquetAphroditeDarkColors,
  spacing: bouquetAphroditeSpacing,
  typography: bouquetAphroditeTypography,
};

export { bouquetAphroditeSpacing, bouquetAphroditeTypography };

export const bouquetAphroditeTheme: MultiThemeProviderProps["themes"] = [
  {
    name: "dark",
    theme: bouquetAphroditeDarkTheme,
  },
  {
    name: "light",
    theme: bouquetAphroditeLightTheme,
  },
];
