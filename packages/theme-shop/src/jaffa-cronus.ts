import { ColorsObject, MultiThemeProviderProps, ThemeObject } from "@kami-ui/types";
import {
  defaultSpacing as jaffaCronusSpacing,
  defaultTypography as jaffaCronusTypography,
  defaultCommonColors,
} from "./default";

export const jaffaCronusLightColors: ColorsObject = {
  text: ["#fce7cf", "#f8cfa0", "#f5b770", "#f29f40", "#ee8711", "#bf6c0d", "#8f510a", "#5f3607", "#301b03"],
  background: ["#faead1", "#f5d6a3", "#f0c175", "#ebac47", "#e69719", "#b87914", "#8a5b0f", "#5c3d0a", "#2e1e05"],
  primary: ["#fce5cf", "#f9cb9f", "#f6b06f", "#f3963f", "#f07c0f", "#c0630c", "#904a09", "#603206", "#301903"],
  secondary: ["#d3fccf", "#a7f99f", "#7af66f", "#4ef33f", "#22f00f", "#1bc00c", "#149009", "#0e6006", "#073003"],
  accent: ["#cffcdd", "#9ff9bc", "#6ff69a", "#3ff378", "#0ff056", "#0cc045", "#099034", "#066023", "#033011"],
  complementary: ["#cfe6fc", "#9fcdf9", "#6fb5f6", "#3f9cf3", "#0f83f0", "#0c69c0", "#094f90", "#063560", "#031a30"],
  tetradic: ["#d0fccf", "#a0f99f", "#71f66f", "#42f33f", "#13f00f", "#0fc00c", "#0b9009", "#086006", "#043003"],
  triadic: ["#cffce5", "#9ff9ca", "#6ff6b0", "#3ff396", "#0ff07c", "#0cc063", "#09904a", "#066032", "#033019"],
  analogous: ["#fccfd0", "#f99fa0", "#f66f71", "#f33f42", "#f00f13", "#c00c0f", "#90090b", "#600608", "#300304"],
  ...defaultCommonColors,
};

export const jaffaCronusDarkColors: ColorsObject = {
  text: ["#301b03", "#5f3607", "#8f510a", "#bf6c0d", "#ee8711", "#f29f40", "#f5b770", "#f8cfa0", "#fce7cf"],
  background: ["#2e1f05", "#5c3e0a", "#8a5d0f", "#b87c14", "#e69b19", "#ebaf47", "#f0c375", "#f5d7a3", "#faebd1"],
  primary: ["#301903", "#603206", "#904a09", "#c0630c", "#f07c0f", "#f3963f", "#f6b06f", "#f9cb9f", "#fce5cf"],
  secondary: ["#073003", "#0e6006", "#149009", "#1bc00c", "#22f00f", "#4ef33f", "#7af66f", "#a7f99f", "#d3fccf"],
  accent: ["#033011", "#066023", "#099034", "#0cc045", "#0ff056", "#3ff378", "#6ff69a", "#9ff9bc", "#cffcdd"],
  complementary: ["#031a30", "#063560", "#094f90", "#0c69c0", "#0f83f0", "#3f9cf3", "#6fb5f6", "#9fcdf9", "#cfe6fc"],
  tetradic: ["#043003", "#086006", "#0b9009", "#0fc00c", "#13f00f", "#42f33f", "#71f66f", "#a0f99f", "#d0fccf"],
  triadic: ["#033019", "#066032", "#09904a", "#0cc063", "#0ff07c", "#3ff396", "#6ff6b0", "#9ff9ca", "#cffce5"],
  analogous: ["#300304", "#600608", "#90090b", "#c00c0f", "#f00f13", "#f33f42", "#f66f71", "#f99fa0", "#fccfd0"],
  ...defaultCommonColors,
};

export const jaffaCronusLightTheme: ThemeObject = {
  colors: jaffaCronusLightColors,
  spacing: jaffaCronusSpacing,
  typography: jaffaCronusTypography,
};

export const jaffaCronusDarkTheme: ThemeObject = {
  colors: jaffaCronusDarkColors,
  spacing: jaffaCronusSpacing,
  typography: jaffaCronusTypography,
};

export { jaffaCronusSpacing, jaffaCronusTypography };

export const jaffaCronusTheme: MultiThemeProviderProps["themes"] = [
  {
    name: "dark",
    theme: jaffaCronusDarkTheme,
  },
  {
    name: "light",
    theme: jaffaCronusLightTheme,
  },
];
