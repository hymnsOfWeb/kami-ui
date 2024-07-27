import { ColorsObject, MultiThemeProviderProps, ThemeObject } from "@kami-ui/react-theme-common";
import {
  defaultSpacing as downyClymeneSpacing,
  defaultTypography as downyClymeneTypography,
  defaultCommonColors,
} from "./default";

export const downyClymeneLightColors: ColorsObject = {
  text: ["#dbf0ec", "#b6e2d8", "#92d3c5", "#6dc5b2", "#49b69f", "#3a927f", "#2c6d5f", "#1d493f", "#0f2420"],
  background: ["#d9f2ec", "#b3e6d9", "#8cd9c6", "#66ccb3", "#40bf9f", "#339980", "#267360", "#194d40", "#0d2620"],
  primary: ["#d8f3ed", "#b1e7dc", "#8bdaca", "#64ceb9", "#3dc2a7", "#319b86", "#257464", "#184e43", "#0c2721"],
  secondary: ["#d7f4ee", "#afe9dd", "#87decd", "#5fd3bc", "#37c8ab", "#2ca089", "#217867", "#165044", "#0b2822"],
  accent: ["#d5f6ef", "#acecdf", "#82e3cf", "#59d9c0", "#2fd0b0", "#26a68d", "#1c7d69", "#135346", "#092a23"],
  complementary: ["#f3d8de", "#e7b1bc", "#da8b9b", "#ce6479", "#c23d58", "#9b3146", "#742535", "#4e1823", "#270c12"],
  tetradic: ["#e0d8f3", "#c1b1e7", "#a38bda", "#8464ce", "#653dc2", "#51319b", "#3d2574", "#28184e", "#140c27"],
  triadic: ["#edd8f3", "#dcb1e7", "#ca8bda", "#b964ce", "#a73dc2", "#86319b", "#642574", "#43184e", "#210c27"],
  analogous: ["#d8f3e0", "#b1e7c1", "#8bdaa3", "#64ce84", "#3dc265", "#319b51", "#25743d", "#184e28", "#0c2714"],
  ...defaultCommonColors,
};

export const downyClymeneDarkColors: ColorsObject = {
  text: ["#0f2420", "#1d493f", "#2c6d5f", "#3a927f", "#49b69f", "#6dc5b2", "#92d3c5", "#b6e2d8", "#dbf0ec"],
  background: ["#0e251c", "#1c4a38", "#2a6f53", "#38946f", "#46b98b", "#6bc7a2", "#90d5b9", "#b5e3d1", "#daf1e8"],
  primary: ["#0c2721", "#184e43", "#257464", "#319b86", "#3dc2a7", "#64ceb9", "#8bdaca", "#b1e7dc", "#d8f3ed"],
  secondary: ["#0b2822", "#165044", "#217867", "#2ca089", "#37c8ab", "#5fd3bc", "#87decd", "#afe9dd", "#d7f4ee"],
  accent: ["#092a23", "#135346", "#1c7d69", "#26a68d", "#2fd0b0", "#59d9c0", "#82e3cf", "#acecdf", "#d5f6ef"],
  complementary: ["#270c12", "#4e1823", "#742535", "#9b3146", "#c23d58", "#ce6479", "#da8b9b", "#e7b1bc", "#f3d8de"],
  tetradic: ["#140c27", "#28184e", "#3d2574", "#51319b", "#653dc2", "#8464ce", "#a38bda", "#c1b1e7", "#e0d8f3"],
  triadic: ["#210c27", "#43184e", "#642574", "#86319b", "#a73dc2", "#b964ce", "#ca8bda", "#dcb1e7", "#edd8f3"],
  analogous: ["#0c2714", "#184e28", "#25743d", "#319b51", "#3dc265", "#64ce84", "#8bdaa3", "#b1e7c1", "#d8f3e0"],
  ...defaultCommonColors,
};

export const downyClymeneLightTheme: ThemeObject = {
  colors: downyClymeneLightColors,
  spacing: downyClymeneSpacing,
  typography: downyClymeneTypography,
};

export const downyClymeneDarkTheme: ThemeObject = {
  colors: downyClymeneDarkColors,
  spacing: downyClymeneSpacing,
  typography: downyClymeneTypography,
};

export { downyClymeneSpacing, downyClymeneTypography };

export const downyClymeneTheme: MultiThemeProviderProps["themes"] = [
  {
    name: "dark",
    theme: downyClymeneDarkTheme,
  },
  {
    name: "light",
    theme: downyClymeneLightTheme,
  },
];
