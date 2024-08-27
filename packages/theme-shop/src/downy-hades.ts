import { ColorsObject, MultiThemeProviderProps, ThemeObject } from "@kami-ui/types";
import {
  defaultSpacing as downyHadesSpacing,
  defaultTypography as downyHadesTypography,
  defaultCommonColors,
} from "./default";

export const downyHadesLightColors: ColorsObject = {
  text: ["#e4e7e7", "#c8d0d0", "#adb8b8", "#92a0a0", "#778888", "#5f6d6d", "#475252", "#2f3737", "#181b1b"],
  background: ["#dfece8", "#bedad1", "#9ec7b9", "#7db5a2", "#5da28b", "#4a826f", "#386153", "#254138", "#13201c"],
  primary: ["#d8f3ed", "#b2e6db", "#8bdac9", "#65cdb6", "#3ec1a4", "#329a83", "#257463", "#194d42", "#0c2721"],
  secondary: ["#d2f9f0", "#a6f2e2", "#79ecd3", "#4ce6c4", "#20dfb6", "#19b391", "#13866d", "#0d5949", "#062d24"],
  accent: ["#cdfef4", "#9afee8", "#68fddd", "#35fdd2", "#03fcc6", "#02ca9f", "#029777", "#01654f", "#013228"],
  complementary: ["#f3d8de", "#e6b2bd", "#da8b9c", "#cd657c", "#c13e5a", "#9a3249", "#742536", "#4d1924", "#270c12"],
  tetradic: ["#e0d8f3", "#c1b2e6", "#a18bda", "#8265cd", "#633ec1", "#4f329a", "#3b2574", "#28194d", "#140c27"],
  triadic: ["#edd8f3", "#dbb2e6", "#c98bda", "#b665cd", "#a53ec1", "#83329a", "#632574", "#42194d", "#210c27"],
  analogous: ["#d8f3e0", "#b2e6c1", "#8bdaa1", "#65cd82", "#3ec163", "#329a4f", "#25743b", "#194d28", "#0c2714"],
  ...defaultCommonColors,
};

export const downyHadesDarkColors: ColorsObject = {
  text: ["#171c1c", "#2f3737", "#465353", "#5e6e6e", "#758a8a", "#91a1a1", "#acb9b9", "#c8d0d0", "#e3e8e8"],
  background: ["#141f1f", "#293d3d", "#3d5c5c", "#527a7a", "#669999", "#85adad", "#a3c2c2", "#c2d6d6", "#e0ebeb"],
  primary: ["#0c2721", "#194d42", "#257463", "#329a83", "#3ec1a4", "#65cdb6", "#8bdac9", "#b2e6db", "#d8f3ed"],
  secondary: ["#072c24", "#0d5948", "#14856d", "#1bb191", "#21deb5", "#4ee4c4", "#7aebd3", "#a6f2e1", "#d3f8f0"],
  accent: ["#013228", "#01654f", "#029777", "#02ca9f", "#03fcc6", "#35fdd2", "#68fddd", "#9afee8", "#cdfef4"],
  complementary: ["#270c12", "#4d1924", "#742536", "#9a3249", "#c13e5a", "#cd657c", "#da8b9c", "#e6b2bd", "#f3d8de"],
  tetradic: ["#140c27", "#28194d", "#3b2574", "#4f329a", "#633ec1", "#8265cd", "#a18bda", "#c1b2e6", "#e0d8f3"],
  triadic: ["#210c27", "#42194d", "#632574", "#83329a", "#a53ec1", "#b665cd", "#c98bda", "#dbb2e6", "#edd8f3"],
  analogous: ["#0c2714", "#194d28", "#25743b", "#329a4f", "#3ec163", "#65cd82", "#8bdaa1", "#b2e6c1", "#d8f3e0"],
  ...defaultCommonColors,
};

export const downyHadesLightTheme: ThemeObject = {
  colors: downyHadesLightColors,
  spacing: downyHadesSpacing,
  typography: downyHadesTypography,
};

export const downyHadesDarkTheme: ThemeObject = {
  colors: downyHadesDarkColors,
  spacing: downyHadesSpacing,
  typography: downyHadesTypography,
};

export { downyHadesSpacing, downyHadesTypography };

export const downyHadesTheme: MultiThemeProviderProps["themes"] = [
  {
    name: "dark",
    theme: downyHadesDarkTheme,
  },
  {
    name: "light",
    theme: downyHadesLightTheme,
  },
];
