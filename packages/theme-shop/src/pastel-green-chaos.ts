import { ColorsObject, MultiThemeProviderProps, ThemeObject } from "@kami-ui/types";
import {
  defaultSpacing as pastelGreenChaosSpacing,
  defaultTypography as pastelGreenChaosTypography,
  defaultCommonColors,
} from "./default";

export const pastelGreenChaosLightColors: ColorsObject = {
  text: ["#d5fad1", "#acf6a2", "#82f174", "#59ed45", "#2fe817", "#26ba12", "#1c8b0e", "#135d09", "#092e05"],
  background: ["#d5fbd0", "#aaf6a2", "#80f273", "#55ee44", "#2be916", "#22bb11", "#1a8c0d", "#115d09", "#092f04"],
  primary: ["#d4f9d2", "#aaf4a4", "#7fee77", "#54e949", "#29e31c", "#21b616", "#198811", "#115b0b", "#082d06"],
  secondary: ["#d2f9f4", "#a5f3e9", "#78edde", "#4ae8d3", "#1de2c7", "#17b5a0", "#128778", "#0c5a50", "#062d28"],
  accent: ["#d2f3f9", "#a5e6f3", "#78daed", "#4acde8", "#1dc1e2", "#179ab5", "#127487", "#0c4d5a", "#06272d"],
  complementary: ["#f7d2f9", "#efa4f4", "#e677ee", "#de49e9", "#d61ce3", "#ab16b6", "#801188", "#560b5b", "#2b062d"],
  tetradic: ["#d2e7f9", "#a4d1f4", "#77baee", "#49a4e9", "#1c8de3", "#1671b6", "#115488", "#0b385b", "#061b2d"],
  triadic: ["#d2d4f9", "#a4a9f4", "#777fee", "#4954e9", "#1c29e3", "#1621b6", "#111988", "#0b105b", "#06082d"],
  analogous: ["#e7f9d2", "#d1f4a4", "#baee77", "#a4e949", "#8de31c", "#71b616", "#548811", "#385b0b", "#1b2d06"],
  ...defaultCommonColors,
};

export const pastelGreenChaosDarkColors: ColorsObject = {
  text: ["#0a2e05", "#145c0a", "#1e8a0f", "#27b814", "#31e619", "#5aeb47", "#84f075", "#adf5a3", "#d6fad1"],
  background: ["#0a2e05", "#145c0a", "#1e8a0f", "#27b814", "#31e619", "#5aeb47", "#84f075", "#adf5a3", "#d6fad1"],
  primary: ["#082d06", "#115b0b", "#198811", "#21b616", "#29e31c", "#54e949", "#7fee77", "#aaf4a4", "#d4f9d2"],
  secondary: ["#062d28", "#0c5a50", "#128778", "#17b5a0", "#1de2c7", "#4ae8d3", "#78edde", "#a5f3e9", "#d2f9f4"],
  accent: ["#06272d", "#0c4d5a", "#127487", "#179ab5", "#1dc1e2", "#4acde8", "#78daed", "#a5e6f3", "#d2f3f9"],
  complementary: ["#2b062d", "#560b5b", "#801188", "#ab16b6", "#d61ce3", "#de49e9", "#e677ee", "#efa4f4", "#f7d2f9"],
  tetradic: ["#061b2d", "#0b385b", "#115488", "#1671b6", "#1c8de3", "#49a4e9", "#77baee", "#a4d1f4", "#d2e7f9"],
  triadic: ["#06082d", "#0b105b", "#111988", "#1621b6", "#1c29e3", "#4954e9", "#777fee", "#a4a9f4", "#d2d4f9"],
  analogous: ["#1b2d06", "#385b0b", "#548811", "#71b616", "#8de31c", "#a4e949", "#baee77", "#d1f4a4", "#e7f9d2"],
  ...defaultCommonColors,
};

export const pastelGreenChaosLightTheme: ThemeObject = {
  colors: pastelGreenChaosLightColors,
  spacing: pastelGreenChaosSpacing,
  typography: pastelGreenChaosTypography,
};

export const pastelGreenChaosDarkTheme: ThemeObject = {
  colors: pastelGreenChaosDarkColors,
  spacing: pastelGreenChaosSpacing,
  typography: pastelGreenChaosTypography,
};

export { pastelGreenChaosSpacing, pastelGreenChaosTypography };

export const pastelGreenChaosTheme: MultiThemeProviderProps["themes"] = [
  {
    name: "dark",
    theme: pastelGreenChaosDarkTheme,
  },
  {
    name: "light",
    theme: pastelGreenChaosLightTheme,
  },
];
