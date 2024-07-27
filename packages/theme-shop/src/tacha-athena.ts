import { ColorsObject, MultiThemeProviderProps, ThemeObject } from "@kami-ui/react-theme-common";
import {
  defaultSpacing as tachaAthenaSpacing,
  defaultTypography as tachaAthenaTypography,
  defaultCommonColors,
} from "./default";

export const tachaAthenaLightColors: ColorsObject = {
  text: ["#f4f4d7", "#e8e8b0", "#dddd88", "#d1d161", "#c6c639", "#9e9e2e", "#777722", "#4f4f17", "#28280b"],
  background: ["#f5f0d6", "#ebe0ad", "#e0d185", "#d6c25c", "#ccb333", "#a38f29", "#7a6b1f", "#524714", "#29240a"],
  primary: ["#f4f0d7", "#e8e1b0", "#ddd188", "#d1c261", "#c6b339", "#9e8f2e", "#776b22", "#4f4817", "#28240b"],
  secondary: ["#d8f3f2", "#b0e8e5", "#89dcd8", "#62d0cb", "#3bc4bd", "#2f9d98", "#237672", "#174f4c", "#0c2726"],
  accent: ["#d7e2f4", "#b0c5e8", "#88a7dd", "#618ad1", "#396dc6", "#2e579e", "#224177", "#172c4f", "#0b1628"],
  complementary: ["#d7dbf4", "#b0b7e8", "#8893dd", "#6170d1", "#394cc6", "#2e3d9e", "#222d77", "#171e4f", "#0b0f28"],
  tetradic: ["#d7f4e2", "#b0e8c5", "#88dda7", "#61d18a", "#39c66d", "#2e9e57", "#227741", "#174f2c", "#0b2816"],
  triadic: ["#d7f4f0", "#b0e8e1", "#88ddd2", "#61d1c2", "#39c6b3", "#2e9e8f", "#22776c", "#174f48", "#0b2824"],
  analogous: ["#f4e2d7", "#e8c5b0", "#dda788", "#d18a61", "#c66d39", "#9e572e", "#774122", "#4f2c17", "#28160b"],
  ...defaultCommonColors,
};

export const tachaAthenaDarkColors: ColorsObject = {
  text: ["#28280b", "#4f4f17", "#777722", "#9e9e2e", "#c6c639", "#d1d161", "#dddd88", "#e8e8b0", "#f4f4d7"],
  background: ["#29240a", "#524714", "#7a6b1f", "#a38f29", "#ccb333", "#d6c25c", "#e0d185", "#ebe0ad", "#f5f0d6"],
  primary: ["#28240b", "#4f4817", "#776b22", "#9e8f2e", "#c6b339", "#d1c261", "#ddd188", "#e8e1b0", "#f4f0d7"],
  secondary: ["#0b2827", "#174f4d", "#227774", "#2e9e9a", "#39c6c1", "#61d1cd", "#88ddda", "#b0e8e6", "#d7f4f3"],
  accent: ["#0b1628", "#172c4f", "#224177", "#2e579e", "#396dc6", "#618ad1", "#88a7dd", "#b0c5e8", "#d7e2f4"],
  complementary: ["#0b0f28", "#171e4f", "#222d77", "#2e3d9e", "#394cc6", "#6170d1", "#8893dd", "#b0b7e8", "#d7dbf4"],
  tetradic: ["#0b2816", "#174f2c", "#227741", "#2e9e57", "#39c66d", "#61d18a", "#88dda7", "#b0e8c5", "#d7f4e2"],
  triadic: ["#0b2824", "#174f48", "#22776c", "#2e9e8f", "#39c6b3", "#61d1c2", "#88ddd2", "#b0e8e1", "#d7f4f0"],
  analogous: ["#28160b", "#4f2c17", "#774122", "#9e572e", "#c66d39", "#d18a61", "#dda788", "#e8c5b0", "#f4e2d7"],
  ...defaultCommonColors,
};

export const tachaAthenaLightTheme: ThemeObject = {
  colors: tachaAthenaLightColors,
  spacing: tachaAthenaSpacing,
  typography: tachaAthenaTypography,
};

export const tachaAthenaDarkTheme: ThemeObject = {
  colors: tachaAthenaDarkColors,
  spacing: tachaAthenaSpacing,
  typography: tachaAthenaTypography,
};

export { tachaAthenaSpacing, tachaAthenaTypography };

export const tachaAthenaTheme: MultiThemeProviderProps["themes"] = [
  {
    name: "dark",
    theme: tachaAthenaDarkTheme,
  },
  {
    name: "light",
    theme: tachaAthenaLightTheme,
  },
];
