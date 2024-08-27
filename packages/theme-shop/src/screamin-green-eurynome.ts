import { ColorsObject, MultiThemeProviderProps, ThemeObject } from "@kami-ui/types";
import {
  defaultSpacing as screaminGreenEurynomeSpacing,
  defaultTypography as screaminGreenEurynomeTypography,
  defaultCommonColors,
} from "./default";

export const screaminGreenEurynomeLightColors: ColorsObject = {
  text: ["#d4fccf", "#a9f99f", "#7ef76e", "#53f43e", "#29f10e", "#20c10b", "#189108", "#106006", "#083003"],
  background: ["#ddffcc", "#bbff99", "#99ff66", "#77ff33", "#55ff00", "#44cc00", "#339900", "#226600", "#113300"],
  primary: ["#d9fbd0", "#b3f7a1", "#8ef471", "#68f042", "#42ec13", "#35bd0f", "#288e0b", "#1a5e08", "#0d2f04"],
  secondary: ["#d0e1fb", "#a1c2f7", "#72a4f3", "#4385ef", "#1467eb", "#1052bc", "#0c3e8d", "#08295e", "#04152f"],
  accent: ["#d6d0fb", "#aca1f7", "#8371f4", "#5942f0", "#3013ec", "#260fbd", "#1d0b8e", "#13085e", "#0a042f"],
  complementary: ["#f2d0fb", "#e4a1f7", "#d871f4", "#ca42f0", "#bd13ec", "#970fbd", "#720b8e", "#4b085e", "#26042f"],
  tetradic: ["#d0effb", "#a1dff7", "#71cff4", "#42bff0", "#13afec", "#0f8cbd", "#0b698e", "#08465e", "#04232f"],
  triadic: ["#d0d9fb", "#a1b4f7", "#718df4", "#4268f0", "#1342ec", "#0f35bd", "#0b278e", "#081b5e", "#040d2f"],
  analogous: ["#effbd0", "#dff7a1", "#cff471", "#bff042", "#afec13", "#8cbd0f", "#698e0b", "#465e08", "#232f04"],
  ...defaultCommonColors,
};

export const screaminGreenEurynomeDarkColors: ColorsObject = {
  text: ["#083003", "#106105", "#189108", "#20c20a", "#28f20d", "#53f53d", "#7ef76e", "#a9fa9e", "#d4fccf"],
  background: ["#143300", "#296600", "#3d9900", "#52cc00", "#66ff00", "#85ff33", "#a3ff66", "#c2ff99", "#e0ffcc"],
  primary: ["#0d2f04", "#1a5e08", "#288e0b", "#35bd0f", "#42ec13", "#68f042", "#8ef471", "#b3f7a1", "#d9fbd0"],
  secondary: ["#04152f", "#08295e", "#0c3e8d", "#1052bc", "#1467eb", "#4385ef", "#72a4f3", "#a1c2f7", "#d0e1fb"],
  accent: ["#0a042f", "#13085e", "#1d0b8e", "#260fbd", "#3013ec", "#5942f0", "#8371f4", "#aca1f7", "#d6d0fb"],
  complementary: ["#26042f", "#4b085e", "#720b8e", "#970fbd", "#bd13ec", "#ca42f0", "#d871f4", "#e4a1f7", "#f2d0fb"],
  tetradic: ["#04232f", "#08465e", "#0b698e", "#0f8cbd", "#13afec", "#42bff0", "#71cff4", "#a1dff7", "#d0effb"],
  triadic: ["#040d2f", "#081b5e", "#0b278e", "#0f35bd", "#1342ec", "#4268f0", "#718df4", "#a1b4f7", "#d0d9fb"],
  analogous: ["#232f04", "#465e08", "#698e0b", "#8cbd0f", "#afec13", "#bff042", "#cff471", "#dff7a1", "#effbd0"],
  ...defaultCommonColors,
};

export const screaminGreenEurynomeLightTheme: ThemeObject = {
  colors: screaminGreenEurynomeLightColors,
  spacing: screaminGreenEurynomeSpacing,
  typography: screaminGreenEurynomeTypography,
};

export const screaminGreenEurynomeDarkTheme: ThemeObject = {
  colors: screaminGreenEurynomeDarkColors,
  spacing: screaminGreenEurynomeSpacing,
  typography: screaminGreenEurynomeTypography,
};

export { screaminGreenEurynomeSpacing, screaminGreenEurynomeTypography };

export const screaminGreenEurynomeTheme: MultiThemeProviderProps["themes"] = [
  {
    name: "dark",
    theme: screaminGreenEurynomeDarkTheme,
  },
  {
    name: "light",
    theme: screaminGreenEurynomeLightTheme,
  },
];
