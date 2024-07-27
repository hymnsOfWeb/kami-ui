import { ColorsObject, MultiThemeProviderProps, ThemeObject } from "@kami-ui/react-theme-common";
import {
  defaultSpacing as diSerriaTethysSpacing,
  defaultTypography as diSerriaTethysTypography,
  defaultCommonColors,
} from "./default";

export const diSerriaTethysLightColors: ColorsObject = {
  text: ["#f4e4d7", "#e9c8af", "#dead87", "#d3915f", "#c87637", "#a05e2c", "#784721", "#502f16", "#28180b"],
  background: ["#f5e6d6", "#ebccad", "#e0b385", "#d6995c", "#cc8033", "#a36629", "#7a4d1f", "#523314", "#291a0a"],
  primary: ["#f5e4d6", "#eac9ae", "#e0ae85", "#d5935d", "#cb7834", "#a2602a", "#7a481f", "#513015", "#29180a"],
  secondary: ["#d6e7f5", "#aecfea", "#85b7e0", "#5d9fd5", "#3487cb", "#2a6ca2", "#1f517a", "#153651", "#0a1b29"],
  accent: ["#e3d7f4", "#c7aeea", "#ab86df", "#8f5ed4", "#7336c9", "#5c2ba1", "#452079", "#2e1551", "#170b28"],
  complementary: ["#d6e7f5", "#aecfea", "#85b7e0", "#5d9fd5", "#3487cb", "#2a6ca2", "#1f517a", "#153651", "#0a1b29"],
  tetradic: ["#d8f5d6", "#b1eaae", "#8ae085", "#63d55d", "#3ccb34", "#30a22a", "#247a1f", "#185115", "#0c290a"],
  triadic: ["#d6f5e4", "#aeeac9", "#85e0ae", "#5dd593", "#34cb78", "#2aa260", "#1f7a48", "#155130", "#0a2918"],
  analogous: ["#f5d6d8", "#eaaeb1", "#e0858a", "#d55d63", "#cb343c", "#a22a30", "#7a1f24", "#511518", "#290a0c"],
  ...defaultCommonColors,
};

export const diSerriaTethysDarkColors: ColorsObject = {
  text: ["#29160a", "#522d14", "#7a431f", "#a35a29", "#cc7033", "#d68d5c", "#e0a985", "#ebc6ad", "#f5e2d6"],
  background: ["#291a0a", "#523314", "#7a4d1f", "#a36629", "#cc8033", "#d6995c", "#e0b385", "#ebccad", "#f5e6d6"],
  primary: ["#29180a", "#513015", "#7a481f", "#a2602a", "#cb7834", "#d5935d", "#e0ae85", "#eac9ae", "#f5e4d6"],
  secondary: ["#0a1b29", "#153651", "#1f517a", "#2a6ca2", "#3487cb", "#5d9fd5", "#85b7e0", "#aecfea", "#d6e7f5"],
  accent: ["#170b28", "#2e1551", "#452079", "#5c2ba1", "#7336c9", "#8f5ed4", "#ab86df", "#c7aeea", "#e3d7f4"],
  complementary: ["#0a1b29", "#153651", "#1f517a", "#2a6ca2", "#3487cb", "#5d9fd5", "#85b7e0", "#aecfea", "#d6e7f5"],
  tetradic: ["#0c290a", "#185115", "#247a1f", "#30a22a", "#3ccb34", "#63d55d", "#8ae085", "#b1eaae", "#d8f5d6"],
  triadic: ["#0a2918", "#155130", "#1f7a48", "#2aa260", "#34cb78", "#5dd593", "#85e0ae", "#aeeac9", "#d6f5e4"],
  analogous: ["#290a0c", "#511518", "#7a1f24", "#a22a30", "#cb343c", "#d55d63", "#e0858a", "#eaaeb1", "#f5d6d8"],
  ...defaultCommonColors,
};

export const diSerriaTethysLightTheme: ThemeObject = {
  colors: diSerriaTethysLightColors,
  spacing: diSerriaTethysSpacing,
  typography: diSerriaTethysTypography,
};

export const diSerriaTethysDarkTheme: ThemeObject = {
  colors: diSerriaTethysDarkColors,
  spacing: diSerriaTethysSpacing,
  typography: diSerriaTethysTypography,
};

export { diSerriaTethysSpacing, diSerriaTethysTypography };

export const diSerriaTethysTheme: MultiThemeProviderProps["themes"] = [
  {
    name: "dark",
    theme: diSerriaTethysDarkTheme,
  },
  {
    name: "light",
    theme: diSerriaTethysLightTheme,
  },
];
