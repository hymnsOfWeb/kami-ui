import { ColorsObject, MultiThemeProviderProps, ThemeObject } from "@kami-ui/types";
import {
  defaultSpacing as swampGreenPoseidonSpacing,
  defaultTypography as swampGreenPoseidonTypography,
  defaultCommonColors,
} from "./default";

export const swampGreenPoseidonLightColors: ColorsObject = {
  text: ["#e8ecdf", "#d1dabe", "#b9c79e", "#a2b57d", "#8ba25d", "#6f824a", "#536138", "#384125", "#1c2013"],
  background: ["#e9e9e2", "#d3d3c5", "#bdbda8", "#a7a78b", "#91916e", "#747458", "#575742", "#3a3a2c", "#1d1d16"],
  primary: ["#e8ecdf", "#d0d8c0", "#b9c5a0", "#a2b181", "#8b9e61", "#6f7e4e", "#535f3a", "#373f27", "#1c2013"],
  secondary: ["#e1ecdf", "#c4d9bf", "#a6c69f", "#88b380", "#6a9f60", "#55804d", "#406039", "#2b4026", "#152013"],
  accent: ["#dfece1", "#c0d8c3", "#a0c5a5", "#81b187", "#619e69", "#4e7e54", "#3a5f3f", "#273f2a", "#132015"],
  complementary: ["#e3dfec", "#c8c0d8", "#aca0c5", "#9081b1", "#74619e", "#5d4e7e", "#463a5f", "#2f273f", "#171320"],
  tetradic: ["#dfece9", "#c0d8d4", "#a0c5be", "#81b1a8", "#619e93", "#4e7e75", "#3a5f58", "#273f3b", "#13201d"],
  triadic: ["#dfe8ec", "#c0d0d8", "#a0b9c5", "#81a2b1", "#618b9e", "#4e6f7e", "#3a535f", "#27373f", "#131c20"],
  analogous: ["#ece9df", "#d8d4c0", "#c5bea0", "#b1a881", "#9e9361", "#7e754e", "#5f583a", "#3f3b27", "#201d13"],
  ...defaultCommonColors,
};

export const swampGreenPoseidonDarkColors: ColorsObject = {
  text: ["#1a1f14", "#333d29", "#4d5c3d", "#667a52", "#809966", "#99ad85", "#b3c2a3", "#ccd6c2", "#e6ebe0"],
  background: ["#1f1f14", "#3d3d29", "#5c5c3d", "#7a7a52", "#999966", "#adad85", "#c2c2a3", "#d6d6c2", "#ebebe0"],
  primary: ["#1c2013", "#383f27", "#545f3a", "#707e4e", "#8c9e61", "#a3b181", "#bac5a0", "#d1d8c0", "#e8ecdf"],
  secondary: ["#152013", "#2b3f27", "#405f3a", "#567e4e", "#6b9e61", "#89b181", "#a6c5a0", "#c4d8c0", "#e1ecdf"],
  accent: ["#132015", "#273f2a", "#3a5f3f", "#4e7e54", "#619e69", "#81b187", "#a0c5a5", "#c0d8c3", "#dfece1"],
  complementary: ["#171320", "#2e273f", "#453a5f", "#5c4e7e", "#73619e", "#8f81b1", "#aba0c5", "#c7c0d8", "#e3dfec"],
  tetradic: ["#13201d", "#273f3a", "#3a5f58", "#4e7e74", "#619e92", "#81b1a7", "#a0c5be", "#c0d8d3", "#dfece9"],
  triadic: ["#131c20", "#27383f", "#3a545f", "#4e707e", "#618c9e", "#81a3b1", "#a0bac5", "#c0d1d8", "#dfe8ec"],
  analogous: ["#201d13", "#3f3a27", "#5f583a", "#7e744e", "#9e9261", "#b1a781", "#c5bea0", "#d8d3c0", "#ece9df"],
  ...defaultCommonColors,
};

export const swampGreenPoseidonLightTheme: ThemeObject = {
  colors: swampGreenPoseidonLightColors,
  spacing: swampGreenPoseidonSpacing,
  typography: swampGreenPoseidonTypography,
};

export const swampGreenPoseidonDarkTheme: ThemeObject = {
  colors: swampGreenPoseidonDarkColors,
  spacing: swampGreenPoseidonSpacing,
  typography: swampGreenPoseidonTypography,
};

export { swampGreenPoseidonSpacing, swampGreenPoseidonTypography };

export const swampGreenPoseidonTheme: MultiThemeProviderProps["themes"] = [
  {
    name: "dark",
    theme: swampGreenPoseidonDarkTheme,
  },
  {
    name: "light",
    theme: swampGreenPoseidonLightTheme,
  },
];
