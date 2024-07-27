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
  text: ["#d7d2f9", "#afa6f2", "#8779ec", "#5e4ce6", "#3620df", "#2b19b3", "#211386", "#160d59", "#0b062d"],
  background: ["#d6d6f5", "#adadeb", "#8585e0", "#5c5cd6", "#3333cc", "#2929a3", "#1f1f7a", "#141452", "#0a0a29"],
  primary: ["#d6d4f7", "#ada9ef", "#847ee7", "#5b54de", "#3129d6", "#2821ab", "#1e1881", "#141056", "#0a082b"],
  secondary: ["#cfccff", "#9e99ff", "#6e66ff", "#3d33ff", "#0d00ff", "#0a00cc", "#080099", "#050066", "#030033"],
  accent: ["#ceccff", "#9c99ff", "#6b66ff", "#3a33ff", "#0800ff", "#0700cc", "#050099", "#030066", "#020033"],
  complementary: ["#f5f7d4", "#ebefa9", "#e2e77e", "#d7de54", "#cdd629", "#a4ab21", "#7c8118", "#535610", "#292b08"],
  tetradic: ["#f7d4e4", "#efa9c8", "#e77ead", "#de5492", "#d62977", "#ab215f", "#811847", "#56102f", "#2b0818"],
  triadic: ["#f7d6d4", "#efaca9", "#e7837e", "#de5b54", "#d63229", "#ab2821", "#811d18", "#561410", "#2b0a08"],
  analogous: ["#d4e4f7", "#a9c8ef", "#7eade7", "#5492de", "#2977d6", "#215fab", "#184781", "#103056", "#08182b"],
  ...defaultCommonColors,
};

export const defaultDarkColors: ColorsObject = {
  text: ["#0a062d", "#140c5a", "#1e1287", "#2818b4", "#321fe0", "#5b4be7", "#8478ed", "#ada5f3", "#d6d2f9"],
  background: ["#0a0a29", "#141452", "#1f1f7a", "#2929a3", "#3333cc", "#5c5cd6", "#8585e0", "#adadeb", "#d6d6f5"],
  primary: ["#0a082b", "#141056", "#1e1881", "#2821ab", "#3129d6", "#5b54de", "#847ee7", "#ada9ef", "#d6d4f7"],
  secondary: ["#030033", "#050066", "#080099", "#0a00cc", "#0d00ff", "#3d33ff", "#6e66ff", "#9e99ff", "#cfccff"],
  accent: ["#020033", "#030066", "#050099", "#0700cc", "#0800ff", "#3a33ff", "#6b66ff", "#9c99ff", "#ceccff"],
  complementary: ["#292b08", "#535610", "#7c8118", "#a4ab21", "#cdd629", "#d7de54", "#e2e77e", "#ebefa9", "#f5f7d4"],
  tetradic: ["#2b0818", "#56102f", "#811847", "#ab215f", "#d62977", "#de5492", "#e77ead", "#efa9c8", "#f7d4e4"],
  triadic: ["#2b0a08", "#561410", "#811d18", "#ab2821", "#d63229", "#de5b54", "#e7837e", "#efaca9", "#f7d6d4"],
  analogous: ["#08182b", "#103056", "#184781", "#215fab", "#2977d6", "#5492de", "#7eade7", "#a9c8ef", "#d4e4f7"],
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
