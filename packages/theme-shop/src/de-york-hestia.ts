import { ColorsObject, MultiThemeProviderProps, ThemeObject } from "@kami-ui/types";
import {
  defaultSpacing as deYorkHestiaSpacing,
  defaultTypography as deYorkHestiaTypography,
  defaultCommonColors,
} from "./default";

export const deYorkHestiaLightColors: ColorsObject = {
  text: ["#e1eae1", "#c2d6c2", "#a4c1a4", "#86ac86", "#679867", "#537953", "#3e5b3e", "#293d29", "#151e15"],
  background: ["#deedde", "#bddbbd", "#9cc99c", "#7bb77b", "#5ba45b", "#488448", "#366336", "#244224", "#122112"],
  primary: ["#deeedd", "#bcddbb", "#9bcd98", "#7abc76", "#58ab54", "#478943", "#356732", "#234422", "#122211"],
  secondary: ["#dcf0db", "#b8e1b7", "#95d392", "#71c46e", "#4eb54a", "#3e913b", "#2f6d2c", "#1f481e", "#10240f"],
  accent: ["#daf2d9", "#b6e5b3", "#91d88d", "#6ccb67", "#47be41", "#399834", "#2b7227", "#1d4c1a", "#0e260d"],
  complementary: ["#edddee", "#dcbbdd", "#ca98cd", "#b876bc", "#a754ab", "#854389", "#643267", "#432244", "#211122"],
  tetradic: ["#dde7ee", "#bbcddd", "#98b5cd", "#769cbc", "#5484ab", "#436a89", "#324f67", "#223444", "#111b22"],
  triadic: ["#dddeee", "#bbbcdd", "#989bcd", "#7679bc", "#5458ab", "#434689", "#323567", "#222344", "#111222"],
  analogous: ["#e7eedd", "#cdddbb", "#b5cd98", "#9cbc76", "#84ab54", "#6a8943", "#4f6732", "#344422", "#1b2211"],
  ...defaultCommonColors,
};

export const deYorkHestiaDarkColors: ColorsObject = {
  text: ["#141f14", "#293d29", "#3d5c3d", "#527a52", "#669966", "#85ad85", "#a3c2a3", "#c2d6c2", "#e0ebe0"],
  background: ["#112211", "#224422", "#336633", "#448844", "#55aa55", "#77bb77", "#99cc99", "#bbddbb", "#ddeedd"],
  primary: ["#122211", "#244422", "#366732", "#488943", "#5aab54", "#7bbc76", "#9ccd98", "#bdddbb", "#deeedd"],
  secondary: ["#10240f", "#1f481e", "#2f6d2c", "#3e913b", "#4eb54a", "#71c46e", "#95d392", "#b8e1b7", "#dcf0db"],
  accent: ["#0e260d", "#1d4c1a", "#2b7227", "#399834", "#47be41", "#6ccb67", "#91d88d", "#b6e5b3", "#daf2d9"],
  complementary: ["#211122", "#422244", "#633267", "#844389", "#a554ab", "#b776bc", "#c998cd", "#dbbbdd", "#edddee"],
  tetradic: ["#111b22", "#223544", "#325167", "#436b89", "#5485ab", "#769ebc", "#98b7cd", "#bbcedd", "#dde7ee"],
  triadic: ["#111222", "#222444", "#323667", "#434889", "#545aab", "#767bbc", "#989ccd", "#bbbddd", "#dddeee"],
  analogous: ["#1b2211", "#354422", "#516732", "#6b8943", "#85ab54", "#9ebc76", "#b7cd98", "#ceddbb", "#e7eedd"],
  ...defaultCommonColors,
};

export const deYorkHestiaLightTheme: ThemeObject = {
  colors: deYorkHestiaLightColors,
  spacing: deYorkHestiaSpacing,
  typography: deYorkHestiaTypography,
};

export const deYorkHestiaDarkTheme: ThemeObject = {
  colors: deYorkHestiaDarkColors,
  spacing: deYorkHestiaSpacing,
  typography: deYorkHestiaTypography,
};

export { deYorkHestiaSpacing, deYorkHestiaTypography };

export const deYorkHestiaTheme: MultiThemeProviderProps["themes"] = [
  {
    name: "dark",
    theme: deYorkHestiaDarkTheme,
  },
  {
    name: "light",
    theme: deYorkHestiaLightTheme,
  },
];
