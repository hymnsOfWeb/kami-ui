import { ColorsObject, MultiThemeProviderProps, ThemeObject } from "@kami-ui/types";
import {
  defaultSpacing as danubeApolloSpacing,
  defaultTypography as danubeApolloTypography,
  defaultCommonColors,
} from "./default";

export const danubeApolloLightColors: ColorsObject = {
  text: ["#d9e6f2", "#b4cee4", "#8eb5d7", "#689cca", "#4284bd", "#356997", "#284f71", "#1b354b", "#0d1a26"],
  background: ["#d9e3f2", "#b3c7e6", "#8cabd9", "#668fcc", "#4073bf", "#335c99", "#264573", "#192e4d", "#0d1726"],
  primary: ["#d9e7f2", "#b4cfe4", "#8eb7d7", "#68a0ca", "#4288bd", "#356d97", "#285171", "#1b364b", "#0d1b26"],
  secondary: ["#f2d9e1", "#e4b4c2", "#d78ea4", "#ca6885", "#bd4267", "#973552", "#71283e", "#4b1b29", "#260d15"],
  accent: ["#f2e5d9", "#e4cab4", "#d7b08e", "#ca9668", "#bd7b42", "#976335", "#714a28", "#4b311b", "#26190d"],
  complementary: ["#f2e4d9", "#e4c9b4", "#d7ae8e", "#ca9268", "#bd7742", "#975f35", "#714828", "#4b301b", "#26180d"],
  tetradic: ["#f0d9f2", "#e1b4e4", "#d28ed7", "#c368ca", "#b542bd", "#903597", "#6c2871", "#481b4b", "#240d26"],
  triadic: ["#f2d9e7", "#e4b4cf", "#d78eb7", "#ca68a0", "#bd4288", "#97356d", "#712851", "#4b1b36", "#260d1b"],
  analogous: ["#d9f2f0", "#b4e4e1", "#8ed7d2", "#68cac3", "#42bdb5", "#359790", "#28716c", "#1b4b48", "#0d2624"],
  ...defaultCommonColors,
};

export const danubeApolloDarkColors: ColorsObject = {
  text: ["#0e1b25", "#1c374a", "#295270", "#376e95", "#4589ba", "#6aa1c8", "#8fb8d6", "#b5d0e3", "#dae7f1"],
  background: ["#0d1726", "#192e4d", "#264573", "#335c99", "#4073bf", "#668fcc", "#8cabd9", "#b3c7e6", "#d9e3f2"],
  primary: ["#0d1b26", "#1b364b", "#285171", "#356d97", "#4288bd", "#68a0ca", "#8eb7d7", "#b4cfe4", "#d9e7f2"],
  secondary: ["#260d15", "#4b1b2a", "#71283f", "#973554", "#bd4269", "#ca6887", "#d78ea5", "#e4b4c3", "#f2d9e1"],
  accent: ["#26190d", "#4b311b", "#714a28", "#976335", "#bd7b42", "#ca9668", "#d7b08e", "#e4cab4", "#f2e5d9"],
  complementary: ["#26180d", "#4b301b", "#714828", "#975f35", "#bd7742", "#ca9268", "#d7ae8e", "#e4c9b4", "#f2e4d9"],
  tetradic: ["#240d26", "#481b4b", "#6c2871", "#903597", "#b542bd", "#c368ca", "#d28ed7", "#e1b4e4", "#f0d9f2"],
  triadic: ["#260d1b", "#4b1b36", "#712851", "#97356d", "#bd4288", "#ca68a0", "#d78eb7", "#e4b4cf", "#f2d9e7"],
  analogous: ["#0d2624", "#1b4b48", "#28716c", "#359790", "#42bdb5", "#68cac3", "#8ed7d2", "#b4e4e1", "#d9f2f0"],
  ...defaultCommonColors,
};

export const danubeApolloLightTheme: ThemeObject = {
  colors: danubeApolloLightColors,
  spacing: danubeApolloSpacing,
  typography: danubeApolloTypography,
};

export const danubeApolloDarkTheme: ThemeObject = {
  colors: danubeApolloDarkColors,
  spacing: danubeApolloSpacing,
  typography: danubeApolloTypography,
};

export { danubeApolloSpacing, danubeApolloTypography };

export const danubeApolloTheme: MultiThemeProviderProps["themes"] = [
  {
    name: "dark",
    theme: danubeApolloDarkTheme,
  },
  {
    name: "light",
    theme: danubeApolloLightTheme,
  },
];
