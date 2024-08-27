import { ColorsObject, MultiThemeProviderProps, ThemeObject } from "@kami-ui/types";
import {
  defaultSpacing as oldRoseZeusSpacing,
  defaultTypography as oldRoseZeusTypography,
  defaultCommonColors,
} from "./default";

export const oldRoseZeusLightColors: ColorsObject = {
  text: ["#ece4df", "#d8cac0", "#c5afa0", "#b19481", "#9e7961", "#7e614e", "#5f493a", "#3f3127", "#201813"],
  background: ["#eee4dd", "#ddc9bb", "#ccad99", "#bb9277", "#aa7755", "#885f44", "#664733", "#443022", "#221811"],
  primary: ["#efe2dc", "#dec5ba", "#cea897", "#be8c74", "#ad6f52", "#8b5941", "#684231", "#452c21", "#231610"],
  secondary: ["#f0e2db", "#e1c5b7", "#d2a893", "#c38b6f", "#b46e4b", "#90583c", "#6c422d", "#482c1e", "#24160f"],
  accent: ["#f2e1d9", "#e4c4b4", "#d7a68e", "#ca8968", "#bd6b42", "#975635", "#714028", "#4b2b1b", "#26150d"],
  complementary: ["#dce9ef", "#bad3de", "#97bdce", "#74a7be", "#5290ad", "#41748b", "#315768", "#213a45", "#101d23"],
  tetradic: ["#dfefdc", "#c1deba", "#a1ce97", "#82be74", "#63ad52", "#4f8b41", "#3b6831", "#284521", "#132310"],
  triadic: ["#dcefe2", "#badec5", "#97cea8", "#74be8b", "#52ad6f", "#418b58", "#316842", "#21452c", "#102316"],
  analogous: ["#efdcdf", "#debac1", "#ce97a1", "#be7482", "#ad5263", "#8b414f", "#68313b", "#452128", "#231013"],
  ...defaultCommonColors,
};

export const oldRoseZeusDarkColors: ColorsObject = {
  text: ["#201813", "#3f3127", "#5f493a", "#7e614e", "#9e7961", "#b19481", "#c5afa0", "#d8cac0", "#ece4df"],
  background: ["#221811", "#443022", "#664733", "#885f44", "#aa7755", "#bb9277", "#ccad99", "#ddc9bb", "#eee4dd"],
  primary: ["#231610", "#452c21", "#684231", "#8b5941", "#ad6f52", "#be8c74", "#cea897", "#dec5ba", "#efe2dc"],
  secondary: ["#24160f", "#482b1e", "#6c412d", "#90573c", "#b46c4b", "#c38a6f", "#d2a793", "#e1c4b7", "#f0e2db"],
  accent: ["#26150d", "#4b2b1b", "#714028", "#975635", "#bd6b42", "#ca8968", "#d7a68e", "#e4c4b4", "#f2e1d9"],
  complementary: ["#101d23", "#213a45", "#315768", "#41748b", "#5290ad", "#74a7be", "#97bdce", "#bad3de", "#dce9ef"],
  tetradic: ["#132310", "#284521", "#3b6831", "#4f8b41", "#63ad52", "#82be74", "#a1ce97", "#c1deba", "#dfefdc"],
  triadic: ["#102316", "#21452c", "#316842", "#418b58", "#52ad6f", "#74be8b", "#97cea8", "#badec5", "#dcefe2"],
  analogous: ["#231013", "#452128", "#68313b", "#8b414f", "#ad5263", "#be7482", "#ce97a1", "#debac1", "#efdcdf"],
  ...defaultCommonColors,
};

export const oldRoseZeusLightTheme: ThemeObject = {
  colors: oldRoseZeusLightColors,
  spacing: oldRoseZeusSpacing,
  typography: oldRoseZeusTypography,
};

export const oldRoseZeusDarkTheme: ThemeObject = {
  colors: oldRoseZeusDarkColors,
  spacing: oldRoseZeusSpacing,
  typography: oldRoseZeusTypography,
};

export { oldRoseZeusSpacing, oldRoseZeusTypography };

export const oldRoseZeusTheme: MultiThemeProviderProps["themes"] = [
  {
    name: "dark",
    theme: oldRoseZeusDarkTheme,
  },
  {
    name: "light",
    theme: oldRoseZeusLightTheme,
  },
];
