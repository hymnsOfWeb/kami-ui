import { ColorsObject, MultiThemeProviderProps, ThemeObject } from "@kami-ui/react-theme-common";
import {
  defaultSpacing as pictonBlueHephaestusSpacing,
  defaultTypography as pictonBlueHephaestusTypography,
  defaultCommonColors,
} from "./default";

export const pictonBlueHephaestusLightColors: ColorsObject = {
  text: ["#d1ecfa", "#a3daf5", "#75c7f0", "#47b4eb", "#19a1e6", "#1481b8", "#0f618a", "#0a415c", "#05202e"],
  background: ["#d2ecf9", "#a6d9f2", "#79c6ec", "#4cb2e6", "#209fdf", "#197fb3", "#136086", "#0d4059", "#06202d"],
  primary: ["#d1f0fa", "#a3e1f5", "#75d1f0", "#46c2ec", "#18b3e7", "#138fb9", "#0f6b8a", "#0a485c", "#05242e"],
  secondary: ["#d1d4fa", "#a2a9f6", "#747ef1", "#4553ed", "#1728e8", "#1220ba", "#0e188b", "#09105d", "#05082e"],
  accent: ["#d6d1fa", "#aea3f5", "#8575f0", "#5c46ec", "#3418e7", "#2913b9", "#1f0f8a", "#150a5c", "#0a052e"],
  complementary: ["#fadbd1", "#f5b8a3", "#f09475", "#ec7046", "#e74c18", "#b93c13", "#8a2e0f", "#5c1f0a", "#2e0f05"],
  tetradic: ["#f0d1fa", "#e1a3f5", "#d175f0", "#c346ec", "#b318e7", "#8f13b9", "#6b0f8a", "#480a5c", "#24052e"],
  triadic: ["#fad1f0", "#f5a3e1", "#f075d1", "#ec46c3", "#e718b3", "#b9138f", "#8a0f6b", "#5c0a48", "#2e0524"],
  analogous: ["#d1faf0", "#a3f5e1", "#75f0d1", "#46ecc3", "#18e7b3", "#13b98f", "#0f8a6b", "#0a5c48", "#052e24"],
  ...defaultCommonColors,
};

export const pictonBlueHephaestusDarkColors: ColorsObject = {
  text: ["#05212e", "#0a425c", "#0f638a", "#1384b9", "#18a5e7", "#46b7ec", "#75c9f0", "#a3dbf5", "#d1edfa"],
  background: ["#051e2e", "#0a3d5c", "#0f5b8a", "#1479b8", "#1997e6", "#47aceb", "#75c1f0", "#a3d6f5", "#d1eafa"],
  primary: ["#05242e", "#0a485c", "#0f6b8a", "#138fb9", "#18b3e7", "#46c2ec", "#75d1f0", "#a3e1f5", "#d1f0fa"],
  secondary: ["#05082e", "#09105d", "#0e188b", "#1220ba", "#1728e8", "#4553ed", "#747ef1", "#a2a9f6", "#d1d4fa"],
  accent: ["#0a052e", "#150a5c", "#1f0f8a", "#2913b9", "#3418e7", "#5c46ec", "#8575f0", "#aea3f5", "#d6d1fa"],
  complementary: ["#2e0f05", "#5c1f0a", "#8a2e0f", "#b93c13", "#e74c18", "#ec7046", "#f09475", "#f5b8a3", "#fadbd1"],
  tetradic: ["#24052e", "#480a5c", "#6b0f8a", "#8f13b9", "#b318e7", "#c346ec", "#d175f0", "#e1a3f5", "#f0d1fa"],
  triadic: ["#2e0524", "#5c0a48", "#8a0f6b", "#b9138f", "#e718b3", "#ec46c3", "#f075d1", "#f5a3e1", "#fad1f0"],
  analogous: ["#052e24", "#0a5c48", "#0f8a6b", "#13b98f", "#18e7b3", "#46ecc3", "#75f0d1", "#a3f5e1", "#d1faf0"],
  ...defaultCommonColors,
};

export const pictonBlueHephaestusLightTheme: ThemeObject = {
  colors: pictonBlueHephaestusLightColors,
  spacing: pictonBlueHephaestusSpacing,
  typography: pictonBlueHephaestusTypography,
};

export const pictonBlueHephaestusDarkTheme: ThemeObject = {
  colors: pictonBlueHephaestusDarkColors,
  spacing: pictonBlueHephaestusSpacing,
  typography: pictonBlueHephaestusTypography,
};

export { pictonBlueHephaestusSpacing, pictonBlueHephaestusTypography };

export const pictonBlueHephaestusTheme: MultiThemeProviderProps["themes"] = [
  {
    name: "dark",
    theme: pictonBlueHephaestusDarkTheme,
  },
  {
    name: "light",
    theme: pictonBlueHephaestusLightTheme,
  },
];
