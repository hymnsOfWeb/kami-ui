import { ColorsObject, MultiThemeProviderProps, ThemeObject } from "@kami-ui/react-theme-common";
import {
  defaultSpacing as hopbushHyperionSpacing,
  defaultTypography as hopbushHyperionTypography,
  defaultCommonColors,
} from "./default";

export const hopbushHyperionLightColors: ColorsObject = {
  text: ["#f1daec", "#e3b5d8", "#d590c5", "#c76bb1", "#b9469e", "#94387e", "#6f2a5f", "#4a1c3f", "#250e20"],
  background: ["#f1dae9", "#e4b4d4", "#d68fbe", "#c969a9", "#bb4493", "#963676", "#702958", "#4b1b3b", "#250e1d"],
  primary: ["#f1dae9", "#e4b4d4", "#d68fbe", "#c969a9", "#bb4493", "#963676", "#702958", "#4b1b3b", "#250e1d"],
  secondary: ["#f1ddda", "#e3bcb5", "#d69a8f", "#c8786a", "#ba5645", "#954537", "#703429", "#4a231c", "#25110e"],
  accent: ["#f1e6da", "#e3cdb5", "#d6b48f", "#c89b6a", "#ba8145", "#956837", "#704e29", "#4a341c", "#251a0e"],
  complementary: ["#daf1e2", "#b4e4c4", "#8fd6a7", "#69c989", "#44bb6c", "#369656", "#297041", "#1b4b2b", "#0e2516"],
  tetradic: ["#f1eeda", "#e4dcb4", "#d6ca8f", "#c9b969", "#bba744", "#968636", "#706429", "#4b431b", "#25220e"],
  triadic: ["#e9f1da", "#d4e4b4", "#bed68f", "#a9c969", "#93bb44", "#769636", "#587029", "#3b4b1b", "#1d250e"],
  analogous: ["#eedaf1", "#dcb4e4", "#ca8fd6", "#b969c9", "#a744bb", "#863696", "#642970", "#431b4b", "#220e25"],
  ...defaultCommonColors,
};

export const hopbushHyperionDarkColors: ColorsObject = {
  text: ["#250e1f", "#4b1b3d", "#70295c", "#96367b", "#bb4499", "#c969ae", "#d68fc2", "#e4b4d6", "#f1daeb"],
  background: ["#260d1f", "#4d193d", "#73265c", "#99337a", "#bf4099", "#cc66ad", "#d98cc2", "#e6b3d6", "#f2d9eb"],
  primary: ["#250e1d", "#4b1b3b", "#702958", "#963676", "#bb4493", "#c969a9", "#d68fbe", "#e4b4d4", "#f1dae9"],
  secondary: ["#25110e", "#4a231c", "#703429", "#954537", "#ba5645", "#c8786a", "#d69a8f", "#e3bcb5", "#f1ddda"],
  accent: ["#251a0e", "#4a341c", "#704e29", "#956837", "#ba8145", "#c89b6a", "#d6b48f", "#e3cdb5", "#f1e6da"],
  complementary: ["#0e2516", "#1b4b2b", "#297041", "#369656", "#44bb6c", "#69c989", "#8fd6a7", "#b4e4c4", "#daf1e2"],
  tetradic: ["#25220e", "#4b431b", "#706429", "#968636", "#bba744", "#c9b969", "#d6ca8f", "#e4dcb4", "#f1eeda"],
  triadic: ["#1d250e", "#3b4b1b", "#587029", "#769636", "#93bb44", "#a9c969", "#bed68f", "#d4e4b4", "#e9f1da"],
  analogous: ["#220e25", "#431b4b", "#642970", "#863696", "#a744bb", "#b969c9", "#ca8fd6", "#dcb4e4", "#eedaf1"],
  ...defaultCommonColors,
};

export const hopbushHyperionLightTheme: ThemeObject = {
  colors: hopbushHyperionLightColors,
  spacing: hopbushHyperionSpacing,
  typography: hopbushHyperionTypography,
};

export const hopbushHyperionDarkTheme: ThemeObject = {
  colors: hopbushHyperionDarkColors,
  spacing: hopbushHyperionSpacing,
  typography: hopbushHyperionTypography,
};

export { hopbushHyperionSpacing, hopbushHyperionTypography };

export const hopbushHyperionTheme: MultiThemeProviderProps["themes"] = [
  {
    name: "dark",
    theme: hopbushHyperionDarkTheme,
  },
  {
    name: "light",
    theme: hopbushHyperionLightTheme,
  },
];
