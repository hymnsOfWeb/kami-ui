import { jsx, jsxs, Fragment } from 'react/jsx-runtime';
import Head from 'next/head';
import { useLayoutEffect, useEffect, createContext, useContext } from 'react';

const defaultTheme = {
    colors: {},
    typography: {},
};

const stringTrimmer = (str) => str.trim().replace(/\s/gm, "-");

const colorBuilder = (colors) => {
    let vars = "";
    for (const colorKey in colors) {
        const colorArr = colors[colorKey];
        if (!colorArr)
            continue;
        if (typeof colorArr === "string") {
            vars += `--color-${colorKey}:${colorArr};`;
            continue;
        }
        for (let i = 0; i < colorArr?.length ?? 0; i++) {
            vars += `--color-${colorKey}-${(i + 1) * 100}:${colorArr[i]};`;
        }
    }
    return vars;
};
const typographyBuilder = (typography) => {
    return `${JSON.stringify(typography)}`;
};
const themeBuilder = (theme, mode) => {
    if (!theme)
        return "";
    const { colors: c, typography: t } = theme;
    const colors = colorBuilder(c || defaultTheme.colors);
    // const spacing = spacingBuilder(s || defaultTheme.spacing);
    const typography = typographyBuilder(t || defaultTheme.typography || {});
    const formattedVars = `${mode ? `body.kami-ui-${stringTrimmer(mode)}` : `:root`}{${colors}${typography}}`;
    return formattedVars;
};

const ThemeProvider = ({ injectInBody = false, theme, mode, children }) => {
    const styles = themeBuilder(theme, mode);
    const styleElem = jsx("style", { id: "kami-ui-styles", dangerouslySetInnerHTML: { __html: styles } });
    return (jsxs(Fragment, { children: [injectInBody ? jsx(Fragment, { children: styleElem }) : jsx(Head, { children: styleElem }), children] }));
};

const useIsomorphicLayoutEffect = typeof window !== "undefined" ? useLayoutEffect : useEffect;

const ThemeContext = createContext([]);
const MultiThemeProvider = ({ themes = [], injectInBody = false, children }) => {
    const styles = themes.map(({ name, theme }) => themeBuilder(theme, name)).join("");
    const styleElem = jsx("style", { id: "kami-ui-styles", dangerouslySetInnerHTML: { __html: styles } });
    useIsomorphicLayoutEffect(() => {
        if (!document)
            return;
        let notHasBodyClass = true;
        for (const bodyClass of Array.from(document.body.classList)) {
            if (bodyClass.startsWith("kami-ui-")) {
                notHasBodyClass = false;
                break;
            }
        }
        if (notHasBodyClass && themes[0] && themes[0].name) {
            document.body.classList.add(`kami-ui-${stringTrimmer(themes[0].name)}`);
        }
    }, []);
    return (jsxs(ThemeContext.Provider, { value: themes, children: [injectInBody ? jsx(Fragment, { children: styleElem }) : jsx(Head, { children: styleElem }), children] }));
};
const useTheme = ({ disableConsole = false } = { disableConsole: false }) => {
    const themes = useContext(ThemeContext);
    const updateTheme = (themeName) => {
        if (!(document && themeName))
            return;
        const theme = themes.find(({ name }) => name === themeName);
        if (!theme) {
            if (!disableConsole)
                console.warn(`Theme ${themeName} not found`);
            return;
        }
        for (const bodyClass of Array.from(document.body.classList)) {
            if (bodyClass.startsWith("kami-ui-")) {
                document.body.classList.remove(bodyClass);
                break;
            }
        }
        document.body.classList.add(`kami-ui-${stringTrimmer(themeName)}`);
    };
    return { updateTheme };
};

export { MultiThemeProvider, ThemeProvider, useTheme };
