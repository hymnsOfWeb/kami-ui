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

const typographyBuilder = (typography: NonNullable<ThemeObject["typography"]>) => {
  return `${JSON.stringify(typography)}`;
};

export const themeBuilder = (theme: ThemeObject, mode?: string) => {
  if (!theme) return "";

  const { colors: c, typography: t } = theme;
  const colors = colorBuilder(c || defaultTheme.colors);
  // const spacing = spacingBuilder(s || defaultTheme.spacing);
  const typography = typographyBuilder(t || defaultTheme.typography || ({} as any));
  const formattedVars = `${mode ? `body.kami-ui-${stringTrimmer(mode)}` : `:root`}{${colors}${typography}}`;
  return formattedVars;
};
