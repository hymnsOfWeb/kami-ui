import { ColorsObject, MultiThemeProviderProps, ThemeObject } from "@kami-ui/react-theme-common";
import {
  defaultSpacing as fuchsiaPinkCirceSpacing,
  defaultTypography as fuchsiaPinkCirceTypography,
  defaultCommonColors,
} from "./default";

export const fuchsiaPinkCirceLightColors: ColorsObject = {
  text: ["#e8e3e8", "#d2c6d2", "#bbaabb", "#a48ea4", "#8e718e", "#715b71", "#554455", "#392d39", "#1c171c"],
  background: ["#ecdfec", "#d9bfd9", "#c69fc6", "#b47eb4", "#a15ea1", "#814b81", "#603960", "#402640", "#201320"],
  primary: ["#f0dbf0", "#e1b7e1", "#d392d2", "#c46ec2", "#b54ab3", "#913b8f", "#6d2c6c", "#481e48", "#240f24"],
  secondary: ["#f4d7f4", "#e9afe8", "#de87dd", "#d35fd1", "#c837c6", "#a02c9e", "#782177", "#50164f", "#280b28"],
  accent: ["#f8d3f7", "#f1a7ef", "#ea7be8", "#e250e0", "#db24d8", "#af1dad", "#841582", "#580e56", "#2c072b"],
  complementary: ["#dbf0db", "#b7e1b7", "#92d393", "#6ec46f", "#4ab54c", "#3b913c", "#2c6d2d", "#1e481e", "#0f240f"],
  tetradic: ["#f0e6db", "#e1ccb7", "#d3b492", "#c49a6e", "#b5814a", "#91673b", "#6d4e2c", "#48331e", "#24190f"],
  triadic: ["#f0f0db", "#e1e1b7", "#d2d392", "#c3c46e", "#b3b54a", "#90913b", "#6c6d2c", "#48481e", "#24240f"],
  analogous: ["#e6dbf0", "#ccb7e1", "#b492d3", "#9a6ec4", "#814ab5", "#673b91", "#4e2c6d", "#331e48", "#190f24"],
  ...defaultCommonColors,
};

export const fuchsiaPinkCirceDarkColors: ColorsObject = {
  text: ["#1c171c", "#392d39", "#554455", "#715b71", "#8e718e", "#a48ea4", "#bbaabb", "#d2c6d2", "#e8e3e8"],
  background: ["#201320", "#3f273f", "#5f3a5f", "#7e4e7e", "#9e619e", "#b181b1", "#c5a0c5", "#d8c0d8", "#ecdfec"],
  primary: ["#240f24", "#481e48", "#6d2c6c", "#913b8f", "#b54ab3", "#c46ec2", "#d392d2", "#e1b7e1", "#f0dbf0"],
  secondary: ["#280b28", "#50164f", "#782177", "#a02c9e", "#c837c6", "#d35fd1", "#de87dd", "#e9afe8", "#f4d7f4"],
  accent: ["#2c072b", "#580e56", "#841582", "#af1dad", "#db24d8", "#e250e0", "#ea7be8", "#f1a7ef", "#f8d3f7"],
  complementary: ["#0f240f", "#1e481e", "#2c6d2d", "#3b913c", "#4ab54c", "#6ec46f", "#92d393", "#b7e1b7", "#dbf0db"],
  tetradic: ["#24190f", "#48331e", "#6d4e2c", "#91673b", "#b5814a", "#c49a6e", "#d3b492", "#e1ccb7", "#f0e6db"],
  triadic: ["#24240f", "#48481e", "#6c6d2c", "#90913b", "#b3b54a", "#c3c46e", "#d2d392", "#e1e1b7", "#f0f0db"],
  analogous: ["#190f24", "#331e48", "#4e2c6d", "#673b91", "#814ab5", "#9a6ec4", "#b492d3", "#ccb7e1", "#e6dbf0"],
  ...defaultCommonColors,
};

export const fuchsiaPinkCirceLightTheme: ThemeObject = {
  colors: fuchsiaPinkCirceLightColors,
  spacing: fuchsiaPinkCirceSpacing,
  typography: fuchsiaPinkCirceTypography,
};

export const fuchsiaPinkCirceDarkTheme: ThemeObject = {
  colors: fuchsiaPinkCirceDarkColors,
  spacing: fuchsiaPinkCirceSpacing,
  typography: fuchsiaPinkCirceTypography,
};

export { fuchsiaPinkCirceSpacing, fuchsiaPinkCirceTypography };

export const fuchsiaPinkCirceTheme: MultiThemeProviderProps["themes"] = [
  {
    name: "dark",
    theme: fuchsiaPinkCirceDarkTheme,
  },
  {
    name: "light",
    theme: fuchsiaPinkCirceLightTheme,
  },
];
