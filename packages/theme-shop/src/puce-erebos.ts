import { ColorsObject, MultiThemeProviderProps, ThemeObject } from "@kami-ui/react-theme-common";
import {
  defaultSpacing as puceErebosSpacing,
  defaultTypography as puceErebosTypography,
  defaultCommonColors,
} from "./default";

export const puceErebosLightColors: ColorsObject = {
  text: ["#efdce8", "#debad0", "#ce97b9", "#be74a2", "#ad528a", "#8b416f", "#683153", "#452137", "#23101c"],
  background: ["#efdcea", "#dfb9d4", "#cf96bf", "#bf73a9", "#af5094", "#8c4076", "#693059", "#46203b", "#23101e"],
  primary: ["#f0dbe8", "#e0b8d0", "#d194b9", "#c270a1", "#b34d8a", "#8f3d6e", "#6b2e53", "#471f37", "#240f1c"],
  secondary: ["#efe1dc", "#e0c3b8", "#d0a595", "#c18671", "#b1684e", "#8e533e", "#6a3f2f", "#472a1f", "#231510"],
  accent: ["#efe8dc", "#e0d2b8", "#d0bb95", "#c1a571", "#b18e4e", "#8e723e", "#6a552f", "#47391f", "#231c10"],
  complementary: ["#dbf0e3", "#b8e0c8", "#94d1ac", "#70c291", "#4db376", "#3d8f5e", "#2e6b46", "#1f472f", "#0f2417"],
  tetradic: ["#f0eedb", "#e0dcb8", "#d1cb94", "#c2ba70", "#b3a94d", "#8f873d", "#6b652e", "#47431f", "#24220f"],
  triadic: ["#e8f0db", "#d0e0b8", "#b9d194", "#a1c270", "#8ab34d", "#6e8f3d", "#536b2e", "#37471f", "#1c240f"],
  analogous: ["#eedbf0", "#dcb8e0", "#cb94d1", "#ba70c2", "#a94db3", "#873d8f", "#652e6b", "#431f47", "#220f24"],
  ...defaultCommonColors,
};

export const puceErebosDarkColors: ColorsObject = {
  text: ["#22111d", "#44223a", "#663357", "#884475", "#aa5592", "#bb77a8", "#cc99bd", "#ddbbd3", "#eedde9"],
  background: ["#240f1f", "#471f3d", "#6b2e5c", "#8f3d7a", "#b34d99", "#c270ad", "#d194c2", "#e0b8d6", "#f0dbeb"],
  primary: ["#240f1c", "#471f37", "#6b2e53", "#8f3d6e", "#b34d8a", "#c270a1", "#d194b9", "#e0b8d0", "#f0dbe8"],
  secondary: ["#231510", "#472a1f", "#6a3f2f", "#8e533e", "#b1684e", "#c18671", "#d0a595", "#e0c3b8", "#efe1dc"],
  accent: ["#231c10", "#47391f", "#6a552f", "#8e723e", "#b18e4e", "#c1a571", "#d0bb95", "#e0d2b8", "#efe8dc"],
  complementary: ["#0f2417", "#1f472f", "#2e6b46", "#3d8f5e", "#4db376", "#70c291", "#94d1ac", "#b8e0c8", "#dbf0e3"],
  tetradic: ["#24220f", "#47431f", "#6b652e", "#8f873d", "#b3a94d", "#c2ba70", "#d1cb94", "#e0dcb8", "#f0eedb"],
  triadic: ["#1c240f", "#37471f", "#536b2e", "#6e8f3d", "#8ab34d", "#a1c270", "#b9d194", "#d0e0b8", "#e8f0db"],
  analogous: ["#220f24", "#431f47", "#652e6b", "#873d8f", "#a94db3", "#ba70c2", "#cb94d1", "#dcb8e0", "#eedbf0"],
  ...defaultCommonColors,
};

export const puceErebosLightTheme: ThemeObject = {
  colors: puceErebosLightColors,
  spacing: puceErebosSpacing,
  typography: puceErebosTypography,
};

export const puceErebosDarkTheme: ThemeObject = {
  colors: puceErebosDarkColors,
  spacing: puceErebosSpacing,
  typography: puceErebosTypography,
};

export { puceErebosSpacing, puceErebosTypography };

export const puceErebosTheme: MultiThemeProviderProps["themes"] = [
  {
    name: "dark",
    theme: puceErebosDarkTheme,
  },
  {
    name: "light",
    theme: puceErebosLightTheme,
  },
];
