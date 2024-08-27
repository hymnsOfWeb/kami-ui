import { ColorsObject, MultiThemeProviderProps, ThemeObject } from "@kami-ui/types";
import {
  defaultSpacing as mantisChironSpacing,
  defaultTypography as mantisChironTypography,
  defaultCommonColors,
} from "./default";

export const mantisChironLightColors: ColorsObject = {
  text: ["#e6eae1", "#ccd4c4", "#b3bfa6", "#99a989", "#80946b", "#667656", "#4d5940", "#333b2b", "#1a1e15"],
  background: ["#e4eedd", "#c9ddbb", "#adcc99", "#92bb77", "#77aa55", "#5f8844", "#476633", "#304422", "#182211"],
  primary: ["#e2f0db", "#c5e2b6", "#a9d392", "#8cc56d", "#6fb649", "#59923a", "#436d2c", "#2c491d", "#16240f"],
  secondary: ["#e1f4d7", "#c3e9af", "#a6dd88", "#88d260", "#6ac738", "#559f2d", "#407722", "#2a5016", "#15280b"],
  accent: ["#e0f7d4", "#c1f0a8", "#a2e87d", "#84e052", "#65d926", "#51ad1f", "#3c8217", "#28570f", "#142b08"],
  complementary: ["#e9dbf0", "#d3b6e2", "#bc92d3", "#a66dc5", "#9049b6", "#733a92", "#562c6d", "#3a1d49", "#1d0f24"],
  tetradic: ["#dbedf0", "#b6dbe2", "#92c9d3", "#6db8c5", "#49a6b6", "#3a8592", "#2c636d", "#1d4249", "#0f2024"],
  triadic: ["#dbe2f0", "#b6c5e2", "#92a9d3", "#6d8cc5", "#496fb6", "#3a5992", "#2c436d", "#1d2c49", "#0f1624"],
  analogous: ["#edf0db", "#dbe2b6", "#c9d392", "#b8c56d", "#a6b649", "#85923a", "#636d2c", "#42491d", "#20240f"],
  ...defaultCommonColors,
};

export const mantisChironDarkColors: ColorsObject = {
  text: ["#1a1e15", "#333c2a", "#4d5a3f", "#667755", "#80956a", "#99aa88", "#b3c0a5", "#ccd5c3", "#e6eae1"],
  background: ["#182211", "#304422", "#476633", "#5f8844", "#77aa55", "#92bb77", "#adcc99", "#c9ddbb", "#e4eedd"],
  primary: ["#16240f", "#2c491d", "#436d2c", "#59923a", "#6fb649", "#8cc56d", "#a9d392", "#c5e2b6", "#e2f0db"],
  secondary: ["#15280b", "#2a5016", "#407722", "#559f2d", "#6ac738", "#88d260", "#a6dd88", "#c3e9af", "#e1f4d7"],
  accent: ["#142b08", "#28570f", "#3c8217", "#51ad1f", "#65d926", "#84e052", "#a2e87d", "#c1f0a8", "#e0f7d4"],
  complementary: ["#1d0f24", "#3a1d49", "#562c6d", "#733a92", "#9049b6", "#a66dc5", "#bc92d3", "#d3b6e2", "#e9dbf0"],
  tetradic: ["#0f2024", "#1d4249", "#2c636d", "#3a8592", "#49a6b6", "#6db8c5", "#92c9d3", "#b6dbe2", "#dbedf0"],
  triadic: ["#0f1624", "#1d2c49", "#2c436d", "#3a5992", "#496fb6", "#6d8cc5", "#92a9d3", "#b6c5e2", "#dbe2f0"],
  analogous: ["#20240f", "#42491d", "#636d2c", "#85923a", "#a6b649", "#b8c56d", "#c9d392", "#dbe2b6", "#edf0db"],
  ...defaultCommonColors,
};

export const mantisChironLightTheme: ThemeObject = {
  colors: mantisChironLightColors,
  spacing: mantisChironSpacing,
  typography: mantisChironTypography,
};

export const mantisChironDarkTheme: ThemeObject = {
  colors: mantisChironDarkColors,
  spacing: mantisChironSpacing,
  typography: mantisChironTypography,
};

export { mantisChironSpacing, mantisChironTypography };

export const mantisChironTheme: MultiThemeProviderProps["themes"] = [
  {
    name: "dark",
    theme: mantisChironDarkTheme,
  },
  {
    name: "light",
    theme: mantisChironLightTheme,
  },
];
