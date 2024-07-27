import { ColorsObject, MultiThemeProviderProps, ThemeObject } from "@kami-ui/react-theme-common";
import {
  defaultSpacing as violaMetisSpacing,
  defaultTypography as violaMetisTypography,
  defaultCommonColors,
} from "./default";

export const violaMetisLightColors: ColorsObject = {
  text: ["#eae1e8", "#d5c3d1", "#c0a5b9", "#ab87a2", "#96698b", "#78546f", "#5a3f53", "#3c2a38", "#1e151c"],
  background: ["#eddee9", "#dbbdd3", "#c99cbe", "#b77ba8", "#a45b92", "#844875", "#633658", "#42243a", "#21121d"],
  primary: ["#efdceb", "#debad7", "#ce97c3", "#be74af", "#ad529b", "#8b417c", "#68315d", "#45213e", "#23101f"],
  secondary: ["#f1daec", "#e2b6d9", "#d491c7", "#c66cb4", "#b847a1", "#933981", "#6e2b61", "#491d40", "#250e20"],
  accent: ["#f3d8ee", "#e7b1dc", "#db8acb", "#cf63b9", "#c33ca8", "#9c3086", "#752465", "#4e1843", "#270c22"],
  complementary: ["#dcefe0", "#badec1", "#97cea2", "#74be83", "#52ad64", "#418b50", "#31683c", "#214528", "#102314"],
  tetradic: ["#efeadc", "#ded3ba", "#cebe97", "#bea874", "#ad9252", "#8b7541", "#685731", "#453a21", "#231e10"],
  triadic: ["#ebefdc", "#d7deba", "#c3ce97", "#afbe74", "#9bad52", "#7c8b41", "#5d6831", "#3e4521", "#1f2310"],
  analogous: ["#eadcef", "#d3bade", "#be97ce", "#a874be", "#9252ad", "#75418b", "#583168", "#3a2145", "#1e1023"],
  ...defaultCommonColors,
};

export const violaMetisDarkColors: ColorsObject = {
  text: ["#1f141c", "#3d2938", "#5c3d54", "#7a5270", "#99668c", "#ad85a3", "#c2a3ba", "#d6c2d1", "#ebe0e8"],
  background: ["#22111f", "#44223d", "#66335c", "#88447a", "#aa5599", "#bb77ad", "#cc99c2", "#ddbbd6", "#eeddeb"],
  primary: ["#23101f", "#45213e", "#68315d", "#8b417c", "#ad529b", "#be74af", "#ce97c3", "#debad7", "#efdceb"],
  secondary: ["#240f20", "#491d40", "#6d2c60", "#923a80", "#b649a0", "#c56db3", "#d392c6", "#e2b6d9", "#f0dbec"],
  accent: ["#270c22", "#4e1843", "#752465", "#9c3086", "#c33ca8", "#cf63b9", "#db8acb", "#e7b1dc", "#f3d8ee"],
  complementary: ["#102314", "#214528", "#31683c", "#418b50", "#52ad64", "#74be83", "#97cea2", "#badec1", "#dcefe0"],
  tetradic: ["#231e10", "#453a21", "#685731", "#8b7541", "#ad9252", "#bea874", "#cebe97", "#ded3ba", "#efeadc"],
  triadic: ["#1f2310", "#3e4521", "#5d6831", "#7c8b41", "#9bad52", "#afbe74", "#c3ce97", "#d7deba", "#ebefdc"],
  analogous: ["#1e1023", "#3a2145", "#583168", "#75418b", "#9252ad", "#a874be", "#be97ce", "#d3bade", "#eadcef"],
  ...defaultCommonColors,
};

export const violaMetisLightTheme: ThemeObject = {
  colors: violaMetisLightColors,
  spacing: violaMetisSpacing,
  typography: violaMetisTypography,
};

export const violaMetisDarkTheme: ThemeObject = {
  colors: violaMetisDarkColors,
  spacing: violaMetisSpacing,
  typography: violaMetisTypography,
};

export { violaMetisSpacing, violaMetisTypography };

export const violaMetisTheme: MultiThemeProviderProps["themes"] = [
  {
    name: "dark",
    theme: violaMetisDarkTheme,
  },
  {
    name: "light",
    theme: violaMetisLightTheme,
  },
];
