import { ColorsObject, MultiThemeProviderProps, ThemeObject } from "@kami-ui/react-theme-common";
import {
  defaultSpacing as deYorkNikeSpacing,
  defaultTypography as deYorkNikeTypography,
  defaultCommonColors,
} from "./default";

export const deYorkNikeLightColors: ColorsObject = {
  text: ["#dcefe4", "#b9dfc8", "#95d0ad", "#72c091", "#4fb076", "#3f8d5e", "#2f6a47", "#20462f", "#102318"],
  background: ["#ddeee6", "#bbddcc", "#99ccb3", "#77bb99", "#55aa80", "#448866", "#33664d", "#224433", "#11221a"],
  primary: ["#dcefe4", "#b9dfc9", "#96cfaf", "#73bf94", "#50af79", "#408c61", "#306949", "#204630", "#102318"],
  secondary: ["#dceaef", "#b9d5df", "#96c1cf", "#73acbf", "#5097af", "#40798c", "#305b69", "#203c46", "#101e23"],
  accent: ["#dce3ef", "#b9c8df", "#96accf", "#7390bf", "#5074af", "#405d8c", "#304669", "#202f46", "#101723"],
  complementary: ["#efdce7", "#dfb9cf", "#cf96b6", "#bf739e", "#af5086", "#8c406b", "#693050", "#462036", "#23101b"],
  tetradic: ["#dcdeef", "#b9bcdf", "#969acf", "#7378bf", "#5056af", "#40458c", "#303469", "#202346", "#101223"],
  triadic: ["#e4dcef", "#c9b9df", "#af96cf", "#9473bf", "#7950af", "#61408c", "#493069", "#302046", "#181023"],
  analogous: ["#deefdc", "#bcdfb9", "#9acf96", "#78bf73", "#56af50", "#458c40", "#346930", "#234620", "#122310"],
  ...defaultCommonColors,
};

export const deYorkNikeDarkColors: ColorsObject = {
  text: ["#10231a", "#204633", "#30694d", "#408c66", "#50af80", "#73bf99", "#96cfb3", "#b9dfcc", "#dcefe6"],
  background: ["#112218", "#224431", "#336649", "#448862", "#55aa7a", "#77bb95", "#99ccaf", "#bbddca", "#ddeee4"],
  primary: ["#102318", "#204630", "#306949", "#408c61", "#50af79", "#73bf94", "#96cfaf", "#b9dfc9", "#dcefe4"],
  secondary: ["#101e23", "#213d45", "#315b68", "#417a8b", "#5298ad", "#74adbe", "#97c1ce", "#bad6de", "#dceaef"],
  accent: ["#101723", "#202f46", "#304669", "#405d8c", "#5074af", "#7390bf", "#96accf", "#b9c8df", "#dce3ef"],
  complementary: ["#23101b", "#462036", "#693050", "#8c406b", "#af5086", "#bf739e", "#cf96b6", "#dfb9cf", "#efdce7"],
  tetradic: ["#101223", "#202346", "#303469", "#40458c", "#5056af", "#7378bf", "#969acf", "#b9bcdf", "#dcdeef"],
  triadic: ["#181023", "#302046", "#493069", "#61408c", "#7950af", "#9473bf", "#af96cf", "#c9b9df", "#e4dcef"],
  analogous: ["#122310", "#234620", "#346930", "#458c40", "#56af50", "#78bf73", "#9acf96", "#bcdfb9", "#deefdc"],
  ...defaultCommonColors,
};

export const deYorkNikeLightTheme: ThemeObject = {
  colors: deYorkNikeLightColors,
  spacing: deYorkNikeSpacing,
  typography: deYorkNikeTypography,
};

export const deYorkNikeDarkTheme: ThemeObject = {
  colors: deYorkNikeDarkColors,
  spacing: deYorkNikeSpacing,
  typography: deYorkNikeTypography,
};

export { deYorkNikeSpacing, deYorkNikeTypography };

export const deYorkNikeTheme: MultiThemeProviderProps["themes"] = [
  {
    name: "dark",
    theme: deYorkNikeDarkTheme,
  },
  {
    name: "light",
    theme: deYorkNikeLightTheme,
  },
];
