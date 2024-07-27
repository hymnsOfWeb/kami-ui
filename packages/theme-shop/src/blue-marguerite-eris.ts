import { ColorsObject, MultiThemeProviderProps, ThemeObject } from "@kami-ui/react-theme-common";
import {
  defaultSpacing as blueMargueriteErisSpacing,
  defaultTypography as blueMargueriteErisTypography,
  defaultCommonColors,
} from "./default";

export const blueMargueriteErisLightColors: ColorsObject = {
  text: ["#e1e1ea", "#c3c3d5", "#a5a5c0", "#8787ab", "#696996", "#545478", "#3f3f5a", "#2a2a3c", "#15151e"],
  background: ["#dedeed", "#bdbddb", "#9c9cc9", "#7b7bb7", "#5b5ba4", "#484884", "#363663", "#242442", "#121221"],
  primary: ["#dbdbf0", "#b7b7e1", "#9392d3", "#706ec4", "#4c4ab5", "#3d3b91", "#2d2c6d", "#1e1e48", "#0f0f24"],
  secondary: ["#d8d8f3", "#b1b1e7", "#8a8adb", "#6363cf", "#3c3cc3", "#30309c", "#242475", "#18184e", "#0c0c27"],
  accent: ["#d5d5f6", "#abaaee", "#8280e5", "#5856dc", "#2e2bd4", "#2523a9", "#1c1a7f", "#121155", "#09092a"],
  complementary: ["#f0f0db", "#e1e1b7", "#d2d392", "#c3c46e", "#b3b54a", "#90913b", "#6c6d2c", "#48481e", "#24240f"],
  tetradic: ["#f0dbe6", "#e1b7cc", "#d392b1", "#c46e98", "#b54a7e", "#913b65", "#6d2c4b", "#481e33", "#240f19"],
  triadic: ["#f0dbdb", "#e1b7b7", "#d39392", "#c46f6e", "#b54c4a", "#913c3b", "#6d2d2c", "#481e1e", "#240f0f"],
  analogous: ["#dbe6f0", "#b7cce1", "#92b1d3", "#6e98c4", "#4a7eb5", "#3b6591", "#2c4b6d", "#1e3348", "#0f1924"],
  ...defaultCommonColors,
};

export const blueMargueriteErisDarkColors: ColorsObject = {
  text: ["#15151e", "#2a2a3c", "#3f3f5a", "#555577", "#6a6a95", "#8888aa", "#a5a5c0", "#c3c3d5", "#e1e1ea"],
  background: ["#111122", "#222244", "#333366", "#444488", "#5555aa", "#7777bb", "#9999cc", "#bbbbdd", "#ddddee"],
  primary: ["#0f0f24", "#1e1e48", "#2d2c6d", "#3d3b91", "#4c4ab5", "#706ec4", "#9392d3", "#b7b7e1", "#dbdbf0"],
  secondary: ["#0c0c27", "#18184e", "#242475", "#30309c", "#3c3cc3", "#6363cf", "#8a8adb", "#b1b1e7", "#d8d8f3"],
  accent: ["#09092a", "#121155", "#1c1a7f", "#2523a9", "#2e2bd4", "#5856dc", "#8280e5", "#abaaee", "#d5d5f6"],
  complementary: ["#24240f", "#48481e", "#6c6d2c", "#90913b", "#b3b54a", "#c3c46e", "#d2d392", "#e1e1b7", "#f0f0db"],
  tetradic: ["#240f19", "#481e33", "#6d2c4b", "#913b65", "#b54a7e", "#c46e98", "#d392b1", "#e1b7cc", "#f0dbe6"],
  triadic: ["#240f0f", "#481e1e", "#6d2d2c", "#913c3b", "#b54c4a", "#c46f6e", "#d39392", "#e1b7b7", "#f0dbdb"],
  analogous: ["#0f1924", "#1e3348", "#2c4b6d", "#3b6591", "#4a7eb5", "#6e98c4", "#92b1d3", "#b7cce1", "#dbe6f0"],
  ...defaultCommonColors,
};

export const blueMargueriteErisLightTheme: ThemeObject = {
  colors: blueMargueriteErisLightColors,
  spacing: blueMargueriteErisSpacing,
  typography: blueMargueriteErisTypography,
};

export const blueMargueriteErisDarkTheme: ThemeObject = {
  colors: blueMargueriteErisDarkColors,
  spacing: blueMargueriteErisSpacing,
  typography: blueMargueriteErisTypography,
};

export { blueMargueriteErisSpacing, blueMargueriteErisTypography };

export const blueMargueriteErisTheme: MultiThemeProviderProps["themes"] = [
  {
    name: "dark",
    theme: blueMargueriteErisDarkTheme,
  },
  {
    name: "light",
    theme: blueMargueriteErisLightTheme,
  },
];
