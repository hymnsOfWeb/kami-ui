import { ColorsObject, MultiThemeProviderProps, ThemeObject } from "@kami-ui/react-theme-common";
import {
  defaultSpacing as hopbushNemesisSpacing,
  defaultTypography as hopbushNemesisTypography,
  defaultCommonColors,
} from "./default";

export const hopbushNemesisLightColors: ColorsObject = {
  text: ["#f1dae6", "#e3b5ce", "#d590b5", "#c76b9c", "#b94683", "#943869", "#6f2a4f", "#4a1c35", "#250e1a"],
  background: ["#f2d9e6", "#e6b3cc", "#d98cb3", "#cc6699", "#bf4080", "#993366", "#73264d", "#4d1933", "#260d1a"],
  primary: ["#f0dbe7", "#e2b6d0", "#d392b8", "#c56da0", "#b64989", "#923a6d", "#6d2c52", "#491d37", "#240f1b"],
  secondary: ["#daf1de", "#b6e2be", "#91d49d", "#6cc67d", "#47b85c", "#39934a", "#2b6e37", "#1d4925", "#0e2512"],
  accent: ["#dbecf0", "#b6dae2", "#92c7d3", "#6db5c5", "#49a2b6", "#3a8292", "#2c616d", "#1d4149", "#0f2024"],
  complementary: ["#dbf0e4", "#b6e2c8", "#92d3ad", "#6dc592", "#49b676", "#3a925f", "#2c6d47", "#1d492f", "#0f2418"],
  tetradic: ["#f0efdb", "#e2deb6", "#d3ce92", "#c5be6d", "#b6ad49", "#928b3a", "#6d682c", "#49451d", "#24230f"],
  triadic: ["#e7f0db", "#d0e2b6", "#b8d392", "#a0c56d", "#89b649", "#6d923a", "#526d2c", "#37491d", "#1b240f"],
  analogous: ["#efdbf0", "#deb6e2", "#ce92d3", "#be6dc5", "#ad49b6", "#8b3a92", "#682c6d", "#451d49", "#230f24"],
  ...defaultCommonColors,
};

export const hopbushNemesisDarkColors: ColorsObject = {
  text: ["#250e1a", "#4b1b33", "#70294d", "#963666", "#bb4480", "#c96999", "#d68fb3", "#e4b4cc", "#f1dae6"],
  background: ["#250e17", "#4a1c2e", "#6f2a46", "#94385d", "#b94674", "#c76b90", "#d590ac", "#e3b5c7", "#f1dae3"],
  primary: ["#240f1b", "#491d37", "#6d2c52", "#923a6d", "#b64989", "#c56da0", "#d392b8", "#e2b6d0", "#f0dbe7"],
  secondary: ["#0e2512", "#1d4925", "#2b6e37", "#39934a", "#47b85c", "#6cc67d", "#91d49d", "#b6e2be", "#daf1de"],
  accent: ["#0f2024", "#1d4149", "#2c616d", "#3a8292", "#49a2b6", "#6db5c5", "#92c7d3", "#b6dae2", "#dbecf0"],
  complementary: ["#0f2418", "#1d492f", "#2c6d47", "#3a925f", "#49b676", "#6dc592", "#92d3ad", "#b6e2c8", "#dbf0e4"],
  tetradic: ["#24230f", "#49451d", "#6d682c", "#928b3a", "#b6ad49", "#c5be6d", "#d3ce92", "#e2deb6", "#f0efdb"],
  triadic: ["#1b240f", "#37491d", "#526d2c", "#6d923a", "#89b649", "#a0c56d", "#b8d392", "#d0e2b6", "#e7f0db"],
  analogous: ["#230f24", "#451d49", "#682c6d", "#8b3a92", "#ad49b6", "#be6dc5", "#ce92d3", "#deb6e2", "#efdbf0"],
  ...defaultCommonColors,
};

export const hopbushNemesisLightTheme: ThemeObject = {
  colors: hopbushNemesisLightColors,
  spacing: hopbushNemesisSpacing,
  typography: hopbushNemesisTypography,
};

export const hopbushNemesisDarkTheme: ThemeObject = {
  colors: hopbushNemesisDarkColors,
  spacing: hopbushNemesisSpacing,
  typography: hopbushNemesisTypography,
};

export { hopbushNemesisSpacing, hopbushNemesisTypography };

export const hopbushNemesisTheme: MultiThemeProviderProps["themes"] = [
  {
    name: "dark",
    theme: hopbushNemesisDarkTheme,
  },
  {
    name: "light",
    theme: hopbushNemesisLightTheme,
  },
];
