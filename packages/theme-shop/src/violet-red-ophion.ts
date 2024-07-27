import { ColorsObject, MultiThemeProviderProps, ThemeObject } from "@kami-ui/react-theme-common";
import {
  defaultSpacing as violetRedOphionSpacing,
  defaultTypography as violetRedOphionTypography,
  defaultCommonColors,
} from "./default";

export const violetRedOphionLightColors: ColorsObject = {
  text: ["#fccfdc", "#f99fb9", "#f66f95", "#f33f72", "#f00f4f", "#c00c3f", "#90092f", "#600620", "#300310"],
  background: ["#fccfdc", "#f99fb9", "#f66f95", "#f33f72", "#f00f4f", "#c00c3f", "#90092f", "#600620", "#300310"],
  primary: ["#fccfdc", "#f99fba", "#f76e97", "#f43e75", "#f10e52", "#c10b42", "#910831", "#600621", "#300310"],
  secondary: ["#fce5cf", "#f9cb9f", "#f6b06f", "#f3963f", "#f07c0f", "#c0630c", "#904a09", "#603206", "#301903"],
  accent: ["#fcefcf", "#f9de9f", "#f7ce6e", "#f4bd3e", "#f1ad0e", "#c18a0b", "#916808", "#604506", "#302303"],
  complementary: ["#cffcef", "#9ff9de", "#6ef7ce", "#3ef4bd", "#0ef1ad", "#0bc18a", "#089168", "#066045", "#033023"],
  tetradic: ["#f2fccf", "#e7f99f", "#dcf76e", "#d0f43e", "#c4f10e", "#9dc10b", "#769108", "#4e6006", "#263003"],
  triadic: ["#dcfccf", "#baf99f", "#97f76e", "#75f43e", "#52f10e", "#42c10b", "#319108", "#216006", "#103003"],
  analogous: ["#fccff2", "#f99fe7", "#f76edc", "#f43ed0", "#f10ec4", "#c10b9d", "#910876", "#60064e", "#300326"],
  ...defaultCommonColors,
};

export const violetRedOphionDarkColors: ColorsObject = {
  text: ["#300311", "#5f0721", "#8f0a32", "#bf0d43", "#ee1153", "#f24076", "#f57098", "#f8a0ba", "#fccfdd"],
  background: ["#300311", "#5f0721", "#8f0a32", "#bf0d43", "#ee1153", "#f24076", "#f57098", "#f8a0ba", "#fccfdd"],
  primary: ["#300310", "#600621", "#910831", "#c10b42", "#f10e52", "#f43e75", "#f76e97", "#f99fba", "#fccfdc"],
  secondary: ["#301903", "#603206", "#904a09", "#c0630c", "#f07c0f", "#f3963f", "#f6b06f", "#f9cb9f", "#fce5cf"],
  accent: ["#302303", "#604506", "#916808", "#c18a0b", "#f1ad0e", "#f4bd3e", "#f7ce6e", "#f9de9f", "#fcefcf"],
  complementary: ["#033023", "#066045", "#089168", "#0bc18a", "#0ef1ad", "#3ef4bd", "#6ef7ce", "#9ff9de", "#cffcef"],
  tetradic: ["#263003", "#4e6006", "#769108", "#9dc10b", "#c4f10e", "#d0f43e", "#dcf76e", "#e7f99f", "#f2fccf"],
  triadic: ["#103003", "#216006", "#319108", "#42c10b", "#52f10e", "#75f43e", "#97f76e", "#baf99f", "#dcfccf"],
  analogous: ["#300326", "#60064e", "#910876", "#c10b9d", "#f10ec4", "#f43ed0", "#f76edc", "#f99fe7", "#fccff2"],
  ...defaultCommonColors,
};

export const violetRedOphionLightTheme: ThemeObject = {
  colors: violetRedOphionLightColors,
  spacing: violetRedOphionSpacing,
  typography: violetRedOphionTypography,
};

export const violetRedOphionDarkTheme: ThemeObject = {
  colors: violetRedOphionDarkColors,
  spacing: violetRedOphionSpacing,
  typography: violetRedOphionTypography,
};

export { violetRedOphionSpacing, violetRedOphionTypography };

export const violetRedOphionTheme: MultiThemeProviderProps["themes"] = [
  {
    name: "dark",
    theme: violetRedOphionDarkTheme,
  },
  {
    name: "light",
    theme: violetRedOphionLightTheme,
  },
];
