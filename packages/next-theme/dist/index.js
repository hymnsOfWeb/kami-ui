'use strict';

var jsxRuntime = require('react/jsx-runtime');
var Head = require('next/head');
var react = require('react');

function _interopDefault (e) { return e && e.__esModule ? e : { default: e }; }

var Head__default = /*#__PURE__*/_interopDefault(Head);

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
    const styleElem = jsxRuntime.jsx("style", { id: "kami-ui-styles", dangerouslySetInnerHTML: { __html: styles } });
    return (jsxRuntime.jsxs(jsxRuntime.Fragment, { children: [injectInBody ? jsxRuntime.jsx(jsxRuntime.Fragment, { children: styleElem }) : jsxRuntime.jsx(Head__default.default, { children: styleElem }), children] }));
};

const useIsomorphicLayoutEffect = typeof window !== "undefined" ? react.useLayoutEffect : react.useEffect;

const ThemeContext = react.createContext([]);
const MultiThemeProvider = ({ themes = [], injectInBody = false, children }) => {
    const styles = themes.map(({ name, theme }) => themeBuilder(theme, name)).join("");
    const styleElem = jsxRuntime.jsx("style", { id: "kami-ui-styles", dangerouslySetInnerHTML: { __html: styles } });
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
    return (jsxRuntime.jsxs(ThemeContext.Provider, { value: themes, children: [injectInBody ? jsxRuntime.jsx(jsxRuntime.Fragment, { children: styleElem }) : jsxRuntime.jsx(Head__default.default, { children: styleElem }), children] }));
};
const useTheme = ({ disableConsole = false } = { disableConsole: false }) => {
    const themes = react.useContext(ThemeContext);
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

exports.MultiThemeProvider = MultiThemeProvider;
exports.ThemeProvider = ThemeProvider;
exports.useTheme = useTheme;
