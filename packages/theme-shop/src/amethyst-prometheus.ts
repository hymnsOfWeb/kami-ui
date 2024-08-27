import { ColorsObject, MultiThemeProviderProps, ThemeObject } from "@kami-ui/types";
import {
  defaultSpacing as amethystPrometheusSpacing,
  defaultTypography as amethystPrometheusTypography,
  defaultCommonColors,
} from "./default";

export const amethystPrometheusLightColors: ColorsObject = {
  text: ["#e6e2e9", "#ccc5d3", "#b3a9bc", "#998ca6", "#7f6f90", "#665973", "#4c4356", "#332c3a", "#19161d"],
  background: ["#e1ddee", "#c4bbdd", "#a699cc", "#8877bb", "#6a55aa", "#554488", "#403366", "#2b2244", "#151122"],
  primary: ["#e4daf1", "#c8b6e2", "#ad91d4", "#926cc6", "#7647b8", "#5f3993", "#472b6e", "#2f1d49", "#180e25"],
  secondary: ["#e2d6f5", "#c6adeb", "#a985e0", "#8d5cd6", "#7033cc", "#5a29a3", "#431f7a", "#2d1452", "#160a29"],
  accent: ["#e2d2f9", "#c6a5f3", "#a978ed", "#8c4be7", "#6f1fe0", "#5918b4", "#431287", "#2d0c5a", "#16062d"],
  complementary: ["#e7f1da", "#d0e2b6", "#b8d491", "#a1c66c", "#89b847", "#6e9339", "#526e2b", "#37491d", "#1b250e"],
  tetradic: ["#f1dadc", "#e2b6ba", "#d49197", "#c66c74", "#b84750", "#933940", "#6e2b31", "#491d21", "#250e10"],
  triadic: ["#f1e4da", "#e2c8b6", "#d4ad91", "#c6926c", "#b87647", "#935f39", "#6e472b", "#492f1d", "#25180e"],
  analogous: ["#dadcf1", "#b6bae2", "#9197d4", "#6c74c6", "#4750b8", "#394093", "#2b316e", "#1d2149", "#0e1025"],
  ...defaultCommonColors,
};

export const amethystPrometheusDarkColors: ColorsObject = {
  text: ["#19161d", "#332c3a", "#4c4356", "#665973", "#7f6f90", "#998ca6", "#b3a9bc", "#ccc5d3", "#e6e2e9"],
  background: ["#140f24", "#291f47", "#3d2e6b", "#523d8f", "#664db3", "#8570c2", "#a394d1", "#c2b8e0", "#e0dbf0"],
  primary: ["#180e25", "#2f1d49", "#472b6e", "#5f3993", "#7647b8", "#926cc6", "#ad91d4", "#c8b6e2", "#e4daf1"],
  secondary: ["#160a29", "#2d1551", "#431f7a", "#5a2aa2", "#7034cb", "#8d5dd5", "#a985e0", "#c6aeea", "#e2d6f5"],
  accent: ["#16062d", "#2d0c5a", "#431287", "#5918b4", "#6f1fe0", "#8c4be7", "#a978ed", "#c6a5f3", "#e2d2f9"],
  complementary: ["#1b250e", "#37491d", "#526e2b", "#6e9339", "#89b847", "#a1c66c", "#b8d491", "#d0e2b6", "#e7f1da"],
  tetradic: ["#250e10", "#491d21", "#6e2b31", "#933940", "#b84750", "#c66c74", "#d49197", "#e2b6ba", "#f1dadc"],
  triadic: ["#25180e", "#492f1d", "#6e472b", "#935f39", "#b87647", "#c6926c", "#d4ad91", "#e2c8b6", "#f1e4da"],
  analogous: ["#0e1025", "#1d2149", "#2b316e", "#394093", "#4750b8", "#6c74c6", "#9197d4", "#b6bae2", "#dadcf1"],
  ...defaultCommonColors,
};

export const amethystPrometheusLightTheme: ThemeObject = {
  colors: amethystPrometheusLightColors,
  spacing: amethystPrometheusSpacing,
  typography: amethystPrometheusTypography,
};

export const amethystPrometheusDarkTheme: ThemeObject = {
  colors: amethystPrometheusDarkColors,
  spacing: amethystPrometheusSpacing,
  typography: amethystPrometheusTypography,
};

export { amethystPrometheusSpacing, amethystPrometheusTypography };

export const amethystPrometheusTheme: MultiThemeProviderProps["themes"] = [
  {
    name: "dark",
    theme: amethystPrometheusDarkTheme,
  },
  {
    name: "light",
    theme: amethystPrometheusLightTheme,
  },
];
