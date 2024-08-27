import { ColorsObject, MultiThemeProviderProps, ThemeObject } from "@kami-ui/types";
import {
  defaultSpacing as puceMnemosyneSpacing,
  defaultTypography as puceMnemosyneTypography,
  defaultCommonColors,
} from "./default";

export const puceMnemosyneLightColors: ColorsObject = {
  text: ["#f0dbe2", "#e2b6c5", "#d392a8", "#c56d8a", "#b6496d", "#923a57", "#6d2c42", "#491d2c", "#240f16"],
  background: ["#f0dbe6", "#e0b8cc", "#d194b3", "#c27099", "#b34d80", "#8f3d66", "#6b2e4d", "#471f33", "#240f1a"],
  primary: ["#f0dbe3", "#e1b7c6", "#d293aa", "#c36f8e", "#b44b72", "#903c5b", "#6c2d44", "#481e2d", "#240f17"],
  secondary: ["#f0e0db", "#e1c0b7", "#d2a193", "#c3816f", "#b4624b", "#904e3c", "#6c3b2d", "#48271e", "#24140f"],
  accent: ["#f0e3db", "#e1c6b7", "#d3aa92", "#c48e6e", "#b5714a", "#915b3b", "#6d442c", "#482d1e", "#24170f"],
  complementary: ["#dbf0e8", "#b7e1d2", "#93d2bb", "#6fc3a4", "#4bb48e", "#3c9071", "#2d6c55", "#1e4839", "#0f241c"],
  tetradic: ["#eef0db", "#dbe1b7", "#cad293", "#b8c36f", "#a6b44b", "#85903c", "#646c2d", "#42481e", "#22240f"],
  triadic: ["#e3f0db", "#c6e1b7", "#aad293", "#8ec36f", "#72b44b", "#5b903c", "#446c2d", "#2d481e", "#17240f"],
  analogous: ["#f0dbee", "#e1b7db", "#d293ca", "#c36fb8", "#b44ba6", "#903c85", "#6c2d64", "#481e42", "#240f22"],
  ...defaultCommonColors,
};

export const puceMnemosyneDarkColors: ColorsObject = {
  text: ["#250e14", "#4b1b29", "#70293d", "#963651", "#bb4466", "#c96984", "#d68fa3", "#e4b4c2", "#f1dae0"],
  background: ["#240f1a", "#471f33", "#6b2e4d", "#8f3d66", "#b34d80", "#c27099", "#d194b3", "#e0b8cc", "#f0dbe6"],
  primary: ["#240f17", "#481e2d", "#6c2d44", "#903c5b", "#b44b72", "#c36f8e", "#d293aa", "#e1b7c6", "#f0dbe3"],
  secondary: ["#24140f", "#48271e", "#6c3b2d", "#904e3c", "#b4624b", "#c3816f", "#d2a193", "#e1c0b7", "#f0e0db"],
  accent: ["#24170f", "#482d1e", "#6d442c", "#915b3b", "#b5714a", "#c48e6e", "#d3aa92", "#e1c6b7", "#f0e3db"],
  complementary: ["#0f241c", "#1e4839", "#2d6c55", "#3c9071", "#4bb48e", "#6fc3a4", "#93d2bb", "#b7e1d2", "#dbf0e8"],
  tetradic: ["#22240f", "#42481e", "#646c2d", "#85903c", "#a6b44b", "#b8c36f", "#cad293", "#dbe1b7", "#eef0db"],
  triadic: ["#17240f", "#2d481e", "#446c2d", "#5b903c", "#72b44b", "#8ec36f", "#aad293", "#c6e1b7", "#e3f0db"],
  analogous: ["#240f22", "#481e42", "#6c2d64", "#903c85", "#b44ba6", "#c36fb8", "#d293ca", "#e1b7db", "#f0dbee"],
  ...defaultCommonColors,
};

export const puceMnemosyneLightTheme: ThemeObject = {
  colors: puceMnemosyneLightColors,
  spacing: puceMnemosyneSpacing,
  typography: puceMnemosyneTypography,
};

export const puceMnemosyneDarkTheme: ThemeObject = {
  colors: puceMnemosyneDarkColors,
  spacing: puceMnemosyneSpacing,
  typography: puceMnemosyneTypography,
};

export { puceMnemosyneSpacing, puceMnemosyneTypography };

export const puceMnemosyneTheme: MultiThemeProviderProps["themes"] = [
  {
    name: "dark",
    theme: puceMnemosyneDarkTheme,
  },
  {
    name: "light",
    theme: puceMnemosyneLightTheme,
  },
];
