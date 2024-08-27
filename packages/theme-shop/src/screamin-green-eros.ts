import { ColorsObject, MultiThemeProviderProps, ThemeObject } from "@kami-ui/types";
import {
  defaultSpacing as screaminGreenErosSpacing,
  defaultTypography as screaminGreenErosTypography,
  defaultCommonColors,
} from "./default";

export const screaminGreenErosLightColors: ColorsObject = {
  text: ["#cefdd5", "#9dfbab", "#6bfa81", "#3af857", "#09f62c", "#07c524", "#05941b", "#046212", "#023109"],
  background: ["#d0fbd3", "#a1f7a8", "#71f47c", "#42f051", "#13ec25", "#0fbd1e", "#0b8e16", "#085e0f", "#042f07"],
  primary: ["#cefdd2", "#9efaa5", "#6df878", "#3cf64c", "#0bf41f", "#09c319", "#079212", "#05610c", "#023106"],
  secondary: ["#cfeefc", "#9eddfa", "#6eccf7", "#3dbbf5", "#0daaf2", "#0a88c2", "#086691", "#054461", "#032230"],
  accent: ["#ceddfd", "#9ebbfa", "#6d99f8", "#3c77f6", "#0b55f4", "#0944c3", "#073392", "#052261", "#021131"],
  complementary: ["#fdcef9", "#fa9ef2", "#f86dec", "#f63ce7", "#f40be1", "#c309b4", "#920786", "#610559", "#31022d"],
  tetradic: ["#cee2fd", "#9ec4fa", "#6da7f8", "#3c8af6", "#0b6cf4", "#0957c3", "#074192", "#052b61", "#021631"],
  triadic: ["#d2cefd", "#a69efa", "#796df8", "#4c3cf6", "#1e0bf4", "#1909c3", "#130792", "#0d0561", "#060231"],
  analogous: ["#e2fdce", "#c4fa9e", "#a7f86d", "#89f63c", "#6cf40b", "#56c309", "#419207", "#2b6105", "#163102"],
  ...defaultCommonColors,
};

export const screaminGreenErosDarkColors: ColorsObject = {
  text: ["#02310a", "#036313", "#05941d", "#06c626", "#08f730", "#39f959", "#6bfa83", "#9cfcac", "#cefdd6"],
  background: ["#033007", "#075f0e", "#0a8f15", "#0dbf1c", "#11ee23", "#40f24f", "#70f57b", "#a0f8a7", "#cffcd3"],
  primary: ["#023106", "#05610c", "#079212", "#09c319", "#0bf41f", "#3cf64c", "#6df878", "#9efaa5", "#cefdd2"],
  secondary: ["#022231", "#054461", "#076692", "#0988c3", "#0baaf4", "#3cbbf6", "#6dccf8", "#9eddfa", "#ceeefd"],
  accent: ["#021131", "#052261", "#073392", "#0944c3", "#0b55f4", "#3c77f6", "#6d99f8", "#9ebbfa", "#ceddfd"],
  complementary: ["#31022d", "#610559", "#920786", "#c309b4", "#f40be1", "#f63ce7", "#f86dec", "#fa9ef2", "#fdcef9"],
  tetradic: ["#021631", "#052b61", "#074192", "#0957c3", "#0b6cf4", "#3c8af6", "#6da7f8", "#9ec4fa", "#cee2fd"],
  triadic: ["#060231", "#0d0561", "#130792", "#1909c3", "#1e0bf4", "#4c3cf6", "#796df8", "#a69efa", "#d2cefd"],
  analogous: ["#163102", "#2b6105", "#419207", "#56c309", "#6cf40b", "#89f63c", "#a7f86d", "#c4fa9e", "#e2fdce"],
  ...defaultCommonColors,
};

export const screaminGreenErosLightTheme: ThemeObject = {
  colors: screaminGreenErosLightColors,
  spacing: screaminGreenErosSpacing,
  typography: screaminGreenErosTypography,
};

export const screaminGreenErosDarkTheme: ThemeObject = {
  colors: screaminGreenErosDarkColors,
  spacing: screaminGreenErosSpacing,
  typography: screaminGreenErosTypography,
};

export { screaminGreenErosSpacing, screaminGreenErosTypography };

export const screaminGreenErosTheme: MultiThemeProviderProps["themes"] = [
  {
    name: "dark",
    theme: screaminGreenErosDarkTheme,
  },
  {
    name: "light",
    theme: screaminGreenErosLightTheme,
  },
];
