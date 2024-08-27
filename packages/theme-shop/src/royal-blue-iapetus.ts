import { ColorsObject, MultiThemeProviderProps, ThemeObject } from "@kami-ui/types";
import {
  defaultSpacing as royalBlueIapetusSpacing,
  defaultTypography as royalBlueIapetusTypography,
  defaultCommonColors,
} from "./default";

export const royalBlueIapetusLightColors: ColorsObject = {
  text: ["#d7d3f8", "#afa8f0", "#877ce9", "#5f51e1", "#3725da", "#2c1eae", "#211683", "#160f57", "#0b072c"],
  background: ["#d9d4f7", "#b3a8f0", "#8d7de8", "#6752e0", "#4126d9", "#341fad", "#271782", "#1a0f57", "#0d082b"],
  primary: ["#d5d3f8", "#aba8f0", "#827ce9", "#5851e1", "#2e25da", "#251eae", "#1c1683", "#120f57", "#09072c"],
  secondary: ["#eff8d3", "#dff0a8", "#cfe97c", "#c0e151", "#b0da25", "#8dae1e", "#698316", "#46570f", "#232c07"],
  accent: ["#d3f8e0", "#a8f0c1", "#7ce9a2", "#51e183", "#25da64", "#1eae50", "#16833c", "#0f5728", "#072c14"],
  complementary: ["#f6f8d3", "#ecf0a8", "#e4e97c", "#dae151", "#d1da25", "#a7ae1e", "#7e8316", "#53570f", "#2a2c07"],
  tetradic: ["#f8d3e4", "#f0a8c8", "#e97cad", "#e15192", "#da2576", "#ae1e5f", "#831647", "#570f2f", "#2c0718"],
  triadic: ["#f8d5d3", "#f0aca8", "#e9817c", "#e15851", "#da2e25", "#ae251e", "#831b16", "#57130f", "#2c0907"],
  analogous: ["#d3e4f8", "#a8c8f0", "#7cade9", "#5192e1", "#2576da", "#1e5fae", "#164783", "#0f2f57", "#07182c"],
  ...defaultCommonColors,
};

export const royalBlueIapetusDarkColors: ColorsObject = {
  text: ["#0b072c", "#160f57", "#211683", "#2c1eae", "#3725da", "#5f51e1", "#877ce9", "#afa8f0", "#d7d3f8"],
  background: ["#0d082b", "#1a0f57", "#271782", "#341fad", "#4126d9", "#6752e0", "#8d7de8", "#b3a8f0", "#d9d4f7"],
  primary: ["#09072c", "#120f57", "#1c1683", "#251eae", "#2e25da", "#5851e1", "#827ce9", "#aba8f0", "#d5d3f8"],
  secondary: ["#232c07", "#46570f", "#698316", "#8dae1e", "#b0da25", "#c0e151", "#cfe97c", "#dff0a8", "#eff8d3"],
  accent: ["#072c14", "#0f5728", "#16833c", "#1eae50", "#25da64", "#51e183", "#7ce9a2", "#a8f0c1", "#d3f8e0"],
  complementary: ["#2a2c07", "#53570f", "#7e8316", "#a7ae1e", "#d1da25", "#dae151", "#e4e97c", "#ecf0a8", "#f6f8d3"],
  tetradic: ["#2c0718", "#570f2f", "#831647", "#ae1e5f", "#da2576", "#e15192", "#e97cad", "#f0a8c8", "#f8d3e4"],
  triadic: ["#2c0907", "#57130f", "#831b16", "#ae251e", "#da2e25", "#e15851", "#e9817c", "#f0aca8", "#f8d5d3"],
  analogous: ["#07182c", "#0f2f57", "#164783", "#1e5fae", "#2576da", "#5192e1", "#7cade9", "#a8c8f0", "#d3e4f8"],
  ...defaultCommonColors,
};

export const royalBlueIapetusLightTheme: ThemeObject = {
  colors: royalBlueIapetusLightColors,
  spacing: royalBlueIapetusSpacing,
  typography: royalBlueIapetusTypography,
};

export const royalBlueIapetusDarkTheme: ThemeObject = {
  colors: royalBlueIapetusDarkColors,
  spacing: royalBlueIapetusSpacing,
  typography: royalBlueIapetusTypography,
};

export { royalBlueIapetusSpacing, royalBlueIapetusTypography };

export const royalBlueIapetusTheme: MultiThemeProviderProps["themes"] = [
  {
    name: "dark",
    theme: royalBlueIapetusDarkTheme,
  },
  {
    name: "light",
    theme: royalBlueIapetusLightTheme,
  },
];
