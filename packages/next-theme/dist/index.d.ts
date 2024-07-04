import * as react_jsx_runtime from 'react/jsx-runtime';
import { PropsWithChildren } from 'react';

type ColorType = string | string[];
type OddStrArr = [string, string, string] | [string, string, string, string, string];
interface ColorsObject {
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
interface TypographyObject {
    fontSizes: OddStrArr;
    fontFamilies?: {
        sans?: string;
        serif?: string;
        mono?: string;
        cursive?: string;
    };
}
interface ThemeObject {
    colors: ColorsObject;
    typography?: TypographyObject;
}
type ThemeProviderProps = PropsWithChildren<{
    injectInBody?: boolean;
    mode?: string;
    theme: ThemeObject;
}>;
type MultiThemeProviderProps = PropsWithChildren<{
    themes: {
        name: string;
        theme: ThemeObject;
    }[];
    injectInBody?: boolean;
}>;

declare const ThemeProvider: ({ injectInBody, theme, mode, children }: ThemeProviderProps) => react_jsx_runtime.JSX.Element;

declare const MultiThemeProvider: ({ themes, injectInBody, children }: MultiThemeProviderProps) => react_jsx_runtime.JSX.Element;
declare const useTheme: ({ disableConsole }?: {
    disableConsole?: boolean;
}) => {
    updateTheme: (themeName: string) => void;
};

export { type ColorType, type ColorsObject, MultiThemeProvider, type MultiThemeProviderProps, type OddStrArr, type ThemeObject, ThemeProvider, type ThemeProviderProps, type TypographyObject, useTheme };
