import {
  ColorsObject,
  SpacingObject,
  ThemeObject,
  TypographyObject,
  MultiThemeProviderProps,
} from "@kami-ui/react-theme-common";

export const defaultCommonColors: Omit<ColorsObject, "primary" | "secondary"> = {
  black: "#1A1A1A",
  white: "#FAFAFA",
  gray: ["#F8F9FA", "#E9ECEF", "#DEE2E6", "#CED4DA", "#ADB5BD", "#6C757D", "#495057", "#343A40", "#212529"],
  success: ["#ebf6ec", "#c4e5c6", "#9dd39f", "#76c279", "#4eb153", "#3d8941", "#2c622e", "#1a3b1c", "#091409"],
  error: ["#fee6e4", "#fbb4ae", "#f88179", "#f54f43", "#f21d0d", "#bc160a", "#861007", "#510a04", "#1b0301"],
  warning: ["#fff4e3", "#ffddaa", "#ffc671", "#ffaf39", "#ff9800", "#c67600", "#8e5400", "#553300", "#553300"],
  info: ["#e4f6fe", "#ade3fc", "#77d1f9", "#41bef7", "#0aacf5", "#0aacf5", "#0885be", "#065f88", "#033952", "#01131b"],
  neutral: ["#FFFAFA", "#F8F8FF", "#FFF5EE", "#FFF0F5", "#FAF0E6", "#FDF5E6", "#FAEBD7", "#F5F5F5", "#F0F0F0"],
};

export const defaultLightColors: ColorsObject = {
  primary: [],
  secondary: [],
  accent: [],
  text: [],
  background: [],
  // colord
  analogous: [],
  triadic: [],
  tetradic: [],
  complementary: [],
  //
  ...defaultCommonColors,
};

export const defaultDarkColors: ColorsObject = {
  primary: [],
  secondary: [],
  accent: [],
  text: [],
  background: [],
  // colord
  analogous: [],
  triadic: [],
  tetradic: [],
  complementary: [],
  //
  ...defaultCommonColors,
};

export const defaultTypography: TypographyObject = {
  fontSizes: ["0.75rem", "0.875rem", "1rem", "1.125rem", "1.25rem", "1.5rem", "1.75rem"],
  fontFamilies: {
    cursive: "Allura, cursive",
    mono: "Courier Prime, monospace",
    sans: "Poppins, sans-serif",
    serif: "Abril Fatface, serif",
  },
};

export const defaultSpacing: SpacingObject = {
  borderRadius: [" 0.125rem", "0.25rem", " 0.375rem", "0.5rem", "0.75rem"],
};

export const defaultLightTheme: ThemeObject = {
  colors: defaultLightColors,
  typography: defaultTypography,
  spacing: defaultSpacing,
};

export const defaultDarkTheme: ThemeObject = {
  colors: defaultDarkColors,
  typography: defaultTypography,
  spacing: defaultSpacing,
};

export const defaultTheme: MultiThemeProviderProps["themes"] = [
  {
    name: "dark",
    theme: defaultDarkTheme,
  },
  {
    name: "light",
    theme: defaultLightTheme,
  },
];
