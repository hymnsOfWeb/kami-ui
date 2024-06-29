import { defaultTheme } from "./defaults";
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

const spacingBuilder = (spacing: ThemeObject["spacing"]) => {
  return ``;
};

const typographyBuilder = (typography: ThemeObject["typography"]) => {
  return ``;
};

export const themeBuilder = (theme: ThemeObject, mode?: string) => {
  if (!theme) return "";

  const { colors: c, spacing: s, typography: t } = theme;
  const colors = colorBuilder(c || defaultTheme.colors);
  const spacing = spacingBuilder(s || defaultTheme.spacing);
  const typography = typographyBuilder(t || defaultTheme.typography);
  const formattedVars = `${mode ? `body.kami-ui-${mode.trim().replace(/\s/gm, "-")}` : `:root`}{${colors}${spacing}${typography}}`;
  return formattedVars;
};
