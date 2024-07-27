import { ColorsObject, MultiThemeProviderProps, ThemeObject } from "@kami-ui/react-theme-common";
import {
  defaultSpacing as wisteriaHarmoniaSpacing,
  defaultTypography as wisteriaHarmoniaTypography,
  defaultCommonColors,
} from "./default";

export const wisteriaHarmoniaLightColors: ColorsObject = {
  text: ["#e9e2e9", "#d3c5d3", "#bda8bd", "#a78ba7", "#916e91", "#745874", "#574257", "#3a2c3a", "#1d161d"],
  background: ["#e9e2e9", "#d3c5d3", "#bda8bd", "#a78ba7", "#916e91", "#745874", "#574257", "#3a2c3a", "#1d161d"],
  primary: ["#edddee", "#dabbdd", "#c898cd", "#b676bc", "#a454ab", "#834389", "#623267", "#412244", "#211122"],
  secondary: ["#efdaf1", "#dfb6e2", "#cf91d4", "#be6cc6", "#ae47b8", "#8b3993", "#692b6e", "#461d49", "#230e25"],
  accent: ["#f1d8f3", "#e3b1e7", "#d48adb", "#c663cf", "#b83cc3", "#93309c", "#6e2475", "#4a184e", "#250c27"],
  complementary: ["#deeedd", "#beddbb", "#9dcd98", "#7cbc76", "#5bab54", "#498943", "#376732", "#254422", "#122211"],
  tetradic: ["#eee4dd", "#ddc9bb", "#cdad98", "#bc9376", "#ab7854", "#896043", "#674732", "#443022", "#221811"],
  triadic: ["#eeeddd", "#dddabb", "#cdc898", "#bcb676", "#aba454", "#898343", "#676232", "#444122", "#222111"],
  analogous: ["#e4ddee", "#c9bbdd", "#ad98cd", "#9376bc", "#7854ab", "#604389", "#473267", "#302244", "#181122"],
  ...defaultCommonColors,
};

export const wisteriaHarmoniaDarkColors: ColorsObject = {
  text: ["#1d161d", "#3a2c3a", "#574257", "#745874", "#916e91", "#a78ba7", "#bda8bd", "#d3c5d3", "#e9e2e9"],
  background: ["#1f141f", "#3d293d", "#5c3d5c", "#7a527a", "#996699", "#ad85ad", "#c2a3c2", "#d6c2d6", "#ebe0eb"],
  primary: ["#211122", "#412244", "#623267", "#834389", "#a454ab", "#b676bc", "#c898cd", "#dabbdd", "#edddee"],
  secondary: ["#230e25", "#461d49", "#692b6e", "#8b3993", "#ae47b8", "#be6cc6", "#cf91d4", "#dfb6e2", "#efdaf1"],
  accent: ["#250c27", "#4a184e", "#6e2475", "#93309c", "#b83cc3", "#c663cf", "#d48adb", "#e3b1e7", "#f1d8f3"],
  complementary: ["#122211", "#254422", "#376732", "#498943", "#5bab54", "#7cbc76", "#9dcd98", "#beddbb", "#deeedd"],
  tetradic: ["#221811", "#443022", "#674732", "#896043", "#ab7854", "#bc9376", "#cdad98", "#ddc9bb", "#eee4dd"],
  triadic: ["#222111", "#444122", "#676232", "#898343", "#aba454", "#bcb676", "#cdc898", "#dddabb", "#eeeddd"],
  analogous: ["#181122", "#302244", "#473267", "#604389", "#7854ab", "#9376bc", "#ad98cd", "#c9bbdd", "#e4ddee"],
  ...defaultCommonColors,
};

export const wisteriaHarmoniaLightTheme: ThemeObject = {
  colors: wisteriaHarmoniaLightColors,
  spacing: wisteriaHarmoniaSpacing,
  typography: wisteriaHarmoniaTypography,
};

export const wisteriaHarmoniaDarkTheme: ThemeObject = {
  colors: wisteriaHarmoniaDarkColors,
  spacing: wisteriaHarmoniaSpacing,
  typography: wisteriaHarmoniaTypography,
};

export { wisteriaHarmoniaSpacing, wisteriaHarmoniaTypography };

export const wisteriaHarmoniaTheme: MultiThemeProviderProps["themes"] = [
  {
    name: "dark",
    theme: wisteriaHarmoniaDarkTheme,
  },
  {
    name: "light",
    theme: wisteriaHarmoniaLightTheme,
  },
];
