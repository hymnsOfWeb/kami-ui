import { ColorsObject, MultiThemeProviderProps, ThemeObject } from "@kami-ui/types";
import {
  defaultSpacing as cascadePhoebeSpacing,
  defaultTypography as cascadePhoebeTypography,
  defaultCommonColors,
} from "./default";

export const cascadePhoebeLightColors: ColorsObject = {
  text: ["#e2e9e7", "#c6d2d0", "#a9bcb8", "#8da5a0", "#708f89", "#5a726d", "#435652", "#2d3937", "#161d1b"],
  background: ["#e2e9e9", "#c5d3d3", "#a8bdbd", "#8ba7a7", "#6e9191", "#587474", "#425757", "#2c3a3a", "#161d1d"],
  primary: ["#e3e8e8", "#c6d2d1", "#aabbba", "#8ea4a3", "#718e8d", "#5b7170", "#445554", "#2d3938", "#171c1c"],
  secondary: ["#e3e4e8", "#c6cad2", "#aaafbb", "#8e95a4", "#717a8e", "#5b6271", "#444955", "#2d3139", "#17181c"],
  accent: ["#e3e3e8", "#c8c6d2", "#acaabb", "#908ea4", "#74718e", "#5d5b71", "#464455", "#2f2d39", "#17171c"],
  complementary: ["#e8e3e3", "#d2c6c7", "#bbaaab", "#a48e8f", "#8e7172", "#715b5c", "#554445", "#392d2e", "#1c1717"],
  tetradic: ["#e6e3e8", "#cbc6d2", "#b1aabb", "#988ea4", "#7f718e", "#655b71", "#4b4455", "#322d39", "#19171c"],
  triadic: ["#e8e3e8", "#d1c6d2", "#baaabb", "#a38ea4", "#8d718e", "#705b71", "#544455", "#382d39", "#1c171c"],
  analogous: ["#e3e8e6", "#c6d2cb", "#aabbb1", "#8ea498", "#718e7f", "#5b7165", "#44554b", "#2d3932", "#171c19"],
  ...defaultCommonColors,
};

export const cascadePhoebeDarkColors: ColorsObject = {
  text: ["#161d1b", "#2d3937", "#435652", "#5a726d", "#708f89", "#8da5a0", "#a9bcb8", "#c6d2d0", "#e2e9e7"],
  background: ["#141f1f", "#293d3d", "#3d5c5c", "#527a7a", "#669999", "#85adad", "#a3c2c2", "#c2d6d6", "#e0ebeb"],
  primary: ["#171c1c", "#2d3938", "#445554", "#5b7170", "#718e8d", "#8ea4a3", "#aabbba", "#c6d2d1", "#e3e8e8"],
  secondary: ["#17181c", "#2d3139", "#444955", "#5b6271", "#717a8e", "#8e95a4", "#aaafbb", "#c6cad2", "#e3e4e8"],
  accent: ["#17171c", "#2f2d39", "#464455", "#5d5b71", "#74718e", "#908ea4", "#acaabb", "#c8c6d2", "#e3e3e8"],
  complementary: ["#1c1717", "#392d2e", "#554445", "#715b5c", "#8e7172", "#a48e8f", "#bbaaab", "#d2c6c7", "#e8e3e3"],
  tetradic: ["#19171c", "#322d39", "#4b4455", "#655b71", "#7f718e", "#988ea4", "#b1aabb", "#cbc6d2", "#e6e3e8"],
  triadic: ["#1c171c", "#382d39", "#544455", "#705b71", "#8d718e", "#a38ea4", "#baaabb", "#d1c6d2", "#e8e3e8"],
  analogous: ["#171c19", "#2d3932", "#44554b", "#5b7165", "#718e7f", "#8ea498", "#aabbb1", "#c6d2cb", "#e3e8e6"],
  ...defaultCommonColors,
};

export const cascadePhoebeLightTheme: ThemeObject = {
  colors: cascadePhoebeLightColors,
  spacing: cascadePhoebeSpacing,
  typography: cascadePhoebeTypography,
};

export const cascadePhoebeDarkTheme: ThemeObject = {
  colors: cascadePhoebeDarkColors,
  spacing: cascadePhoebeSpacing,
  typography: cascadePhoebeTypography,
};

export { cascadePhoebeSpacing, cascadePhoebeTypography };

export const cascadePhoebeTheme: MultiThemeProviderProps["themes"] = [
  {
    name: "dark",
    theme: cascadePhoebeDarkTheme,
  },
  {
    name: "light",
    theme: cascadePhoebeLightTheme,
  },
];
