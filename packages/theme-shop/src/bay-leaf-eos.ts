import { ColorsObject, MultiThemeProviderProps, ThemeObject } from "@kami-ui/types";
import {
  defaultSpacing as bayLeafEosSpacing,
  defaultTypography as bayLeafEosTypography,
  defaultCommonColors,
} from "./default";

export const bayLeafEosLightColors: ColorsObject = {
  text: ["#e1eae6", "#c3d5cc", "#a5c0b3", "#88aa99", "#6a9580", "#557766", "#3f5a4d", "#2a3c33", "#151e1a"],
  background: ["#ddeee6", "#bbddcc", "#99ccb3", "#77bb99", "#55aa80", "#448866", "#33664d", "#224433", "#11221a"],
  primary: ["#e0ebe6", "#c2d6cd", "#a3c2b5", "#85ad9c", "#669983", "#527a69", "#3d5c4f", "#293d34", "#141f1a"],
  secondary: ["#e0ebea", "#c2d6d6", "#a3c2c1", "#85adac", "#669997", "#527a79", "#3d5c5b", "#293d3d", "#141f1e"],
  accent: ["#e0e9eb", "#c2d3d6", "#a3bdc2", "#85a7ad", "#669199", "#52747a", "#3d575c", "#293a3d", "#141d1f"],
  complementary: ["#ebe0e5", "#d6c2cb", "#c2a3b0", "#ad8596", "#99667c", "#7a5263", "#5c3d4a", "#3d2932", "#1f1419"],
  tetradic: ["#e1e0eb", "#c3c2d6", "#a6a3c2", "#8885ad", "#696699", "#55527a", "#403d5c", "#2a293d", "#15141f"],
  triadic: ["#e6e0eb", "#cdc2d6", "#b5a3c2", "#9c85ad", "#836699", "#69527a", "#4f3d5c", "#34293d", "#1a141f"],
  analogous: ["#e0ebe1", "#c2d6c3", "#a3c2a6", "#85ad88", "#669969", "#527a55", "#3d5c40", "#293d2a", "#141f15"],
  ...defaultCommonColors,
};

export const bayLeafEosDarkColors: ColorsObject = {
  text: ["#141f1a", "#293d33", "#3d5c4d", "#527a66", "#669980", "#85ad99", "#a3c2b3", "#c2d6cc", "#e0ebe6"],
  background: ["#141f1f", "#293d3d", "#3d5c5c", "#527a7a", "#669999", "#85adad", "#a3c2c2", "#c2d6d6", "#e0ebeb"],
  primary: ["#141f1a", "#293d34", "#3d5c4e", "#527a68", "#669982", "#85ad9b", "#a3c2b4", "#c2d6cd", "#e0ebe6"],
  secondary: ["#141f1e", "#293d3d", "#3d5c5b", "#527a79", "#669997", "#85adac", "#a3c2c1", "#c2d6d6", "#e0ebea"],
  accent: ["#141d1f", "#293a3d", "#3d575c", "#52747a", "#669199", "#85a7ad", "#a3bdc2", "#c2d3d6", "#e0e9eb"],
  complementary: ["#1f1419", "#3d2932", "#5c3d4b", "#7a5264", "#99667d", "#ad8597", "#c2a3b1", "#d6c2cb", "#ebe0e5"],
  tetradic: ["#15141f", "#2a293d", "#3f3d5c", "#54527a", "#696699", "#8785ad", "#a5a3c2", "#c3c2d6", "#e1e0eb"],
  triadic: ["#1a141f", "#34293d", "#4e3d5c", "#68527a", "#826699", "#9b85ad", "#b4a3c2", "#cdc2d6", "#e6e0eb"],
  analogous: ["#141f15", "#293d2a", "#3d5c3f", "#527a54", "#669969", "#85ad87", "#a3c2a5", "#c2d6c3", "#e0ebe1"],
  ...defaultCommonColors,
};

export const bayLeafEosLightTheme: ThemeObject = {
  colors: bayLeafEosLightColors,
  spacing: bayLeafEosSpacing,
  typography: bayLeafEosTypography,
};

export const bayLeafEosDarkTheme: ThemeObject = {
  colors: bayLeafEosDarkColors,
  spacing: bayLeafEosSpacing,
  typography: bayLeafEosTypography,
};

export { bayLeafEosSpacing, bayLeafEosTypography };

export const bayLeafEosTheme: MultiThemeProviderProps["themes"] = [
  {
    name: "dark",
    theme: bayLeafEosDarkTheme,
  },
  {
    name: "light",
    theme: bayLeafEosLightTheme,
  },
];
