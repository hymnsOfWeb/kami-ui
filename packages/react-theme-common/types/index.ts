import { PropsWithChildren } from "react";

export type ColorType = string | string[];
export type OddStrArr = [string, string, string] | [string, string, string, string, string];

export interface ColorsObject {
  primary: ColorType;
  secondary: ColorType;

  accent?: ColorType;
  neutral?: ColorType;

  complementary?: ColorType;
  analogous?: ColorType;
  triadic?: ColorType;
  tetradic?: ColorType;

  success?: ColorType;
  warning?: ColorType;
  info?: ColorType;
  danger?: ColorType;

  gray?: ColorType;
  white?: ColorType;
  black?: ColorType;
}

export interface TypographyObject {
  fontSizes: OddStrArr;
  fontFamilies?: {
    sans?: string;
    serif?: string;
    mono?: string;
    cursive?: string;
  };
}

export interface ThemeObject {
  colors: ColorsObject;
  typography?: TypographyObject;
}

export type ThemeProviderProps = PropsWithChildren<{
  injectInBody?: boolean;
  mode?: string;
  theme: ThemeObject;
}>;

export type MultiThemeProviderProps = PropsWithChildren<{
  themes: {
    name: string;
    theme: ThemeObject;
  }[];
  injectInBody?: boolean;
  disableConsole?: boolean;
}>;
