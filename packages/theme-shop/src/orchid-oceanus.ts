import { ColorsObject, MultiThemeProviderProps, ThemeObject } from "@kami-ui/types";
import {
  defaultSpacing as orchidOceanusSpacing,
  defaultTypography as orchidOceanusTypography,
  defaultCommonColors,
} from "./default";

export const orchidOceanusLightColors: ColorsObject = {
  text: ["#eeddec", "#ddbbd9", "#cc99c7", "#bb77b4", "#aa55a1", "#884481", "#663361", "#442240", "#221120"],
  background: ["#f2d9f0", "#e6b3e0", "#d98cd1", "#cc66c2", "#bf40b3", "#99338f", "#73266b", "#4d1947", "#260d24"],
  primary: ["#f6d5f5", "#eeaaea", "#e580e0", "#dc56d6", "#d42bcb", "#a923a3", "#7f1a7a", "#551151", "#2a0929"],
  secondary: ["#fad1f8", "#f6a2f2", "#f174eb", "#ed45e4", "#e817de", "#ba12b1", "#8b0e85", "#5d0959", "#2e052c"],
  accent: ["#fecdfc", "#fe9af9", "#fd68f6", "#fd35f3", "#fc03f0", "#ca02c0", "#970290", "#650160", "#320130"],
  complementary: ["#d5f6d6", "#aaeeaf", "#80e585", "#56dc5d", "#2bd433", "#23a92a", "#1a7f1f", "#115516", "#092a0a"],
  tetradic: ["#f6e7d5", "#eed1aa", "#e5b880", "#dca056", "#d4882b", "#a96d23", "#7f521a", "#553811", "#2a1b09"],
  triadic: ["#f5f6d5", "#e9eeaa", "#e0e580", "#d5dc56", "#ccd42b", "#a2a923", "#7a7f1a", "#505511", "#292a09"],
  analogous: ["#e7d5f6", "#d1aaee", "#b880e5", "#a056dc", "#882bd4", "#6d23a9", "#521a7f", "#381155", "#1b092a"],
  ...defaultCommonColors,
};

export const orchidOceanusDarkColors: ColorsObject = {
  text: ["#221120", "#442240", "#663361", "#884481", "#aa55a1", "#bb77b4", "#cc99c7", "#ddbbd9", "#eeddec"],
  background: ["#260d24", "#4d1947", "#73266b", "#99338f", "#bf40b3", "#cc66c2", "#d98cd1", "#e6b3e0", "#f2d9f0"],
  primary: ["#2a0929", "#551151", "#7f1a7a", "#a923a3", "#d42bcb", "#dc56d6", "#e580e0", "#eeaaea", "#f6d5f5"],
  secondary: ["#2e052c", "#5d0959", "#8b0e85", "#ba12b1", "#e817de", "#ed45e4", "#f174eb", "#f6a2f2", "#fad1f8"],
  accent: ["#320130", "#650160", "#970290", "#ca02c0", "#fc03f0", "#fd35f3", "#fd68f6", "#fe9af9", "#fecdfc"],
  complementary: ["#092a0a", "#115516", "#1a7f1f", "#23a92a", "#2bd433", "#56dc5d", "#80e585", "#aaeeaf", "#d5f6d6"],
  tetradic: ["#2a1b09", "#553811", "#7f521a", "#a96d23", "#d4882b", "#dca056", "#e5b880", "#eed1aa", "#f6e7d5"],
  triadic: ["#292a09", "#505511", "#7a7f1a", "#a2a923", "#ccd42b", "#d5dc56", "#e0e580", "#e9eeaa", "#f5f6d5"],
  analogous: ["#1b092a", "#381155", "#521a7f", "#6d23a9", "#882bd4", "#a056dc", "#b880e5", "#d1aaee", "#e7d5f6"],
  ...defaultCommonColors,
};

export const orchidOceanusLightTheme: ThemeObject = {
  colors: orchidOceanusLightColors,
  spacing: orchidOceanusSpacing,
  typography: orchidOceanusTypography,
};

export const orchidOceanusDarkTheme: ThemeObject = {
  colors: orchidOceanusDarkColors,
  spacing: orchidOceanusSpacing,
  typography: orchidOceanusTypography,
};

export { orchidOceanusSpacing, orchidOceanusTypography };

export const orchidOceanusTheme: MultiThemeProviderProps["themes"] = [
  {
    name: "dark",
    theme: orchidOceanusDarkTheme,
  },
  {
    name: "light",
    theme: orchidOceanusLightTheme,
  },
];
