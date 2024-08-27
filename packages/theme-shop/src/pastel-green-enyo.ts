import { ColorsObject, MultiThemeProviderProps, ThemeObject } from "@kami-ui/types";
import {
  defaultSpacing as pastelGreenEnyoSpacing,
  defaultTypography as pastelGreenEnyoTypography,
  defaultCommonColors,
} from "./default";

export const pastelGreenEnyoLightColors: ColorsObject = {
  text: ["#d4f7e3", "#aaeec6", "#7fe6aa", "#55dd8e", "#2ad571", "#22aa5b", "#198044", "#11552d", "#082b17"],
  background: ["#d5f6de", "#abedbe", "#82e39d", "#58da7d", "#2ed15c", "#25a74a", "#1c7d37", "#125425", "#092a12"],
  primary: ["#d5f6df", "#acecbe", "#82e39e", "#59d97d", "#2fd05d", "#26a64a", "#1c7d38", "#135325", "#092a13"],
  secondary: ["#d5f6f1", "#acece2", "#82e3d4", "#59d9c6", "#2fd0b8", "#26a693", "#1c7d6e", "#135349", "#092a25"],
  accent: ["#d5f6f6", "#acecec", "#82e3e3", "#59d9d9", "#2fd0d0", "#26a6a6", "#1c7d7d", "#135353", "#092a2a"],
  complementary: ["#f6d5ec", "#ecacda", "#e382c8", "#d959b5", "#d02fa2", "#a62682", "#7d1c62", "#531341", "#2a0920"],
  tetradic: ["#d5dcf6", "#acbaec", "#8297e3", "#5975d9", "#2f52d0", "#2642a6", "#1c317d", "#132153", "#09102a"],
  triadic: ["#dfd5f6", "#beacec", "#9d82e3", "#7d59d9", "#5d2fd0", "#4a26a6", "#371c7d", "#251353", "#13092a"],
  analogous: ["#dcf6d5", "#baecac", "#97e382", "#75d959", "#52d02f", "#42a626", "#317d1c", "#215313", "#102a09"],
  ...defaultCommonColors,
};

export const pastelGreenEnyoDarkColors: ColorsObject = {
  text: ["#082b17", "#0f572e", "#178245", "#1fad5c", "#26d974", "#52e08f", "#7de8ab", "#a8f0c7", "#d4f7e3"],
  background: ["#0a2914", "#145229", "#1f7a3d", "#29a352", "#33cc66", "#5cd685", "#85e0a3", "#adebc2", "#d6f5e0"],
  primary: ["#092a13", "#135325", "#1c7d38", "#26a64a", "#2fd05d", "#59d97d", "#82e39e", "#acecbe", "#d5f6df"],
  secondary: ["#092a25", "#135349", "#1c7d6e", "#26a693", "#2fd0b8", "#59d9c6", "#82e3d4", "#acece2", "#d5f6f1"],
  accent: ["#092a2a", "#135353", "#1c7d7d", "#26a6a6", "#2fd0d0", "#59d9d9", "#82e3e3", "#acecec", "#d5f6f6"],
  complementary: ["#2a0920", "#531341", "#7d1c62", "#a62682", "#d02fa2", "#d959b5", "#e382c8", "#ecacda", "#f6d5ec"],
  tetradic: ["#09102a", "#132153", "#1c317d", "#2642a6", "#2f52d0", "#5975d9", "#8297e3", "#acbaec", "#d5dcf6"],
  triadic: ["#13092a", "#251353", "#371c7d", "#4a26a6", "#5d2fd0", "#7d59d9", "#9d82e3", "#beacec", "#dfd5f6"],
  analogous: ["#102a09", "#215313", "#317d1c", "#42a626", "#52d02f", "#75d959", "#97e382", "#baecac", "#dcf6d5"],
  ...defaultCommonColors,
};

export const pastelGreenEnyoLightTheme: ThemeObject = {
  colors: pastelGreenEnyoLightColors,
  spacing: pastelGreenEnyoSpacing,
  typography: pastelGreenEnyoTypography,
};

export const pastelGreenEnyoDarkTheme: ThemeObject = {
  colors: pastelGreenEnyoDarkColors,
  spacing: pastelGreenEnyoSpacing,
  typography: pastelGreenEnyoTypography,
};

export { pastelGreenEnyoSpacing, pastelGreenEnyoTypography };

export const pastelGreenEnyoTheme: MultiThemeProviderProps["themes"] = [
  {
    name: "dark",
    theme: pastelGreenEnyoDarkTheme,
  },
  {
    name: "light",
    theme: pastelGreenEnyoLightTheme,
  },
];
