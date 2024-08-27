import { ColorsObject, MultiThemeProviderProps, ThemeObject } from "@kami-ui/types";
import {
  defaultSpacing as lavenderHypnosSpacing,
  defaultTypography as lavenderHypnosTypography,
  defaultCommonColors,
} from "./default";

export const lavenderHypnosLightColors: ColorsObject = {
  text: ["#f6d3f8", "#eda6f2", "#e47aeb", "#da4ee4", "#d121de", "#a71bb1", "#7e1485", "#540d59", "#2a072c"],
  background: ["#f6d5f6", "#edabed", "#e382e3", "#da58da", "#d12ed1", "#a725a7", "#7d1c7d", "#541254", "#2a092a"],
  primary: ["#f5d3f8", "#eaa8f0", "#e07ce9", "#d551e1", "#cb25da", "#a21eae", "#7a1683", "#510f57", "#29072c"],
  secondary: ["#f5f8d3", "#ebf0a8", "#e2e97c", "#d8e151", "#ceda25", "#a5ae1e", "#7c8316", "#52570f", "#292c07"],
  accent: ["#dbf8d3", "#b7f0a8", "#94e97c", "#70e151", "#4cda25", "#3dae1e", "#2e8316", "#1e570f", "#0f2c07"],
  complementary: ["#d6f8d3", "#aef0a8", "#85e97c", "#5de151", "#34da25", "#2aae1e", "#1f8316", "#15570f", "#0a2c07"],
  tetradic: ["#f8e2d3", "#f0c6a8", "#e9a97c", "#e18d51", "#da7025", "#ae5a1e", "#834316", "#572d0f", "#2c1607"],
  triadic: ["#f8f5d3", "#f0eaa8", "#e9e07c", "#e1d551", "#dacb25", "#aea21e", "#837a16", "#57510f", "#2c2907"],
  analogous: ["#e2d3f8", "#c6a8f0", "#a97ce9", "#8d51e1", "#7025da", "#5a1eae", "#431683", "#2d0f57", "#16072c"],
  ...defaultCommonColors,
};

export const lavenderHypnosDarkColors: ColorsObject = {
  text: ["#29062d", "#520c5a", "#7b1287", "#a418b4", "#cd1fe0", "#d74be7", "#e178ed", "#eba5f3", "#f5d2f9"],
  background: ["#290a29", "#521452", "#7a1f7a", "#a329a3", "#cc33cc", "#d65cd6", "#e085e0", "#ebadeb", "#f5d6f5"],
  primary: ["#29072c", "#510f57", "#7a1683", "#a21eae", "#cb25da", "#d551e1", "#e07ce9", "#eaa8f0", "#f5d3f8"],
  secondary: ["#292c07", "#52570f", "#7c8316", "#a5ae1e", "#ceda25", "#d8e151", "#e2e97c", "#ebf0a8", "#f5f8d3"],
  accent: ["#0f2c07", "#1e570f", "#2e8316", "#3dae1e", "#4cda25", "#70e151", "#94e97c", "#b7f0a8", "#dbf8d3"],
  complementary: ["#0a2c07", "#15570f", "#1f8316", "#2aae1e", "#34da25", "#5de151", "#85e97c", "#aef0a8", "#d6f8d3"],
  tetradic: ["#2c1607", "#572d0f", "#834316", "#ae5a1e", "#da7025", "#e18d51", "#e9a97c", "#f0c6a8", "#f8e2d3"],
  triadic: ["#2c2907", "#57510f", "#837a16", "#aea21e", "#dacb25", "#e1d551", "#e9e07c", "#f0eaa8", "#f8f5d3"],
  analogous: ["#16072c", "#2d0f57", "#431683", "#5a1eae", "#7025da", "#8d51e1", "#a97ce9", "#c6a8f0", "#e2d3f8"],
  ...defaultCommonColors,
};

export const lavenderHypnosLightTheme: ThemeObject = {
  colors: lavenderHypnosLightColors,
  spacing: lavenderHypnosSpacing,
  typography: lavenderHypnosTypography,
};

export const lavenderHypnosDarkTheme: ThemeObject = {
  colors: lavenderHypnosDarkColors,
  spacing: lavenderHypnosSpacing,
  typography: lavenderHypnosTypography,
};

export { lavenderHypnosSpacing, lavenderHypnosTypography };

export const lavenderHypnosTheme: MultiThemeProviderProps["themes"] = [
  {
    name: "dark",
    theme: lavenderHypnosDarkTheme,
  },
  {
    name: "light",
    theme: lavenderHypnosLightTheme,
  },
];
