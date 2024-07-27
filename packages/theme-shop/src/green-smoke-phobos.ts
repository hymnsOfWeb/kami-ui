import { ColorsObject, MultiThemeProviderProps, ThemeObject } from "@kami-ui/react-theme-common";
import {
  defaultSpacing as greenSmokePhobosSpacing,
  defaultTypography as greenSmokePhobosTypography,
  defaultCommonColors,
} from "./default";

export const greenSmokePhobosLightColors: ColorsObject = {
  text: ["#ebeedd", "#d7ddbb", "#c3cc99", "#afbb77", "#9caa55", "#7c8844", "#5d6633", "#3e4422", "#1f2211"],
  background: ["#e8eedd", "#d2ddbb", "#bbcc99", "#a4bb77", "#8eaa55", "#718844", "#556633", "#394422", "#1c2211"],
  primary: ["#eaedde", "#d4dbbd", "#bfc99c", "#a9b87a", "#94a659", "#768547", "#596336", "#3b4224", "#1e2112"],
  secondary: ["#e3edde", "#c7dbbd", "#acc99c", "#90b87a", "#74a659", "#5d8547", "#466336", "#2e4224", "#172112"],
  accent: ["#e1edde", "#c3dbbd", "#a5c99c", "#87b87a", "#69a659", "#548547", "#3f6336", "#2a4224", "#152112"],
  complementary: ["#e1deed", "#c4bddb", "#a69cc9", "#8a7ab8", "#6b59a6", "#574785", "#403663", "#2b2442", "#151221"],
  tetradic: ["#deede9", "#bddbd3", "#9cc9bc", "#7ab8a9", "#59a691", "#478576", "#366356", "#24423a", "#12211d"],
  triadic: ["#deeaed", "#bdd4db", "#9cbfc9", "#7aa9b8", "#5994a6", "#477685", "#365963", "#243b42", "#121e21"],
  analogous: ["#ede9de", "#dbd3bd", "#c9bc9c", "#b8a97a", "#a69159", "#857647", "#635636", "#423a24", "#211c12"],
  ...defaultCommonColors,
};

export const greenSmokePhobosDarkColors: ColorsObject = {
  text: ["#1f2211", "#3f4422", "#5e6633", "#7e8844", "#9daa55", "#b1bb77", "#c4cc99", "#d8ddbb", "#ebeedd"],
  background: ["#1f240f", "#3d471f", "#5c6b2e", "#7a8f3d", "#99b34d", "#adc270", "#c2d194", "#d6e0b8", "#ebf0db"],
  primary: ["#1e2112", "#3b4224", "#596336", "#768547", "#94a659", "#a9b87a", "#bfc99c", "#d4dbbd", "#eaedde"],
  secondary: ["#172112", "#2e4224", "#466336", "#5d8547", "#74a659", "#90b87a", "#acc99c", "#c7dbbd", "#e3edde"],
  accent: ["#152112", "#2a4224", "#3f6336", "#548547", "#69a659", "#87b87a", "#a5c99c", "#c3dbbd", "#e1edde"],
  complementary: ["#151221", "#2b2442", "#403663", "#574785", "#6b59a6", "#8a7ab8", "#a69cc9", "#c4bddb", "#e1deed"],
  tetradic: ["#12211d", "#24423a", "#366356", "#478576", "#59a691", "#7ab8a9", "#9cc9bc", "#bddbd3", "#deede9"],
  triadic: ["#121e21", "#243b42", "#365963", "#477685", "#5994a6", "#7aa9b8", "#9cbfc9", "#bdd4db", "#deeaed"],
  analogous: ["#211c12", "#423a24", "#635636", "#857647", "#a69159", "#b8a97a", "#c9bc9c", "#dbd3bd", "#ede9de"],
  ...defaultCommonColors,
};

export const greenSmokePhobosLightTheme: ThemeObject = {
  colors: greenSmokePhobosLightColors,
  spacing: greenSmokePhobosSpacing,
  typography: greenSmokePhobosTypography,
};

export const greenSmokePhobosDarkTheme: ThemeObject = {
  colors: greenSmokePhobosDarkColors,
  spacing: greenSmokePhobosSpacing,
  typography: greenSmokePhobosTypography,
};

export { greenSmokePhobosSpacing, greenSmokePhobosTypography };

export const greenSmokePhobosTheme: MultiThemeProviderProps["themes"] = [
  {
    name: "dark",
    theme: greenSmokePhobosDarkTheme,
  },
  {
    name: "light",
    theme: greenSmokePhobosLightTheme,
  },
];
