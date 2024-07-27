import { ColorsObject, MultiThemeProviderProps, ThemeObject } from "@kami-ui/react-theme-common";
import {
  defaultSpacing as deYorkEpimetheusSpacing,
  defaultTypography as deYorkEpimetheusTypography,
  defaultCommonColors,
} from "./default";

export const deYorkEpimetheusLightColors: ColorsObject = {
  text: ["#ddeee1", "#bbddc4", "#99cca6", "#77bb88", "#55aa6a", "#448855", "#336640", "#22442b", "#112215"],
  background: ["#deede1", "#bddbc3", "#9cc9a5", "#7bb787", "#5ba469", "#488454", "#36633f", "#24422a", "#122115"],
  primary: ["#dcefe0", "#badec0", "#97cea1", "#74be82", "#52ad62", "#418b4f", "#31683b", "#214527", "#102314"],
  secondary: ["#dbf0df", "#b7e1bf", "#93d29f", "#6fc37f", "#4bb45e", "#3c904c", "#2d6c39", "#1e4826", "#0f2413"],
  accent: ["#daf1de", "#b6e2be", "#91d49d", "#6cc67d", "#47b85c", "#39934a", "#2b6e37", "#1d4925", "#0e2512"],
  complementary: ["#efdceb", "#debad8", "#ce97c4", "#be74b0", "#ad529c", "#8b417d", "#68315e", "#45213f", "#23101f"],
  tetradic: ["#dce1ef", "#bac6de", "#97a8ce", "#748bbe", "#526fad", "#41588b", "#314268", "#212d45", "#101523"],
  triadic: ["#e0dcef", "#c0bade", "#a197ce", "#8274be", "#6352ad", "#4f418b", "#3b3168", "#272145", "#141023"],
  analogous: ["#e1efdc", "#c6deba", "#a8ce97", "#8bbe74", "#6fad52", "#588b41", "#426831", "#2d4521", "#152310"],
  ...defaultCommonColors,
};

export const deYorkEpimetheusDarkColors: ColorsObject = {
  text: ["#0f2414", "#1f4729", "#2e6b3d", "#3d8f52", "#4db366", "#70c285", "#94d1a3", "#b8e0c2", "#dbf0e0"],
  background: ["#112214", "#224429", "#33663d", "#448852", "#55aa66", "#77bb85", "#99cca3", "#bbddc2", "#ddeee0"],
  primary: ["#102314", "#214527", "#31683b", "#418b4f", "#52ad62", "#74be82", "#97cea1", "#badec0", "#dcefe0"],
  secondary: ["#0f2413", "#1e4826", "#2d6c39", "#3c904c", "#4bb45e", "#6fc37f", "#93d29f", "#b7e1bf", "#dbf0df"],
  accent: ["#0e2512", "#1d4925", "#2b6e37", "#39934a", "#47b85c", "#6cc67d", "#91d49d", "#b6e2be", "#daf1de"],
  complementary: ["#23101f", "#45213f", "#68315e", "#8b417d", "#ad529c", "#be74b0", "#ce97c4", "#debad8", "#efdceb"],
  tetradic: ["#101523", "#212d45", "#314268", "#41588b", "#526fad", "#748bbe", "#97a8ce", "#bac6de", "#dce1ef"],
  triadic: ["#141023", "#272145", "#3b3168", "#4f418b", "#6352ad", "#8274be", "#a197ce", "#c0bade", "#e0dcef"],
  analogous: ["#152310", "#2d4521", "#426831", "#588b41", "#6fad52", "#8bbe74", "#a8ce97", "#c6deba", "#e1efdc"],
  ...defaultCommonColors,
};

export const deYorkEpimetheusLightTheme: ThemeObject = {
  colors: deYorkEpimetheusLightColors,
  spacing: deYorkEpimetheusSpacing,
  typography: deYorkEpimetheusTypography,
};

export const deYorkEpimetheusDarkTheme: ThemeObject = {
  colors: deYorkEpimetheusDarkColors,
  spacing: deYorkEpimetheusSpacing,
  typography: deYorkEpimetheusTypography,
};

export { deYorkEpimetheusSpacing, deYorkEpimetheusTypography };

export const deYorkEpimetheusTheme: MultiThemeProviderProps["themes"] = [
  {
    name: "dark",
    theme: deYorkEpimetheusDarkTheme,
  },
  {
    name: "light",
    theme: deYorkEpimetheusLightTheme,
  },
];
