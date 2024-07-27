import { ColorsObject, MultiThemeProviderProps, ThemeObject } from "@kami-ui/react-theme-common";
import {
  defaultSpacing as starshipHermesSpacing,
  defaultTypography as starshipHermesTypography,
  defaultCommonColors,
} from "./default";

export const starshipHermesLightColors: ColorsObject = {
  text: ["#fcfccf", "#f9f99f", "#f7f76e", "#f4f43e", "#f1f10e", "#c1c10b", "#919108", "#606006", "#303003"],
  background: ["#fbfbd0", "#f6f6a2", "#f2f273", "#eeee44", "#e9e916", "#bbbb11", "#8c8c0d", "#5d5d09", "#2f2f04"],
  primary: ["#fbfccf", "#f8f99f", "#f4f76e", "#f1f43e", "#edf10e", "#bec10b", "#8e9108", "#5f6006", "#2f3003"],
  secondary: ["#cffafc", "#9ff4f9", "#6feff6", "#3feaf3", "#0fe4f0", "#0cb7c0", "#098990", "#065b60", "#032e30"],
  accent: ["#cfdafc", "#9fb5f9", "#6e90f7", "#3e6cf4", "#0e47f1", "#0b39c1", "#082a91", "#061c60", "#030e30"],
  complementary: ["#d0cffc", "#a09ff9", "#706ef7", "#413ef4", "#120ef1", "#0e0bc1", "#0a0891", "#080660", "#040330"],
  tetradic: ["#cffce6", "#9ff9cd", "#6ef7b5", "#3ef49c", "#0ef183", "#0bc169", "#08914f", "#066035", "#03301a"],
  triadic: ["#cffbfc", "#9ff7f9", "#6ef5f7", "#3ef1f4", "#0eedf1", "#0bbec1", "#088f91", "#065f60", "#032f30"],
  analogous: ["#fce6cf", "#f9cd9f", "#f7b56e", "#f49c3e", "#f1830e", "#c1690b", "#914f08", "#603506", "#301a03"],
  ...defaultCommonColors,
};

export const starshipHermesDarkColors: ColorsObject = {
  text: ["#303003", "#616105", "#919108", "#c2c20a", "#f2f20d", "#f5f53d", "#f7f76e", "#fafa9e", "#fcfccf"],
  background: ["#2e2e05", "#5c5c0a", "#8a8a0f", "#b8b814", "#e5e619", "#ebeb47", "#f0f075", "#f5f5a3", "#fafad1"],
  primary: ["#2f3003", "#5f6006", "#8e9108", "#bec10b", "#edf10e", "#f1f43e", "#f4f76e", "#f8f99f", "#fbfccf"],
  secondary: ["#032e30", "#065b60", "#098990", "#0cb7c0", "#0fe4f0", "#3feaf3", "#6feff6", "#9ff4f9", "#cffafc"],
  accent: ["#030e30", "#061c60", "#082a91", "#0b39c1", "#0e47f1", "#3e6cf4", "#6e90f7", "#9fb5f9", "#cfdafc"],
  complementary: ["#040330", "#080660", "#0a0891", "#0e0bc1", "#120ef1", "#413ef4", "#706ef7", "#a09ff9", "#d0cffc"],
  tetradic: ["#03301a", "#066035", "#08914f", "#0bc169", "#0ef183", "#3ef49c", "#6ef7b5", "#9ff9cd", "#cffce6"],
  triadic: ["#032f30", "#065f60", "#088f91", "#0bbec1", "#0eedf1", "#3ef1f4", "#6ef5f7", "#9ff7f9", "#cffbfc"],
  analogous: ["#301a03", "#603506", "#914f08", "#c1690b", "#f1830e", "#f49c3e", "#f7b56e", "#f9cd9f", "#fce6cf"],
  ...defaultCommonColors,
};

export const starshipHermesLightTheme: ThemeObject = {
  colors: starshipHermesLightColors,
  spacing: starshipHermesSpacing,
  typography: starshipHermesTypography,
};

export const starshipHermesDarkTheme: ThemeObject = {
  colors: starshipHermesDarkColors,
  spacing: starshipHermesSpacing,
  typography: starshipHermesTypography,
};

export { starshipHermesSpacing, starshipHermesTypography };

export const starshipHermesTheme: MultiThemeProviderProps["themes"] = [
  {
    name: "dark",
    theme: starshipHermesDarkTheme,
  },
  {
    name: "light",
    theme: starshipHermesLightTheme,
  },
];
