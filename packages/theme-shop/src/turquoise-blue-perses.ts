import { ColorsObject, MultiThemeProviderProps, ThemeObject } from "@kami-ui/react-theme-common";
import {
  defaultSpacing as turquoiseBluePersesSpacing,
  defaultTypography as turquoiseBluePersesTypography,
  defaultCommonColors,
} from "./default";

export const turquoiseBluePersesLightColors: ColorsObject = {
  text: ["#d0fbf1", "#a1f7e3", "#72f3d5", "#43efc7", "#14ebb9", "#10bc94", "#0c8d6f", "#085e4a", "#042f25"],
  background: ["#d1faf5", "#a3f5eb", "#75f0e1", "#47ebd8", "#19e6ce", "#14b8a5", "#0f8a7b", "#0a5c52", "#052e29"],
  primary: ["#d0fbf2", "#a1f7e5", "#71f4d7", "#42f0ca", "#13ecbd", "#0fbd97", "#0b8e71", "#085e4c", "#042f26"],
  secondary: ["#fbd2d0", "#f7a4a1", "#f37772", "#ef4943", "#eb1c14", "#bc1610", "#8d110c", "#5e0b08", "#2f0604"],
  accent: ["#f6fbd0", "#edf7a1", "#e4f471", "#dbf042", "#d3ec13", "#a8bd0f", "#7e8e0b", "#545e08", "#2a2f04"],
  complementary: ["#fbd0d9", "#f7a1b4", "#f4718d", "#f04268", "#ec1342", "#bd0f35", "#8e0b27", "#5e081b", "#2f040d"],
  tetradic: ["#dcd0fb", "#b9a1f7", "#9671f4", "#7342f0", "#5013ec", "#400fbd", "#300b8e", "#20085e", "#10042f"],
  triadic: ["#f2d0fb", "#e4a1f7", "#d871f4", "#ca42f0", "#bd13ec", "#970fbd", "#720b8e", "#4b085e", "#26042f"],
  analogous: ["#d0fbdc", "#a1f7b9", "#71f496", "#42f073", "#13ec50", "#0fbd40", "#0b8e30", "#085e20", "#042f10"],
  ...defaultCommonColors,
};

export const turquoiseBluePersesDarkColors: ColorsObject = {
  text: ["#042f25", "#095d4a", "#0d8c6e", "#11bb93", "#16e9b8", "#44eec6", "#73f2d4", "#a2f6e3", "#d0fbf1"],
  background: ["#052e29", "#0a5c52", "#0f8a7b", "#14b8a5", "#19e6ce", "#47ebd8", "#75f0e1", "#a3f5eb", "#d1faf5"],
  primary: ["#042f26", "#085e4c", "#0b8e71", "#0fbd97", "#13ecbd", "#42f0ca", "#71f4d7", "#a1f7e5", "#d0fbf2"],
  secondary: ["#2f0604", "#5e0b08", "#8d110c", "#bc1610", "#eb1c14", "#ef4943", "#f37772", "#f7a4a1", "#fbd2d0"],
  accent: ["#2a2f04", "#545e08", "#7e8e0b", "#a8bd0f", "#d3ec13", "#dbf042", "#e4f471", "#edf7a1", "#f6fbd0"],
  complementary: ["#2f040d", "#5e081b", "#8e0b27", "#bd0f35", "#ec1342", "#f04268", "#f4718d", "#f7a1b4", "#fbd0d9"],
  tetradic: ["#10042f", "#20085e", "#300b8e", "#400fbd", "#5013ec", "#7342f0", "#9671f4", "#b9a1f7", "#dcd0fb"],
  triadic: ["#26042f", "#4b085e", "#720b8e", "#970fbd", "#bd13ec", "#ca42f0", "#d871f4", "#e4a1f7", "#f2d0fb"],
  analogous: ["#042f10", "#085e20", "#0b8e30", "#0fbd40", "#13ec50", "#42f073", "#71f496", "#a1f7b9", "#d0fbdc"],
  ...defaultCommonColors,
};

export const turquoiseBluePersesLightTheme: ThemeObject = {
  colors: turquoiseBluePersesLightColors,
  spacing: turquoiseBluePersesSpacing,
  typography: turquoiseBluePersesTypography,
};

export const turquoiseBluePersesDarkTheme: ThemeObject = {
  colors: turquoiseBluePersesDarkColors,
  spacing: turquoiseBluePersesSpacing,
  typography: turquoiseBluePersesTypography,
};

export { turquoiseBluePersesSpacing, turquoiseBluePersesTypography };

export const turquoiseBluePersesTheme: MultiThemeProviderProps["themes"] = [
  {
    name: "dark",
    theme: turquoiseBluePersesDarkTheme,
  },
  {
    name: "light",
    theme: turquoiseBluePersesLightTheme,
  },
];
