import { ColorsObject, MultiThemeProviderProps, ThemeObject } from "@kami-ui/react-theme-common";
import {
  defaultSpacing as royalBlueAtlasSpacing,
  defaultTypography as royalBlueAtlasTypography,
  defaultCommonColors,
} from "./default";

export const royalBlueAtlasLightColors: ColorsObject = {
  text: ["#d1e1fa", "#a3c4f5", "#75a6f0", "#4789eb", "#196be6", "#1456b8", "#0f408a", "#0a2b5c", "#05152e"],
  background: ["#d1e0fa", "#a3c1f5", "#75a2f0", "#4783eb", "#1964e6", "#1450b8", "#0f3c8a", "#0a285c", "#05142e"],
  primary: ["#d1dffa", "#a2bef6", "#749ef1", "#457ded", "#175de8", "#124aba", "#0e388b", "#09255d", "#05132e"],
  secondary: ["#f9d1fa", "#f3a3f5", "#ec75f0", "#e646ec", "#e018e7", "#b313b9", "#860f8a", "#5a0a5c", "#2d052e"],
  accent: ["#fad1ec", "#f5a3da", "#f075c7", "#ec46b5", "#e718a2", "#b91382", "#8a0f61", "#5c0a41", "#2e0520"],
  complementary: ["#faecd1", "#f6daa2", "#f1c774", "#edb545", "#e8a217", "#ba8212", "#8b610e", "#5d4109", "#2e2005"],
  tetradic: ["#fad1f3", "#f6a2e8", "#f174dc", "#ed45d1", "#e817c5", "#ba129e", "#8b0e76", "#5d094f", "#2e0527"],
  triadic: ["#fad1df", "#f6a2be", "#f1749e", "#ed457d", "#e8175d", "#ba124a", "#8b0e38", "#5d0925", "#2e0513"],
  analogous: ["#d1f3fa", "#a2e8f6", "#74dcf1", "#45d1ed", "#17c5e8", "#129eba", "#0e768b", "#094f5d", "#05272e"],
  ...defaultCommonColors,
};

export const royalBlueAtlasDarkColors: ColorsObject = {
  text: ["#05152e", "#0a2b5c", "#0f408a", "#1456b8", "#196be6", "#4789eb", "#75a6f0", "#a3c4f5", "#d1e1fa"],
  background: ["#05142e", "#0a285c", "#0f3c8a", "#1450b8", "#1964e6", "#4783eb", "#75a2f0", "#a3c1f5", "#d1e0fa"],
  primary: ["#05132e", "#09255d", "#0e388b", "#124aba", "#175de8", "#457ded", "#749ef1", "#a2bef6", "#d1dffa"],
  secondary: ["#2d052e", "#5a0a5c", "#860f8a", "#b313b9", "#e018e7", "#e646ec", "#ec75f0", "#f3a3f5", "#f9d1fa"],
  accent: ["#2e0520", "#5c0a41", "#8a0f61", "#b91382", "#e718a2", "#ec46b5", "#f075c7", "#f5a3da", "#fad1ec"],
  complementary: ["#2e2005", "#5d4109", "#8b610e", "#ba8212", "#e8a217", "#edb545", "#f1c774", "#f6daa2", "#faecd1"],
  tetradic: ["#2e0527", "#5d094f", "#8b0e76", "#ba129e", "#e817c5", "#ed45d1", "#f174dc", "#f6a2e8", "#fad1f3"],
  triadic: ["#2e0513", "#5d0925", "#8b0e38", "#ba124a", "#e8175d", "#ed457d", "#f1749e", "#f6a2be", "#fad1df"],
  analogous: ["#05272e", "#094f5d", "#0e768b", "#129eba", "#17c5e8", "#45d1ed", "#74dcf1", "#a2e8f6", "#d1f3fa"],
  ...defaultCommonColors,
};

export const royalBlueAtlasLightTheme: ThemeObject = {
  colors: royalBlueAtlasLightColors,
  spacing: royalBlueAtlasSpacing,
  typography: royalBlueAtlasTypography,
};

export const royalBlueAtlasDarkTheme: ThemeObject = {
  colors: royalBlueAtlasDarkColors,
  spacing: royalBlueAtlasSpacing,
  typography: royalBlueAtlasTypography,
};

export { royalBlueAtlasSpacing, royalBlueAtlasTypography };

export const royalBlueAtlasTheme: MultiThemeProviderProps["themes"] = [
  {
    name: "dark",
    theme: royalBlueAtlasDarkTheme,
  },
  {
    name: "light",
    theme: royalBlueAtlasLightTheme,
  },
];
