import { ColorsObject, MultiThemeProviderProps, ThemeObject } from "@kami-ui/types";
import {
  defaultSpacing as pearHeraSpacing,
  defaultTypography as pearHeraTypography,
  defaultCommonColors,
} from "./default";

export const pearHeraLightColors: ColorsObject = {
  text: ["#f1f9d2", "#e4f3a5", "#d6ed78", "#c8e84a", "#bae21d", "#95b517", "#708712", "#4b5a0c", "#252d06"],
  background: ["#f0f7d4", "#e0f0a8", "#d1e87d", "#c1e052", "#b2d926", "#8ead1f", "#6b8217", "#47570f", "#242b08"],
  primary: ["#f2f9d2", "#e5f2a6", "#d9ec79", "#cce64c", "#bfdf20", "#99b319", "#738613", "#4c590d", "#262d06"],
  secondary: ["#d4d2f9", "#a8a6f2", "#7d79ec", "#524ce6", "#2620df", "#1f19b3", "#171386", "#0f0d59", "#08062d"],
  accent: ["#f9d2f8", "#f2a6f1", "#ec79ea", "#e64ce3", "#df20dc", "#b319b0", "#861384", "#590d58", "#2d062c"],
  complementary: ["#d9d2f9", "#b3a6f2", "#8c79ec", "#664ce6", "#4020df", "#3319b3", "#261386", "#1a0d59", "#0d062d"],
  tetradic: ["#d2f9ed", "#a6f2d9", "#79ecc6", "#4ce6b3", "#20df9f", "#19b380", "#138660", "#0d5940", "#062d21"],
  triadic: ["#d2f2f9", "#a6e5f2", "#79d9ec", "#4ccce6", "#20bfdf", "#1999b3", "#137386", "#0d4c59", "#06262d"],
  analogous: ["#f9edd2", "#f2d9a6", "#ecc679", "#e6b34c", "#df9f20", "#b38019", "#866013", "#59400d", "#2d2106"],
  ...defaultCommonColors,
};

export const pearHeraDarkColors: ColorsObject = {
  text: ["#252d06", "#4b5a0c", "#708712", "#95b517", "#bae21d", "#c8e84a", "#d6ed78", "#e4f3a5", "#f1f9d2"],
  background: ["#242b08", "#47570f", "#6b8217", "#8ead1f", "#b2d926", "#c1e052", "#d1e87d", "#e0f0a8", "#f0f7d4"],
  primary: ["#262d06", "#4c590d", "#738613", "#99b319", "#bfdf20", "#cce64c", "#d9ec79", "#e5f2a6", "#f2f9d2"],
  secondary: ["#08062d", "#0f0d59", "#171386", "#1f19b3", "#2620df", "#524ce6", "#7d79ec", "#a8a6f2", "#d4d2f9"],
  accent: ["#2d062c", "#590d58", "#861384", "#b319b0", "#df20dc", "#e64ce3", "#ec79ea", "#f2a6f1", "#f9d2f8"],
  complementary: ["#0d062d", "#1a0d59", "#261386", "#3319b3", "#4020df", "#664ce6", "#8c79ec", "#b3a6f2", "#d9d2f9"],
  tetradic: ["#062d21", "#0d5940", "#138660", "#19b380", "#20df9f", "#4ce6b3", "#79ecc6", "#a6f2d9", "#d2f9ed"],
  triadic: ["#06262d", "#0d4c59", "#137386", "#1999b3", "#20bfdf", "#4ccce6", "#79d9ec", "#a6e5f2", "#d2f2f9"],
  analogous: ["#2d2106", "#59400d", "#866013", "#b38019", "#df9f20", "#e6b34c", "#ecc679", "#f2d9a6", "#f9edd2"],
  ...defaultCommonColors,
};

export const pearHeraLightTheme: ThemeObject = {
  colors: pearHeraLightColors,
  spacing: pearHeraSpacing,
  typography: pearHeraTypography,
};

export const pearHeraDarkTheme: ThemeObject = {
  colors: pearHeraDarkColors,
  spacing: pearHeraSpacing,
  typography: pearHeraTypography,
};

export { pearHeraSpacing, pearHeraTypography };

export const pearHeraTheme: MultiThemeProviderProps["themes"] = [
  {
    name: "dark",
    theme: pearHeraDarkTheme,
  },
  {
    name: "light",
    theme: pearHeraLightTheme,
  },
];
