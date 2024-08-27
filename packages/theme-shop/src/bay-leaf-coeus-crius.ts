import { ColorsObject, MultiThemeProviderProps, ThemeObject } from "@kami-ui/types";
import {
  defaultSpacing as bayLeafCoeusCriusSpacing,
  defaultTypography as bayLeafCoeusCriusTypography,
  defaultCommonColors,
} from "./default";

export const bayLeafCoeusCriusLightColors: ColorsObject = {
  text: ["#e1eae1", "#c4d4c4", "#a6bfa6", "#89a989", "#6b946b", "#567656", "#405940", "#2b3b2b", "#151e15"],
  background: ["#e2e9e2", "#c5d3c5", "#a8bda8", "#8ba78b", "#6e916e", "#587458", "#425742", "#2c3a2c", "#161d16"],
  primary: ["#e0ebe1", "#c1d7c3", "#a2c3a5", "#84ae86", "#659a68", "#517b53", "#3c5d3f", "#283e2a", "#141f15"],
  secondary: ["#dfece0", "#c0d8c1", "#a0c5a1", "#81b182", "#619e63", "#4e7e4f", "#3a5f3b", "#273f28", "#132014"],
  accent: ["#dfece0", "#bedac0", "#9ec7a1", "#7db581", "#5da262", "#4a824e", "#38613b", "#254127", "#132014"],
  complementary: ["#ebe0ea", "#d7c1d5", "#c3a2c0", "#ae84ac", "#9a6597", "#7b5179", "#5d3c5a", "#3e283c", "#1f141e"],
  tetradic: ["#e0e5eb", "#c1cad7", "#a2b0c3", "#8497ae", "#657d9a", "#51647b", "#3c4a5d", "#28313e", "#14191f"],
  triadic: ["#e1e0eb", "#c3c1d7", "#a5a2c3", "#8684ae", "#68659a", "#53517b", "#3f3c5d", "#2a283e", "#15141f"],
  analogous: ["#e5ebe0", "#cad7c1", "#b0c3a2", "#97ae84", "#7d9a65", "#647b51", "#4a5d3c", "#313e28", "#191f14"],
  ...defaultCommonColors,
};

export const bayLeafCoeusCriusDarkColors: ColorsObject = {
  text: ["#161d16", "#2c3a2c", "#425742", "#587458", "#6e916e", "#8ba78b", "#a8bda8", "#c5d3c5", "#e2e9e2"],
  background: ["#141f14", "#293d29", "#3d5c3d", "#527a52", "#669966", "#85ad85", "#a3c2a3", "#c2d6c2", "#e0ebe0"],
  primary: ["#141f15", "#283e2a", "#3c5d3f", "#517b53", "#659a68", "#84ae86", "#a2c3a5", "#c1d7c3", "#e0ebe1"],
  secondary: ["#132014", "#273f28", "#3a5f3b", "#4e7e4f", "#619e63", "#81b182", "#a0c5a1", "#c0d8c1", "#dfece0"],
  accent: ["#132014", "#254127", "#38613b", "#4a824e", "#5da262", "#7db581", "#9ec7a1", "#bedac0", "#dfece0"],
  complementary: ["#1f141e", "#3e283c", "#5d3c5a", "#7b5179", "#9a6597", "#ae84ac", "#c3a2c0", "#d7c1d5", "#ebe0ea"],
  tetradic: ["#14191f", "#28313e", "#3c4a5d", "#51647b", "#657d9a", "#8497ae", "#a2b0c3", "#c1cad7", "#e0e5eb"],
  triadic: ["#15141f", "#2a283e", "#3f3c5d", "#53517b", "#68659a", "#8684ae", "#a5a2c3", "#c3c1d7", "#e1e0eb"],
  analogous: ["#191f14", "#313e28", "#4a5d3c", "#647b51", "#7d9a65", "#97ae84", "#b0c3a2", "#cad7c1", "#e5ebe0"],
  ...defaultCommonColors,
};

export const bayLeafCoeusCriusLightTheme: ThemeObject = {
  colors: bayLeafCoeusCriusLightColors,
  spacing: bayLeafCoeusCriusSpacing,
  typography: bayLeafCoeusCriusTypography,
};

export const bayLeafCoeusCriusDarkTheme: ThemeObject = {
  colors: bayLeafCoeusCriusDarkColors,
  spacing: bayLeafCoeusCriusSpacing,
  typography: bayLeafCoeusCriusTypography,
};

export { bayLeafCoeusCriusSpacing, bayLeafCoeusCriusTypography };

export const bayLeafCoeusCriusTheme: MultiThemeProviderProps["themes"] = [
  {
    name: "dark",
    theme: bayLeafCoeusCriusDarkTheme,
  },
  {
    name: "light",
    theme: bayLeafCoeusCriusLightTheme,
  },
];
