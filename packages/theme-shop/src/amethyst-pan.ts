import { ColorsObject, MultiThemeProviderProps, ThemeObject } from "@kami-ui/types";
import {
  defaultSpacing as amethystPanSpacing,
  defaultTypography as amethystPanTypography,
  defaultCommonColors,
} from "./default";

export const amethystPanLightColors: ColorsObject = {
  text: ["#f1daf0", "#e4b4e1", "#d68fd2", "#c969c3", "#bb44b3", "#963690", "#70296c", "#4b1b48", "#250e24"],
  background: ["#f2d9f2", "#e6b3e5", "#d98cd9", "#cc66cc", "#bf40bf", "#993399", "#732673", "#4d194d", "#260d26"],
  primary: ["#f2d9f2", "#e5b3e6", "#d78cd9", "#ca66cc", "#bd40bf", "#973399", "#712673", "#4c194d", "#260d26"],
  secondary: ["#f2e5d9", "#e5cab3", "#d8b08d", "#cb9667", "#be7b41", "#986334", "#724a27", "#4c311a", "#26190d"],
  accent: ["#f2efd9", "#e5e0b3", "#d8d08d", "#cbc167", "#beb141", "#988e34", "#726a27", "#4c471a", "#26230d"],
  complementary: ["#d9f2d9", "#b4e6b3", "#8fd98c", "#68cc66", "#42bf40", "#359933", "#297326", "#1a4d19", "#0d260d"],
  tetradic: ["#f2e5d9", "#e6ccb3", "#d9b08c", "#cc9766", "#bf7d40", "#996433", "#734a26", "#4d3219", "#26190d"],
  triadic: ["#f2f2d9", "#e6e5b3", "#d9d68c", "#ccca66", "#bfbd40", "#999733", "#737026", "#4d4c19", "#26260d"],
  analogous: ["#e5d9f2", "#ccb3e6", "#b08cd9", "#9766cc", "#7d40bf", "#643399", "#4a2673", "#32194d", "#190d26"],
  ...defaultCommonColors,
};

export const amethystPanDarkColors: ColorsObject = {
  text: ["#260d23", "#4c1a46", "#722769", "#98348c", "#be41af", "#cb67bf", "#d88dcf", "#e5b3df", "#f2d9ef"],
  background: ["#250e25", "#4b1b4b", "#702970", "#963696", "#bb44bb", "#c969c9", "#d68fd6", "#e4b4e4", "#f1daf1"],
  primary: ["#260d26", "#4c194d", "#712673", "#973399", "#bd40bf", "#ca66cc", "#d78cd9", "#e5b3e6", "#f2d9f2"],
  secondary: ["#26190d", "#4c311a", "#724a27", "#986334", "#be7b41", "#cb9667", "#d8b08d", "#e5cab3", "#f2e5d9"],
  accent: ["#26230d", "#4c471a", "#726a27", "#988e34", "#beb141", "#cbc167", "#d8d08d", "#e5e0b3", "#f2efd9"],
  complementary: ["#0d260d", "#1a4d19", "#297326", "#359933", "#42bf40", "#68cc66", "#8fd98c", "#b4e6b3", "#d9f2d9"],
  tetradic: ["#26190d", "#4d3219", "#734a26", "#996433", "#bf7d40", "#cc9766", "#d9b08c", "#e6ccb3", "#f2e5d9"],
  triadic: ["#26260d", "#4d4c19", "#737026", "#999733", "#bfbd40", "#ccca66", "#d9d68c", "#e6e5b3", "#f2f2d9"],
  analogous: ["#190d26", "#32194d", "#4a2673", "#643399", "#7d40bf", "#9766cc", "#b08cd9", "#ccb3e6", "#e5d9f2"],
  ...defaultCommonColors,
};

export const amethystPanLightTheme: ThemeObject = {
  colors: amethystPanLightColors,
  spacing: amethystPanSpacing,
  typography: amethystPanTypography,
};

export const amethystPanDarkTheme: ThemeObject = {
  colors: amethystPanDarkColors,
  spacing: amethystPanSpacing,
  typography: amethystPanTypography,
};

export { amethystPanSpacing, amethystPanTypography };

export const amethystPanTheme: MultiThemeProviderProps["themes"] = [
  {
    name: "dark",
    theme: amethystPanDarkTheme,
  },
  {
    name: "light",
    theme: amethystPanLightTheme,
  },
];
