import { ColorsObject, SpacingObject, ThemeObject, TypographyObject } from "@kami-ui/react-theme-common";

export const defaultColors: ColorsObject = {
  primary: [],
  secondary: [],
};

export const defaultTypography: TypographyObject = {
  fontSizes: [],
  fontFamilies: {
    cursive: "",
    mono: "",
    sans: "",
    serif: "",
  },
};

export const defaultSpacing: SpacingObject = {
  borderRadius: [],
  space: [],
};

export const defaultTheme: ThemeObject = {
  colors: defaultColors,
  typography: defaultTypography,
  spacing: defaultSpacing,
};
