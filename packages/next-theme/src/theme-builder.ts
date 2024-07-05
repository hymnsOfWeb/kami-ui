import { defaultTheme } from "./defaults";
import { stringTrimmer } from "./helpers";
import type { ThemeObject } from "./types";

const colorBuilder = (colors: ThemeObject["colors"]) => {
  let vars = "";
  for (const colorKey in colors) {
    const colorArr = colors[colorKey as keyof ThemeObject["colors"]];
    if (!colorArr) continue;
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

const typographyBuilder = (typography: ThemeObject["typography"]) => {
  let vars = "";
  if (!typography) return vars;
  const { fontSizes, fontFamilies } = typography;
  if (fontFamilies) {
    for (const fontFamily in fontFamilies) {
      vars += `--font-${fontFamily}:${fontFamilies[fontFamily as keyof typeof fontFamilies]};`;
    }
  }
  const len = fontSizes.length;
  if (len > 5) fontSizes.splice(0, 5);
  if (len > 3 && len < 5) fontSizes.splice(0, 3);
  if (len < 3) return vars;
  const sizes = ["xs", "s", "m", "l", "xl"];
  for (let i = 0; i < len; i++) {
    vars += `--font-size-${sizes[i + (len === 3 ? 1 : 0)]}:${fontSizes[i]}`;
  }
  return vars;
};

export const themeBuilder = (theme: ThemeObject, mode?: string) => {
  if (!theme) return "";

  const { colors: c, typography: t } = theme;
  const colors = colorBuilder(c || defaultTheme.colors);
  // const spacing = spacingBuilder(s || defaultTheme.spacing);
  const typography = typographyBuilder(t || defaultTheme.typography);
  const formattedVars = `${mode ? `body.kami-ui-${stringTrimmer(mode)}` : `:root`}{${colors}${typography}}`;
  return formattedVars;
};
