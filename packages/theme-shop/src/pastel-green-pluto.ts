import { ColorsObject, MultiThemeProviderProps, ThemeObject } from "@kami-ui/types";
import {
  defaultSpacing as pastelGreenPlutoSpacing,
  defaultTypography as pastelGreenPlutoTypography,
  defaultCommonColors,
} from "./default";

export const pastelGreenPlutoLightColors: ColorsObject = {
  text: ["#d2f9d9", "#a6f2b3", "#79ec8c", "#4ce666", "#20df40", "#19b333", "#138626", "#0d591a", "#062d0d"],
  background: ["#d2f9d8", "#a5f3b1", "#78ed8a", "#4be763", "#1fe03c", "#18b430", "#128724", "#0c5a18", "#062d0c"],
  primary: ["#d3f8d9", "#a6f2b3", "#7aeb8d", "#4ee467", "#21de41", "#1bb134", "#148527", "#0d591a", "#072c0d"],
  secondary: ["#d9d2f9", "#b4a6f2", "#8e79ec", "#694ce6", "#4320df", "#3619b3", "#281386", "#1b0d59", "#0d062d"],
  accent: ["#f9d2f9", "#f2a6f2", "#ec79ec", "#e64ce6", "#df20df", "#b319b3", "#861386", "#590d59", "#2d062d"],
  complementary: ["#f8d3f2", "#f2a6e5", "#eb7ad8", "#e44ecb", "#de21be", "#b11b98", "#851472", "#590d4c", "#2c0726"],
  tetradic: ["#d3dff8", "#a6bff2", "#7aa0eb", "#4e80e4", "#2160de", "#1b4db1", "#143a85", "#0d2659", "#07132c"],
  triadic: ["#d9d3f8", "#b3a6f2", "#8d7aeb", "#674ee4", "#4021de", "#341bb1", "#271485", "#1a0d59", "#0d072c"],
  analogous: ["#dff8d3", "#bff2a6", "#a0eb7a", "#80e44e", "#60de21", "#4db11b", "#3a8514", "#26590d", "#132c07"],
  ...defaultCommonColors,
};

export const pastelGreenPlutoDarkColors: ColorsObject = {
  text: ["#072c0d", "#0d591a", "#148527", "#1bb134", "#21de41", "#4ee467", "#7aeb8d", "#a6f2b3", "#d3f8d9"],
  background: ["#072c0e", "#0e581b", "#158429", "#1cb037", "#22dd45", "#4fe36a", "#7bea8f", "#a7f1b4", "#d3f8da"],
  primary: ["#072c0d", "#0d591a", "#148527", "#1bb134", "#21de41", "#4ee467", "#7aeb8d", "#a6f2b3", "#d3f8d9"],
  secondary: ["#0d062d", "#1b0d59", "#281386", "#3619b3", "#4320df", "#694ce6", "#8e79ec", "#b4a6f2", "#d9d2f9"],
  accent: ["#2d062d", "#590d59", "#861386", "#b319b3", "#df20df", "#e64ce6", "#ec79ec", "#f2a6f2", "#f9d2f9"],
  complementary: ["#2c0726", "#590d4c", "#851472", "#b11b98", "#de21be", "#e44ecb", "#eb7ad8", "#f2a6e5", "#f8d3f2"],
  tetradic: ["#07132c", "#0d2659", "#143a85", "#1b4db1", "#2160de", "#4e80e4", "#7aa0eb", "#a6bff2", "#d3dff8"],
  triadic: ["#0d072c", "#1a0d59", "#271485", "#341bb1", "#4021de", "#674ee4", "#8d7aeb", "#b3a6f2", "#d9d3f8"],
  analogous: ["#132c07", "#26590d", "#3a8514", "#4db11b", "#60de21", "#80e44e", "#a0eb7a", "#bff2a6", "#dff8d3"],
  ...defaultCommonColors,
};

export const pastelGreenPlutoLightTheme: ThemeObject = {
  colors: pastelGreenPlutoLightColors,
  spacing: pastelGreenPlutoSpacing,
  typography: pastelGreenPlutoTypography,
};

export const pastelGreenPlutoDarkTheme: ThemeObject = {
  colors: pastelGreenPlutoDarkColors,
  spacing: pastelGreenPlutoSpacing,
  typography: pastelGreenPlutoTypography,
};

export { pastelGreenPlutoSpacing, pastelGreenPlutoTypography };

export const pastelGreenPlutoTheme: MultiThemeProviderProps["themes"] = [
  {
    name: "dark",
    theme: pastelGreenPlutoDarkTheme,
  },
  {
    name: "light",
    theme: pastelGreenPlutoLightTheme,
  },
];
