import { ColorsObject, MultiThemeProviderProps, ThemeObject } from "@kami-ui/types";
import {
  defaultSpacing as coniferEurybiaSpacing,
  defaultTypography as coniferEurybiaTypography,
  defaultCommonColors,
} from "./default";

export const coniferEurybiaLightColors: ColorsObject = {
  text: ["#e3f7d4", "#c7f0a8", "#abe87d", "#8fe052", "#74d926", "#5cad1f", "#458217", "#2e570f", "#172b08"],
  background: ["#e6f7d4", "#cceeaa", "#b3e67f", "#99dd55", "#80d52a", "#66aa22", "#4d8019", "#335511", "#1a2b08"],
  primary: ["#e4f8d3", "#c8f1a7", "#adea7b", "#92e250", "#76db24", "#5faf1d", "#478415", "#2f580e", "#182c07"],
  secondary: ["#d3f8e4", "#a7f1c8", "#7beaad", "#50e292", "#24db76", "#1daf5f", "#158447", "#0e582f", "#072c18"],
  accent: ["#d3f8f0", "#a7f1e1", "#7bead2", "#50e2c3", "#24dbb4", "#1daf90", "#15846c", "#0e5848", "#072c24"],
  complementary: ["#e7d3f8", "#d0a7f1", "#b87bea", "#a050e2", "#8924db", "#6d1daf", "#521584", "#370e58", "#1b072c"],
  tetradic: ["#d3f7f8", "#a7edf1", "#7be4ea", "#50dbe2", "#24d2db", "#1da8af", "#157e84", "#0e5458", "#072b2c"],
  triadic: ["#d3e4f8", "#a7c8f1", "#7badea", "#5092e2", "#2476db", "#1d5faf", "#154784", "#0e2f58", "#07182c"],
  analogous: ["#f7f8d3", "#edf1a7", "#e4ea7b", "#dbe250", "#d2db24", "#a8af1d", "#7e8415", "#54580e", "#2b2c07"],
  ...defaultCommonColors,
};

export const coniferEurybiaDarkColors: ColorsObject = {
  text: ["#182c07", "#2f570f", "#478316", "#5fae1e", "#76da25", "#92e151", "#ade97c", "#c8f0a8", "#e4f8d3"],
  background: ["#172a09", "#2f5412", "#467d1c", "#5da725", "#75d12e", "#90da58", "#ace382", "#c8edab", "#e3f6d5"],
  primary: ["#182c07", "#2f580e", "#478415", "#5faf1d", "#76db24", "#92e250", "#adea7b", "#c8f1a7", "#e4f8d3"],
  secondary: ["#072c18", "#0f572f", "#168347", "#1eae5f", "#25da76", "#51e192", "#7ce9ad", "#a8f0c8", "#d3f8e4"],
  accent: ["#072c24", "#0e5848", "#15846c", "#1daf90", "#24dbb4", "#50e2c3", "#7bead2", "#a7f1e1", "#d3f8f0"],
  complementary: ["#1b072c", "#370e58", "#521584", "#6d1daf", "#8924db", "#a050e2", "#b87bea", "#d0a7f1", "#e7d3f8"],
  tetradic: ["#072b2c", "#0e5458", "#157e84", "#1da8af", "#24d2db", "#50dbe2", "#7be4ea", "#a7edf1", "#d3f7f8"],
  triadic: ["#07182c", "#0e2f58", "#154784", "#1d5faf", "#2476db", "#5092e2", "#7badea", "#a7c8f1", "#d3e4f8"],
  analogous: ["#2b2c07", "#54580e", "#7e8415", "#a8af1d", "#d2db24", "#dbe250", "#e4ea7b", "#edf1a7", "#f7f8d3"],
  ...defaultCommonColors,
};

export const coniferEurybiaLightTheme: ThemeObject = {
  colors: coniferEurybiaLightColors,
  spacing: coniferEurybiaSpacing,
  typography: coniferEurybiaTypography,
};

export const coniferEurybiaDarkTheme: ThemeObject = {
  colors: coniferEurybiaDarkColors,
  spacing: coniferEurybiaSpacing,
  typography: coniferEurybiaTypography,
};

export { coniferEurybiaSpacing, coniferEurybiaTypography };

export const coniferEurybiaTheme: MultiThemeProviderProps["themes"] = [
  {
    name: "dark",
    theme: coniferEurybiaDarkTheme,
  },
  {
    name: "light",
    theme: coniferEurybiaLightTheme,
  },
];
