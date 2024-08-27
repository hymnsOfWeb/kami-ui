import { ColorsObject, MultiThemeProviderProps, ThemeObject } from "@kami-ui/types";
import {
  defaultSpacing as pastelGreenHeliosSpacing,
  defaultTypography as pastelGreenHeliosTypography,
  defaultCommonColors,
} from "./default";

export const pastelGreenHeliosLightColors: ColorsObject = {
  text: ["#d2f9da", "#a5f3b6", "#78ed91", "#4ae86c", "#1de248", "#17b539", "#12872b", "#0c5a1d", "#062d0e"],
  background: ["#d2f9d2", "#a6f2a6", "#79ec79", "#4ce64c", "#20df20", "#19b319", "#138613", "#0d590d", "#062d06"],
  primary: ["#d2f9d9", "#a6f2b3", "#79ec8c", "#4ce666", "#20df40", "#19b333", "#138626", "#0d591a", "#062d0d"],
  secondary: ["#d2f9ec", "#a6f2d9", "#79ecc6", "#4ce6b3", "#20df9f", "#19b380", "#138660", "#0d5940", "#062d20"],
  accent: ["#d2f9ef", "#a5f3de", "#78edce", "#4be7bd", "#1fe0ad", "#18b48a", "#128768", "#0c5a45", "#062d23"],
  complementary: ["#f9d2f2", "#f2a6e5", "#ec79d9", "#e64ccc", "#df20bf", "#b31999", "#861373", "#590d4c", "#2d0626"],
  tetradic: ["#d2def9", "#a6bff2", "#799fec", "#4c7fe6", "#2060df", "#194cb3", "#133986", "#0d2659", "#06122d"],
  triadic: ["#d9d2f9", "#b3a6f2", "#8c79ec", "#664ce6", "#4020df", "#3319b3", "#261386", "#1a0d59", "#0d062d"],
  analogous: ["#def9d2", "#bff2a6", "#9fec79", "#7fe64c", "#60df20", "#4cb319", "#398613", "#26590d", "#122d06"],
  ...defaultCommonColors,
};

export const pastelGreenHeliosDarkColors: ColorsObject = {
  text: ["#062d0e", "#0b5b1c", "#11882b", "#16b639", "#1ce347", "#49e96c", "#77ee91", "#a4f4b5", "#d2f9da"],
  background: ["#052e05", "#0a5c0a", "#0f8a0f", "#14b814", "#19e619", "#47eb47", "#75f075", "#a3f5a3", "#d1fad1"],
  primary: ["#062d0d", "#0d591a", "#138626", "#19b333", "#20df40", "#4ce666", "#79ec8c", "#a6f2b3", "#d2f9d9"],
  secondary: ["#062d20", "#0c5a40", "#128760", "#18b480", "#1fe0a0", "#4be7b3", "#78edc6", "#a5f3d9", "#d2f9ec"],
  accent: ["#062d23", "#0c5a45", "#128768", "#18b48a", "#1fe0ad", "#4be7bd", "#78edce", "#a5f3de", "#d2f9ef"],
  complementary: ["#2d0626", "#590d4c", "#861373", "#b31999", "#df20bf", "#e64ccc", "#ec79d9", "#f2a6e5", "#f9d2f2"],
  tetradic: ["#06122d", "#0d2659", "#133986", "#194cb3", "#2060df", "#4c7fe6", "#799fec", "#a6bff2", "#d2def9"],
  triadic: ["#0d062d", "#1a0d59", "#261386", "#3319b3", "#4020df", "#664ce6", "#8c79ec", "#b3a6f2", "#d9d2f9"],
  analogous: ["#122d06", "#26590d", "#398613", "#4cb319", "#60df20", "#7fe64c", "#9fec79", "#bff2a6", "#def9d2"],
  ...defaultCommonColors,
};

export const pastelGreenHeliosLightTheme: ThemeObject = {
  colors: pastelGreenHeliosLightColors,
  spacing: pastelGreenHeliosSpacing,
  typography: pastelGreenHeliosTypography,
};

export const pastelGreenHeliosDarkTheme: ThemeObject = {
  colors: pastelGreenHeliosDarkColors,
  spacing: pastelGreenHeliosSpacing,
  typography: pastelGreenHeliosTypography,
};

export { pastelGreenHeliosSpacing, pastelGreenHeliosTypography };

export const pastelGreenHeliosTheme: MultiThemeProviderProps["themes"] = [
  {
    name: "dark",
    theme: pastelGreenHeliosDarkTheme,
  },
  {
    name: "light",
    theme: pastelGreenHeliosLightTheme,
  },
];
