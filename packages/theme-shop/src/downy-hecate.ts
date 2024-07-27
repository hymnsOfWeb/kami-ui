import { ColorsObject, MultiThemeProviderProps, ThemeObject } from "@kami-ui/react-theme-common";
import {
  defaultSpacing as downyHecateSpacing,
  defaultTypography as downyHecateTypography,
  defaultCommonColors,
} from "./default";

export const downyHecateLightColors: ColorsObject = {
  text: ["#deede9", "#bddbd3", "#9cc9bc", "#7ab8a6", "#59a690", "#478573", "#366356", "#24423a", "#12211d"],
  background: ["#d9f2ec", "#b3e6d9", "#8cd9c6", "#66ccb3", "#40bf9f", "#339980", "#267360", "#194d40", "#0d2620"],
  primary: ["#d6f5ec", "#aeead8", "#85e0c5", "#5dd5b1", "#34cb9e", "#2aa27e", "#1f7a5f", "#15513f", "#0a2920"],
  secondary: ["#d3f8ed", "#a7f1db", "#7beac9", "#50e2b6", "#24dba4", "#1daf83", "#158463", "#0e5842", "#072c21"],
  accent: ["#cffcee", "#a0f8de", "#70f5cd", "#40f2bc", "#11eeac", "#0dbf89", "#0a8f67", "#075f45", "#033022"],
  complementary: ["#f5d6df", "#eaaec0", "#e085a0", "#d55d81", "#cb3461", "#a22a4e", "#7a1f3a", "#511527", "#290a13"],
  tetradic: ["#ddd6f5", "#baaeea", "#9785e0", "#755dd5", "#5234cb", "#422aa2", "#311f7a", "#211551", "#110a29"],
  triadic: ["#ecd6f5", "#d8aeea", "#c585e0", "#b15dd5", "#9e34cb", "#7e2aa2", "#5f1f7a", "#3f1551", "#200a29"],
  analogous: ["#d6f5dd", "#aeeaba", "#85e097", "#5dd575", "#34cb52", "#2aa242", "#1f7a31", "#155121", "#0a2911"],
  ...defaultCommonColors,
};

export const downyHecateDarkColors: ColorsObject = {
  text: ["#12211d", "#23433b", "#356458", "#468676", "#58a793", "#79b9a9", "#9bcabe", "#bcdcd4", "#deede9"],
  background: ["#0e251c", "#1c4a38", "#2a6f53", "#38946f", "#46b98b", "#6bc7a2", "#90d5b9", "#b5e3d1", "#daf1e8"],
  primary: ["#0a2920", "#15513f", "#1f7a5f", "#2aa27e", "#34cb9e", "#5dd5b1", "#85e0c5", "#aeead8", "#d6f5ec"],
  secondary: ["#072c21", "#0e5842", "#158463", "#1daf83", "#24dba4", "#50e2b6", "#7beac9", "#a7f1db", "#d3f8ed"],
  accent: ["#033022", "#075f45", "#0a8f67", "#0dbf89", "#11eeac", "#40f2bc", "#70f5cd", "#a0f8de", "#cffcee"],
  complementary: ["#290a13", "#511527", "#7a1f3a", "#a22a4e", "#cb3461", "#d55d81", "#e085a0", "#eaaec0", "#f5d6df"],
  tetradic: ["#110a29", "#211551", "#311f7a", "#422aa2", "#5234cb", "#755dd5", "#9785e0", "#baaeea", "#ddd6f5"],
  triadic: ["#200a29", "#3f1551", "#5f1f7a", "#7e2aa2", "#9e34cb", "#b15dd5", "#c585e0", "#d8aeea", "#ecd6f5"],
  analogous: ["#0a2911", "#155121", "#1f7a31", "#2aa242", "#34cb52", "#5dd575", "#85e097", "#aeeaba", "#d6f5dd"],
  ...defaultCommonColors,
};

export const downyHecateLightTheme: ThemeObject = {
  colors: downyHecateLightColors,
  spacing: downyHecateSpacing,
  typography: downyHecateTypography,
};

export const downyHecateDarkTheme: ThemeObject = {
  colors: downyHecateDarkColors,
  spacing: downyHecateSpacing,
  typography: downyHecateTypography,
};

export { downyHecateSpacing, downyHecateTypography };

export const downyHecateTheme: MultiThemeProviderProps["themes"] = [
  {
    name: "dark",
    theme: downyHecateDarkTheme,
  },
  {
    name: "light",
    theme: downyHecateLightTheme,
  },
];
