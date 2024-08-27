import { ColorsObject, MultiThemeProviderProps, ThemeObject } from "@kami-ui/types";
import {
  defaultSpacing as pictonBluePallasSpacing,
  defaultTypography as pictonBluePallasTypography,
  defaultCommonColors,
} from "./default";

export const pictonBluePallasLightColors: ColorsObject = {
  text: ["#d2e5f9", "#a6ccf2", "#79b2ec", "#4c99e6", "#207fdf", "#1966b3", "#134c86", "#0d3359", "#06192d"],
  background: ["#d2e4f9", "#a5c9f3", "#78afed", "#4b94e7", "#1f79e0", "#1861b4", "#124987", "#0c305a", "#06182d"],
  primary: ["#d3e7f8", "#a7cef1", "#7bb6ea", "#4f9ee3", "#2286dd", "#1c6bb0", "#155084", "#0e3558", "#071b2c"],
  secondary: ["#ead3f8", "#d5a7f1", "#c07bea", "#aa4fe3", "#9522dd", "#771cb0", "#5a1584", "#3c0e58", "#1e072c"],
  accent: ["#f6d3f8", "#eca7f1", "#e37bea", "#da4fe3", "#d022dd", "#a71cb0", "#7d1584", "#530e58", "#2a072c"],
  complementary: ["#f8e4d3", "#f1caa7", "#eaaf7b", "#e3944f", "#dd7922", "#b0611c", "#844915", "#58310e", "#2c1807"],
  tetradic: ["#f7d3f8", "#efa7f1", "#e67bea", "#de4fe3", "#d722dd", "#ab1cb0", "#801584", "#560e58", "#2b072c"],
  triadic: ["#f8d3e7", "#f1a7ce", "#ea7bb6", "#e34f9e", "#dd2286", "#b01c6b", "#841550", "#580e35", "#2c071b"],
  analogous: ["#d3f8f7", "#a7f1ef", "#7beae6", "#4fe3de", "#22ddd7", "#1cb0ab", "#158480", "#0e5856", "#072c2b"],
  ...defaultCommonColors,
};

export const pictonBluePallasDarkColors: ColorsObject = {
  text: ["#07182c", "#0e2f58", "#154784", "#1c5fb0", "#2276dd", "#4f92e3", "#7badea", "#a7c8f1", "#d3e4f8"],
  background: ["#07182c", "#0e2f58", "#154784", "#1c5fb0", "#2276dd", "#4f92e3", "#7badea", "#a7c8f1", "#d3e4f8"],
  primary: ["#071b2c", "#0e3558", "#155084", "#1c6bb0", "#2286dd", "#4f9ee3", "#7bb6ea", "#a7cef1", "#d3e7f8"],
  secondary: ["#1e072c", "#3c0e58", "#5a1584", "#771cb0", "#9522dd", "#aa4fe3", "#c07bea", "#d5a7f1", "#ead3f8"],
  accent: ["#2a072c", "#530e58", "#7d1584", "#a71cb0", "#d022dd", "#da4fe3", "#e37bea", "#eca7f1", "#f6d3f8"],
  complementary: ["#2c1807", "#58310e", "#844915", "#b0611c", "#dd7922", "#e3944f", "#eaaf7b", "#f1caa7", "#f8e4d3"],
  tetradic: ["#2b072c", "#560e58", "#801584", "#ab1cb0", "#d722dd", "#de4fe3", "#e67bea", "#efa7f1", "#f7d3f8"],
  triadic: ["#2c071b", "#580e35", "#841550", "#b01c6b", "#dd2286", "#e34f9e", "#ea7bb6", "#f1a7ce", "#f8d3e7"],
  analogous: ["#072c2b", "#0e5856", "#158480", "#1cb0ab", "#22ddd7", "#4fe3de", "#7beae6", "#a7f1ef", "#d3f8f7"],
  ...defaultCommonColors,
};

export const pictonBluePallasLightTheme: ThemeObject = {
  colors: pictonBluePallasLightColors,
  spacing: pictonBluePallasSpacing,
  typography: pictonBluePallasTypography,
};

export const pictonBluePallasDarkTheme: ThemeObject = {
  colors: pictonBluePallasDarkColors,
  spacing: pictonBluePallasSpacing,
  typography: pictonBluePallasTypography,
};

export { pictonBluePallasSpacing, pictonBluePallasTypography };

export const pictonBluePallasTheme: MultiThemeProviderProps["themes"] = [
  {
    name: "dark",
    theme: pictonBluePallasDarkTheme,
  },
  {
    name: "light",
    theme: pictonBluePallasLightTheme,
  },
];
