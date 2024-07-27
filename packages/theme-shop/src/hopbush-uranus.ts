import { ColorsObject, MultiThemeProviderProps, ThemeObject } from "@kami-ui/react-theme-common";
import {
  defaultSpacing as hopbushUranusSpacing,
  defaultTypography as hopbushUranusTypography,
  defaultCommonColors,
} from "./default";

export const hopbushUranusLightColors: ColorsObject = {
  text: ["#f5d6e6", "#ebadcc", "#e085b3", "#d65c99", "#cc3380", "#a32966", "#7a1f4d", "#521433", "#290a1a"],
  background: ["#f4d7e9", "#e9afd3", "#de87bd", "#d35fa7", "#c83790", "#a02c74", "#782157", "#50163a", "#280b1d"],
  primary: ["#f5d6e9", "#ebadd2", "#e184bc", "#d75ba5", "#cd328f", "#a42872", "#7b1e56", "#521439", "#290a1d"],
  secondary: ["#f5e4d6", "#eccaac", "#e2af83", "#d8955a", "#cf7a30", "#a56227", "#7c491d", "#533113", "#29180a"],
  accent: ["#f5efd6", "#ebe0ad", "#e1d084", "#d7c05b", "#cdb132", "#a48d28", "#7b6a1e", "#524714", "#29230a"],
  complementary: ["#d6f5e2", "#adebc6", "#84e1a9", "#5bd78d", "#32cd70", "#28a45a", "#1e7b43", "#14522d", "#0a2916"],
  tetradic: ["#f5f1d6", "#ebe5ad", "#e1d884", "#d7cb5b", "#cdbe32", "#a49828", "#7b721e", "#524c14", "#29250a"],
  triadic: ["#e9f5d6", "#d2ebad", "#bce184", "#a5d75b", "#8fcd32", "#72a428", "#567b1e", "#395214", "#1d290a"],
  analogous: ["#f1d6f5", "#e5adeb", "#d884e1", "#cb5bd7", "#be32cd", "#9828a4", "#721e7b", "#4c1452", "#250a29"],
  ...defaultCommonColors,
};

export const hopbushUranusDarkColors: ColorsObject = {
  text: ["#290a1a", "#521433", "#7a1f4d", "#a32966", "#cc3380", "#d65c99", "#e085b3", "#ebadcc", "#f5d6e6"],
  background: ["#290a1f", "#52143d", "#7a1f5c", "#a3297a", "#cc3399", "#d65cad", "#e085c2", "#ebadd6", "#f5d6eb"],
  primary: ["#290a1d", "#521439", "#7b1e56", "#a42872", "#cd328f", "#d75ba5", "#e184bc", "#ebadd2", "#f5d6e9"],
  secondary: ["#29180a", "#533113", "#7c491d", "#a56227", "#cf7a30", "#d8955a", "#e2af83", "#eccaac", "#f5e4d6"],
  accent: ["#29230a", "#524714", "#7b6a1e", "#a48d28", "#cdb132", "#d7c05b", "#e1d084", "#ebe0ad", "#f5efd6"],
  complementary: ["#0a2916", "#14522d", "#1e7b43", "#28a45a", "#32cd70", "#5bd78d", "#84e1a9", "#adebc6", "#d6f5e2"],
  tetradic: ["#29250a", "#524c14", "#7b721e", "#a49828", "#cdbe32", "#d7cb5b", "#e1d884", "#ebe5ad", "#f5f1d6"],
  triadic: ["#1d290a", "#395214", "#567b1e", "#72a428", "#8fcd32", "#a5d75b", "#bce184", "#d2ebad", "#e9f5d6"],
  analogous: ["#250a29", "#4c1452", "#721e7b", "#9828a4", "#be32cd", "#cb5bd7", "#d884e1", "#e5adeb", "#f1d6f5"],
  ...defaultCommonColors,
};

export const hopbushUranusLightTheme: ThemeObject = {
  colors: hopbushUranusLightColors,
  spacing: hopbushUranusSpacing,
  typography: hopbushUranusTypography,
};

export const hopbushUranusDarkTheme: ThemeObject = {
  colors: hopbushUranusDarkColors,
  spacing: hopbushUranusSpacing,
  typography: hopbushUranusTypography,
};

export { hopbushUranusSpacing, hopbushUranusTypography };

export const hopbushUranusTheme: MultiThemeProviderProps["themes"] = [
  {
    name: "dark",
    theme: hopbushUranusDarkTheme,
  },
  {
    name: "light",
    theme: hopbushUranusLightTheme,
  },
];
