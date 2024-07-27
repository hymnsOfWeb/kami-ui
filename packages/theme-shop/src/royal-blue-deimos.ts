import { ColorsObject, MultiThemeProviderProps, ThemeObject } from "@kami-ui/react-theme-common";
import {
  defaultSpacing as royalBlueDeimosSpacing,
  defaultTypography as royalBlueDeimosTypography,
  defaultCommonColors,
} from "./default";

export const royalBlueDeimosLightColors: ColorsObject = {
  text: ["#dbdbf0", "#b7b7e1", "#9292d3", "#6e6ec4", "#4a4ab5", "#3b3b91", "#2c2c6d", "#1e1e48", "#0f0f24"],
  background: ["#d8d8f3", "#b0b0e8", "#8989dc", "#6262d0", "#3b3bc4", "#2f2f9d", "#232376", "#17174f", "#0c0c27"],
  primary: ["#d4d4f7", "#aaaaee", "#7f7fe6", "#5555dd", "#2a2ad5", "#2222aa", "#191980", "#111155", "#08082b"],
  secondary: ["#d1d1fa", "#a4a4f4", "#7676ef", "#4848ea", "#1b1be4", "#1515b7", "#101089", "#0b0b5b", "#05052e"],
  accent: ["#cecefd", "#9e9efa", "#6d6df8", "#3c3cf6", "#0b0bf4", "#0909c3", "#070792", "#050561", "#020231"],
  complementary: ["#f7f7d4", "#eeeeaa", "#e6e67f", "#dddd55", "#d5d52a", "#aaaa22", "#808019", "#555511", "#2b2b08"],
  tetradic: ["#f7d4e6", "#eeaacc", "#e67fb2", "#dd5599", "#d52a80", "#aa2266", "#80194c", "#551133", "#2b0819"],
  triadic: ["#f7d4d4", "#eeaaaa", "#e67f7f", "#dd5555", "#d52a2a", "#aa2222", "#801919", "#551111", "#2b0808"],
  analogous: ["#d4e6f7", "#aaccee", "#7fb2e6", "#5599dd", "#2a80d5", "#2266aa", "#194c80", "#113355", "#08192b"],
  ...defaultCommonColors,
};

export const royalBlueDeimosDarkColors: ColorsObject = {
  text: ["#0f0f24", "#1e1e48", "#2c2c6d", "#3b3b91", "#4a4ab5", "#6e6ec4", "#9292d3", "#b7b7e1", "#dbdbf0"],
  background: ["#0d0d26", "#19194d", "#262673", "#333399", "#4040bf", "#6666cc", "#8c8cd9", "#b3b3e6", "#d9d9f2"],
  primary: ["#08082b", "#111155", "#191980", "#2222aa", "#2a2ad5", "#5555dd", "#7f7fe6", "#aaaaee", "#d4d4f7"],
  secondary: ["#06062d", "#0b0b5b", "#111188", "#1616b6", "#1c1ce3", "#4949e9", "#7777ee", "#a4a4f4", "#d2d2f9"],
  accent: ["#020231", "#050561", "#070792", "#0909c3", "#0b0bf4", "#3c3cf6", "#6d6df8", "#9e9efa", "#cecefd"],
  complementary: ["#2b2b08", "#555511", "#808019", "#aaaa22", "#d5d52a", "#dddd55", "#e6e67f", "#eeeeaa", "#f7f7d4"],
  tetradic: ["#2b0819", "#551133", "#80194c", "#aa2266", "#d52a80", "#dd5599", "#e67fb2", "#eeaacc", "#f7d4e6"],
  triadic: ["#2b0808", "#551111", "#801919", "#aa2222", "#d52a2a", "#dd5555", "#e67f7f", "#eeaaaa", "#f7d4d4"],
  analogous: ["#08192b", "#113355", "#194c80", "#2266aa", "#2a80d5", "#5599dd", "#7fb2e6", "#aaccee", "#d4e6f7"],
  ...defaultCommonColors,
};

export const royalBlueDeimosLightTheme: ThemeObject = {
  colors: royalBlueDeimosLightColors,
  spacing: royalBlueDeimosSpacing,
  typography: royalBlueDeimosTypography,
};

export const royalBlueDeimosDarkTheme: ThemeObject = {
  colors: royalBlueDeimosDarkColors,
  spacing: royalBlueDeimosSpacing,
  typography: royalBlueDeimosTypography,
};

export { royalBlueDeimosSpacing, royalBlueDeimosTypography };

export const royalBlueDeimosTheme: MultiThemeProviderProps["themes"] = [
  {
    name: "dark",
    theme: royalBlueDeimosDarkTheme,
  },
  {
    name: "light",
    theme: royalBlueDeimosLightTheme,
  },
];
